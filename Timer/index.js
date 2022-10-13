var currentdate=new Date(2022,8,18,8,41,34,5).getTime();
var curr=new Date(2022,6,18,8,41,34,5);
// var currentdate = new Date("Jan 5, 2024 15:37:25").getTime();
var x=setInterval(function()
{
    var now = new Date().getTime();
    var distance = currentdate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
   
    document.getElementById("day").innerHTML=days;
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('err').innerHTML="EXPIRED";
    }

},1000);
