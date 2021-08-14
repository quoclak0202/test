window.onscroll = function() {myFunction()};

function myFunction() {
  document.getElementById("log").innerHTML = document.documentElement.scrollTop;
  var x = document.documentElement.scrollTop;
  var xs = document.body.scrollTop;
  
  var text1 = document.getElementById("s2-text1");
  var text2 = document.getElementById("s2-text2");
  var s2link1 = document.getElementById("s2-link1");
  var s2link2 = document.getElementById("s2-link2");
  var s2link3 = document.getElementById("s2-link3");
  if(x > 250 || xs > 250){
      text1.style.transform = "translate(0,0)";
      text1.style.opacity = 1;
      text2.style.transform = "translate(0,0)";
      text2.style.opacity = 1;
  }
  if(x > 450 || xs > 450)
  {
    s2link1.style.transform = "translate(0,0)";
    s2link1.style.opacity = 1;
    s2link2.style.transform = "translate(0,0)";
    s2link2.style.opacity = 1;
    s2link3.style.transform = "translate(0,0)";
    s2link3.style.opacity = 1;
  }
  if(x > 1000 || xs > 1000)
  {
    document.getElementById("nav-2").style.transform = "translate(0,0)";
    document.getElementById("support-screen").style.transform = "translate(0,0)"
    document.getElementById("main-screen").style.transform = "translate(0,0)";
  }

}