var Ind = 0;
SlideBack();

    
function SlideBack() {
    var i;
    var x = document.getElementsByClassName("background");
    for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
    Ind++;
    if (Ind > x.length) {Ind = 1; }
    x[Ind-1].style.display = "block";
    setTimeout(SlideBack,9000)
    }



function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}

function openSIDE() {
  document.getElementById("navside").style.width="100%";
}

function closeSIDE() {
  document.getElementById("navside").style.width="0%";
}
