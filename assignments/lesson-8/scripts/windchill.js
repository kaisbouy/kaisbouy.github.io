/*The formula to calculate the wind chill factor is:
    f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/
function windChill() {
    var hi = parseFloat(document.getElementById("hiTemp").innerHTML);
    var lo = parseFloat(document.getElementById("loTemp").innerHTML);
    var t = (hi + lo)/2;
    var s = parseFloat(document.getElementById("windy").innerHTML);
    var speed = Math.pow(s, 0.16);
    var f = (35.74 + (0.6215 * t)) - (35.75 * speed) + ((0.4275 * t) * speed);
    return f.toPrecision(3);
}
    document.getElementById("chilly").innerHTML= windChill();