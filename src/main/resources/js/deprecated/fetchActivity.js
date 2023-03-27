console.log("er i fetchActivity")
const urlActivity = "http://localhost:8080/activities" //skal hente fra egen database, kalder getmapping endpoint her
let activityList = []
const ddSelectActivity = document.getElementById("ddSelectActivity")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    activityList = await fetchAny(urlActivity);
    console.log(activityList)
    activityList.forEach(fillActivityDropDown)
    activityList.forEach(createTable)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillActivityDropDown(activity) {
    const el = document.createElement("option")
    console.log(el)
    el.value = activity.activityId
    el.textContent = activity.activityId
    el.textContent += activity.name
    el.activity = activity //så reservation kan få hele activity object fra dropdown
    console.log(activity.activityId)
    console.log(activity)
    ddSelectActivity.appendChild(el)
}

function createTable(activity) {
    console.log("creating table " + activity)
    if (!activity.activityId) return;

    let cellCount = 0
    let rowCount = tblCustomer.rows.length
    let row = tblCustomer.insertRow(rowCount)
    row.id = activity.activityId;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = activity.activityId

    cell = row.insertCell(cellCount++)
    cell.innerHTML = activity.name

    cell = row.insertCell(cellCount++)
    let atag = document.createElement("a")
    atag.setAttribute("href", activity.imageurl)
    atag.innerText = activity.activityId
    cell.appendChild(atag)

    cell = row.insertCell(cellCount++)
    let img = document.createElement("img")
    img.setAttribute("src", activity.imageurl)
    img.setAttribute("alt", "imageurl")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
    cell.appendChild(img)
}

