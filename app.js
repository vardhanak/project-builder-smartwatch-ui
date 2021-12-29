let toptime=document.getElementById("first");
let centertime=document.getElementById("second")
let day1=document.getElementById("third")
var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var setTime = setInterval(showtime);

// creating function which shows the time  showtime();
function showtime(){
    //creating a variable which stores today date //
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds=today.getSeconds();
    var day = today.getDay(); 

if(hours<10){
        hours=`0${hours}`;
    }
    if(minutes<10){
      minutes=`0${minutes}`;
      }
      

      first.textContent= hours+":"+ minutes;
      second.textContent= hours+":"+minutes;
      third.textContent= days[day];
      }
      setInterval(time,1000);