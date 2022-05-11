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
    x.className = "search-icon"
  }
}