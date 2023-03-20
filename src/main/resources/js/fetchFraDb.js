console.log("er i fetchFraDb")

async function loadEntity(url, list){
    activityList = await fetchAny(url);
    console.log(list)
    activityList.forEach(fillEntityDropDown)
}

function fillEntityDropDown(entity) {
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

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

