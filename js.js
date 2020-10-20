function id(id) {
    return document.getElementById(id);
}

function minMax(idDiv) {
    let displayDiv = id(idDiv);
    if (displayDiv.style.display == "flex" || displayDiv.style.display == "") {
        return displayDiv.style.display = "none"
    }
    else {
        return displayDiv.style.display = "flex"
    }
}

function toggle() {
    return minMax("toggle")
}