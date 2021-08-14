var link1 = document.getElementById("q1");
var link2 = document.getElementById("q2");
var link3 = document.getElementById("q3");
var sp = document.getElementById("current-screen");

var myframe = document.getElementById("main-iframe");

function onclickone(){
    myframe.src = "chart.html";
    link1.classList.add("press-nav-2");
    link2.classList.remove("press-nav-2");
    link3.classList.remove("press-nav-2");
    sp.innerHTML = "THỐNG KÊ TÌNH HÌNH DỊCH COVID";
}
function onclicktwo() {
    myframe.src = "News.html";
    link1.classList.remove("press-nav-2");
    link2.classList.add("press-nav-2");
    link3.classList.remove("press-nav-2");
    sp.innerHTML = "TIN TỨC VỀ TÌNH HÌNH DỊCH";
}
function onclickthree(){
    myframe.src = "protect.html"
    link1.classList.remove("press-nav-2");
    link2.classList.remove("press-nav-2");
    link3.classList.add("press-nav-2");
    sp.innerHTML = "BIỆN PHÁP PHÒNG CHỐNG COVID";
}

