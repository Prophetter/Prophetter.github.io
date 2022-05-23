function searchToggle() {
    var x = document.getElementById("search");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}

function iconSwap() {
    var x = document.getElementById("searchIcon");
    if (x.className === "search-icon") {
        x.className = "close-icon";
    } else {
        x.className = "search-icon"
    }
}

function miniIconSwap() {
    var x = document.getElementById("searchIconMini");
    if (x.className === "search-icon") {
        x.className = "close-icon";
    } else {
        x.className = "search-icon";
    }
}

function hamburger() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
}

function sidebarToggle() {
    var side = document.querySelector(".sidebar-container");
    var main = document.querySelector(".main");
    main.classList.toggle("sidebar-open");
    side.classList.toggle("sidebar-opened");
}

 function sidebarSwitch() {
   var drop = document.getElementById("dropmenu")
   if (drop.style.display === "block") {
       drop.style.display = "none";
   } else {
       drop.style.display = "block";
   }
 }

function plusMinus() {
    var plusminus = document.getElementById("side-icons");
    if (plusminus.className === "fa-solid fa-minus") {
        plusminus.className = "fa-solid fa-plus";
    } else {
        plusminus.className = "fa-solid fa-minus";
    }
}