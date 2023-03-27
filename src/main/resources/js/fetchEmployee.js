console.log("er i fetchEmployee")
const urlEmployee = "http://localhost:8080/employees"
let employeeList = []
const ddSelectEmployee = document.getElementById("ddSelectEmployee")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    employeeList = await fetchAny(urlEmployee);
    console.log(employeeList)
    employeeList.forEach(fillEmployeeDropDown)
    employeeList.forEach(createEmployeeTable)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillEmployeeDropDown(employee) {
    const el = document.createElement("option")
    console.log(el)
    el.value = employee.employeeId
    el.textContent = employee.employeeId + ' ' + employee.firstname + ' ' + employee.lastname
    el.employee = employee
    console.log(employee.employeeId)
    console.log(employee)
    ddSelectEmployee.appendChild(el)
}

function createEmployeeTable(employee) {
    console.log("creating table " + employee)
    if (!employee.employeeId) return;

    let cellCount = 0
    let rowCount = tblEmployee.rows.length
    let row = tblEmployee.insertRow(rowCount)
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

