console.log("er i endpoints")
//Activity
const urlActivity = "http://localhost:8080/activities" //skal hente fra egen database, kalder getmapping endpoint her
let activityList = []
const ddSelectActivity = document.getElementById("ddSelectActivity")
console.log(ddSelectActivity)
//window.addEventListener("load", loadEntity.bind(null, url=urlActivity, list=activityList))
window.addEventListener("load", () => loadEntity(urlActivity, activityList, ddSelectActivity));
//hver entitets evenlistener som kalder load[Entitet] kaldes kun når html filer, som inkludere
//den pågældende entitets js fil, loades.

//Employee
const urlEmployee = "http://localhost:8080/employees"
let employeeList = []
const ddSelectEmployee = document.getElementById("ddSelectEmployee")
//window.addEventListener("load", loadEntity.bind(null, url=urlActivity, list=activityList))
window.addEventListener("load", () => loadEntity(urlEmployee, employeeList));