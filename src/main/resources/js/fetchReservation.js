console.log("er i fetchReservation")
const urlReservation = "http://localhost:8080/reservations"
let reservationList = []
const ddSelectReservation = document.getElementById("ddSelectReservation")

window.addEventListener("load", loadReservation)

async function loadReservation(){
    reservationList = await fetchAny(urlReservation);
    console.log(reservationList)
    reservationList.forEach(fillReservationDropDown)
    reservationList.forEach(createTable)
}

function fillReservationDropDown(reservation) {
    const el = document.createElement("option")
    console.log(el)
    el.value = reservation.reservationId
    el.textContent = reservation.reservationId + ' ' + reservation.customer.firstname + ' ' + reservation.customer.lastname + ' ' + reservation.timeslot.timeslotStart
    console.log(reservation.reservationId)
    ddSelectReservation.appendChild(el)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function createTable(reservation) {
    console.log("creating table " + reservation)
    if (!reservation.reservationId) return;

    let cellCount = 0
    let rowCount = tblReservation.rows.length
    let row = tblReservation.insertRow(rowCount)
    row.id = reservation.reservationId;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = reservation.reservationId

    cell = row.insertCell(cellCount++)
    cell.innerHTML = reservation.customer.firstname + ' ' + reservation.customer.lastname

    cell = row.insertCell(cellCount++)
    cell.innerHTML = reservation.timeslot.timeslotStart

    cell = row.insertCell(cellCount++)
    cell.innerHTML = reservation.timeslot.activity.name
}

