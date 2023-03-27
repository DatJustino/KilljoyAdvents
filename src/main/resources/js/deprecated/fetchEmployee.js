console.log("er i fetchEmployee")
const urlEmployee = "http://localhost:8080/employees"
let employeeList = []
const ddSelectEmployee = document.getElementById("ddSelectEmployee")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    employeeList = await fetchAny(urlEmployee);
    console.log(employeeList)
    employeeList.forEach(fillActivityDropDown)
    employeeList.forEach(createTable)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillActivityDropDown(employee) {
    const el = document.createElement("option")
    console.log(el)
    el.value = employee.employeeId
    el.textContent = employee.employeeId
    el.textContent += employee.name
    el.employee = employee
    console.log(employee.employeeId)
    console.log(employee)
    ddSelectEmployee.appendChild(el)
}

function createTable(employee) {
    console.log("creating table " + employee)
    if (!employee.employeeId) return;

    let cellCount = 0
    let rowCount = tblCustomer.rows.length
    let row = tblCustomer.insertRow(rowCount)
    row.id = employee.employeeId;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = employee.employeeId

    cell = row.insertCell(cellCount++)
    cell.innerHTML = employee.firstname

    cell = row.insertCell(cellCount++)
    cell.innerHTML = employee.lastname

    cell = row.insertCell(cellCount++)
    cell.innerHTML = employee.mobilnr

    cell = row.insertCell(cellCount++)
    cell.innerHTML = employee.email
}





