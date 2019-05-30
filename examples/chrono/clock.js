setInterval(Clock,500);
var idSec = document.getElementById("sec");
var idMin = document.getElementById("min");
var idHour = document.getElementById("hour");
var date = new Date();
    function Clock(){
    idSec.style.transform = 'rotate('+ 6 * date.getSeconds() +'deg)';
    idMin.style.transform = 'rotate('+ 6 * date.getMinutes() +'deg)';
    idHour.style.transform = 'rotate('+ 30 * date.getHours() +'deg)';
    date = new Date();
}

n =  new Date();
d = n.getDate();
document.getElementById("day").innerHTML = d;