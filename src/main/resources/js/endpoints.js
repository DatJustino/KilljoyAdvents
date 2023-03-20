console.log("er i endpoints")
//Activity
const urlActivity = "http://localhost:8080/activities" //skal hente fra egen database, kalder getmapping endpoint her
let activityList = []
const ddSelectActivity = document.getElementById("ddSelectActivity")
//window.addEventListener("load", loadEntity.bind(null, urlActivity, activityList))
window.addEventListener("load", () => loadEntity(urlActivity, activityList));
//hver entitets evenlistener som kalder load[Entitet] kaldes kun når html filer, som inkludere
//den pågældende entitets js fil, loades.

