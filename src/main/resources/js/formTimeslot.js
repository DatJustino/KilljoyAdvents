console.log("Vi er i formTimeslot")

document.addEventListener('DOMContentLoaded', createFormEventListener);
let formTimeslot;

function createFormEventListener(){
    formTimeslot = document.getElementById("formTimeslot");
    formTimeslot.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
    //Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    console.log(form === formTimeslot)
    try {
        const formData = new FormData(form)
        console.log(formData)
        const responseData = await postFormData(url, formData)

        // når vi har oprettet sognet
        alert(formData.get('timeslotStart') + ' er oprettet');

        const homeUrl = "timeslot.html";
        window.location.replace(homeUrl); //man kan ikke gøre det her indeni en submit button
        //window.location.href = homeUrl;

    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}


async function postFormData(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries())
    const ixactivity = ddSelectActivity.selectedIndex;
    const linjeActivity = ddSelectActivity[ixactivity]
    plainFormData.activity = linjeActivity.activity

    const ixemployee = ddSelectEmployee.selectedIndex;
    const linjeEmployee = ddSelectEmployee[ixemployee]
    plainFormData.employee = linjeEmployee.employee

    console.log("plainFormData: ", plainFormData)
    const formDataJsonString = JSON.stringify(plainFormData)
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formDataJsonString
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    }
    return response.json();
}
