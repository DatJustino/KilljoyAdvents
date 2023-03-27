console.log("er i fetchEmployeeTimeslot")
const urlEmployee = "http://localhost:8080/employees"
let employeeList = []
const ddSelectEmployee = document.getElementById("ddSelectEmployee")

window.addEventListener("load", loadEmployee)

async function loadEmployee(){
    employeeList = await fetchAny(urlEmployee);
    console.log(employeeList)
    employeeList.forEach(fillEmployeeDropDown)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillEmployeeDropDown(employee) {
    const el = document.createElement("option")
    console.log(el)
    el.value = employee.employeeId
    el.textContent = employee.employeeId + " " + employee.firstname + " " + employee.lastname
    el.employee = employee
    console.log(employee.employeeId)
    console.log(employee)
    ddSelectEmployee.appendChild(el)
}
