var i = 0;
var txt =  document.getElementById("poem").innerHTML;
document.getElementById("poem").innerHTML="";
var speed = 200; /* The speed/duration of the effect in milliseconds */
var type= true;
function typeWriter() {
if(type){
  if (i < txt.length) {
    switch (txt.charAt(i)) {
      case "%":
      document.getElementById("poem").innerHTML += " <br>";
      break;

      case "/":
      document.getElementById("poem").innerHTML += "<br> <br>";
      break;

      case "*":
      document.getElementById("nextPoem").style.display = "block";
      break;

      default:document.getElementById("poem").innerHTML += txt.charAt(i);

    }



    i++;

    setTimeout(typeWriter, speed);
}
}
}

function skip() {
  type=false;
  document.getElementById("poem").innerHTML=txt;
  document.getElementById("nextPoem").style.display = "block";
}
