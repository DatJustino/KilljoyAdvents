console.log("er i fetchFraDb")
//let entityList = [] //har vi brug for listen globalt?
//hvad hvis der hentes flere entiteter på en side?
//skal liste som parameter fjernes?, for flere entiteter skal der jo være flere arrays

async function loadEntity(url, list){
    list = await fetchAny(url);
    console.log(list)
    return list
    //if(fillEntityDropDown().ispresent)
    //måske en separat funktion skal tjekke om den er present
    //entityList.forEach(fillEntityDropDown)
}

/*function checkDisplayFunctions(list, ddSelectEntity){
    if (typeof fillEntityDropDown === "function") {
        takeInHTMLelement(ddSelectEntity)
        list.forEach(fillEntityDropDown)
    }
    //ny if med fillTable funktion
}*/

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

