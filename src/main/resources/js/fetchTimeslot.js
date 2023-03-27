console.log("er i fetchTimeslots")
const urlTimeslot = "http://localhost:8080/timeslots"
let timeslotList = []
const ddSelectTimeslot = document.getElementById("ddSelectTimeslot")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    timeslotList = await fetchAny(urlTimeslot);
    console.log(timeslotList)
    timeslotList.forEach(fillTimeslotDropDown)
    timeslotList.forEach(createTimeslotTable)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillTimeslotDropDown(timeslot) {
    const el = document.createElement("option")
    console.log(el)
    el.value = timeslot.timeslotId
    el.textContent = timeslot.timeslotStart
    el.timeslot = timeslot
    console.log(timeslot.timeslotId)
    console.log(timeslot)
    ddSelectTimeslot.appendChild(el)
}

function createTimeslotTable(timeslot) {
    console.log("creating table " + timeslot)
    if (!timeslot.timeslotId) return;

    let cellCount = 0
    let rowCount = tblTimeslot.rows.length
    let row = tblTimeslot.insertRow(rowCount)
    row.id = timeslot.timeslotId

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = timeslot.timeslotId

    cell = row.insertCell(cellCount++)
    cell.innerHTML = timeslot.timeslotStart

    cell = row.insertCell(cellCount++)
    cell.innerHTML = timeslot.activity.name

    cell = row.insertCell(cellCount++)
    cell.innerHTML = timeslot.employee.firstname + ' ' + timeslot.employee.lastname
}
