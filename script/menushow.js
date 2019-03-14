function showMenu(){
    document.getElementById("dropdown").style.top = "68px"
    document.getElementById("mnubutton").onclick = hideMenu
    document.getElementById("mnubutton").innerHTML = "keyboard_arrow_up"
}

function hideMenu(){
    document.getElementById("dropdown").style.top = "20px"
    document.getElementById("mnubutton").onclick = showMenu
    document.getElementById("mnubutton").innerHTML = "keyboard_arrow_down"
}
