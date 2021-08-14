var date = document.getElementById("current-date")

let year = new Date().getFullYear();
let month = new Date().getUTCMonth() + 1;
let day = new Date().getDate();
date.innerHTML =day +"."+ month + "." + year;


