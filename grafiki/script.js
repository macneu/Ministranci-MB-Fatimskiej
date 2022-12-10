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