//funktion som tager entityliste her?
let ddSelectEntityGlobal

//funktion som tager navn på entitet og laver streng som henter dens html
function takeInHTMLelement(ddSelectEntity){
    //se på id'et af ddSelectEntity
    entityString = ddSelectEntity.id
    console.log(entityString)
}

function fillEntityDropDown(list, ddSelectEntity) {
    ddSelectEntityGlobal = ddSelectEntity
    list.forEach(fillEntityDropDown2)
}

function fillEntityDropDown2(entity) {
    const el = document.createElement("option")
    console.log(el)
    const id = Object.values(entity)[0] //tager første/nulte attribut som er id
    el.value = String(id)
    el.textContent = String(id)
    el.activity = entity //så reservation kan få hele activity object fra dropdown
    console.log(String(id))
    console.log(entity)
    ddSelectActivity.appendChild(el)
}