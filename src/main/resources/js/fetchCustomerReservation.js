console.log("er i fetchCustomer")
const urlCustomer = "http://localhost:8080/customers" //skal hente fra egen database, kalder getmapping endpoint her
let customerList = []
const ddSelectCustomer = document.getElementById("ddSelectCustomer")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    customerList = await fetchAny(urlCustomer);
    console.log(customerList)
    customerList.forEach(fillActivityDropDown)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillActivityDropDown(customer) {
    const el = document.createElement("option")
    console.log(el)
    el.value = customer.customerId
    el.textContent = customer.customerId + " " + customer.firstname + " " + customer.lastname
    el.customer = customer
    console.log(customer.customerId)
    console.log(customer)
    ddSelectCustomer.appendChild(el)
}
