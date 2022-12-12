//exercice 1 : displays one letter at the time every second in an alert box.
/*var prout = ['p','r','o','u','t','prout !'];

var display = function(i) {
    if (prout[i]) {
        alert(prout[i]);
        setTimeout(function(){display(i+1);}, 1000);
    }
}
display(0);
*/
//exercice 2 : displays seconds and minutes on the screen


let times = 0;

function timePassedSeconds() {    
    document.getElementById('seconds').innerHTML= (times + " seconds has passed");
    times++;
}

function timePassedMinutes() {
    document.getElementById('minutes').innerHTML= (Math.round(times/60) + " minutes has passed");
    times++;
}

setInterval(timePassedSeconds, 1000);

setInterval(timePassedMinutes, 60000);

