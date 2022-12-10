

function wybor(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-border-black", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-black";
  };

window.onload = function() {
  document.getElementById('rs1').innerText = localStorage.getItem('imie1');
  if (document.getElementById('rs1').innerText == localStorage.imie1) {
    document.getElementById('sub1').disabled = true;
  } else {
    document.getElementById('sub1').disabled = false;
  }

  document.getElementById('rs2').innerText = localStorage.getItem('imie2');
  if (document.getElementById('rs2').innerText == localStorage.imie2) {
    document.getElementById('sub2').disabled = true;
  } else {
    document.getElementById('sub2').disabled = false;
  }
}

function clear() {
  localStorage.clear();
}

function click1() {
  if (typeof(Storage) !== "undefined") {
    localStorage.imie1 = document.getElementById("imie1").value;
    localStorage.setItem('imie1',localStorage.imie1);
    document.getElementById('rs1').innerHTML = localStorage.getItem('imie1');
  } else {
    document.getElementById("rs1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function click2() {
  if (typeof(Storage) !== "undefined") {
    localStorage.imie2 = document.getElementById("imie2").value;
    localStorage.setItem('imie2',localStorage.imie2);
    document.getElementById('rs2').innerHTML = localStorage.getItem('imie2');
  } else {
    document.getElementById("rs2").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

