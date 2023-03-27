console.log("er i index.js");
//https://codepen.io/jamesqquick/pen/NWKaNQz

const urlActivity = "http://localhost:8080/activities";
let activityList = [];
const tblCustomer = document.getElementById("tblActivity")
document.addEventListener('DOMContentLoaded', loadActivity);
const ddSelectActivity = document.getElementById("ddSelectActivity");

const activitygrit = document.getElementById('activitygrit');

async function loadActivity() {
    activityList = await fetchAny(urlActivity);
    console.log(activityList);
    //activityList.forEach(createTable)
    displayActivity(activityList);
}

const displayActivity = (activityList) => {
    console.log(activityList);
    const activityHTMLString = activityList
        .map(
            (activity) => `
        <li class="card">
            <img class="card-image" src="${activity.imageurl}" alt="billede af aktivitet" height="180px" width="180px">
            <h2 class="card-title">${activity.name}</h2>
            <p class="card-subtitle">Hal ${Math.floor((Math.random() * 5) + 1)}</p>
        </li>
    `
        )
        .join('');
    activitygrit.innerHTML = activityHTMLString;
};


function fetchAny(url) {
    console.log(url);
    return fetch(url).then((response) => response.json());
}

/*function createTable(activity) {
    console.log("creating table " + activity)
    if (!activity.activityId) return;

    let cellCount = 0
    let rowCount = tblActivity.rows.length
    let row = tblActivity.insertRow(rowCount)
    row.id = activity.activityId;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = activity.activityId

    cell = row.insertCell(cellCount++)
    cell.innerHTML = activity.activityName

    cell = row.insertCell(cellCount++)
    let atag = document.createElement("a")
    atag.setAttribute("href", activity.href)
    atag.innerText = activity.activityId
    cell.appendChild(atag)

    cell = row.insertCell(cellCount++)
    cell.innerHTML = "så"
}*/

