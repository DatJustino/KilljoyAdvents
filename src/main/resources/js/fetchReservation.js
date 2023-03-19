console.log("er i fetchReservation")
const urlReservation = "http://localhost:8080/reservations" //skal hente fra egen database, kalder getmapping endpoint her
let reservationList = []
const ddSelectReservation = document.getElementById("ddSelectReservation")

window.addEventListener("load", loadReservation)

async function loadReservation(){
    reservationList = await fetchAny(urlReservation);
    console.log(reservationList)
    reservationList.forEach(fillReservationDropDown)
}

function fillReservationDropDown(reservation) {
    const el = document.createElement("option")
    console.log(el)
    el.value = reservation.reservationId
    el.textContent = reservation.reservationId
    el.textContent += " så" //test
    console.log(reservation.reservationId)
    ddSelectReservation.appendChild(el)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

