var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = d.getDate();
var m = new Date();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = d.getFullYear();    
var myDate = days[d.getDay()] + ", " + date + " " + month[m.getMonth()] + " " + year;
document.getElementById("currentdate").innerHTML = myDate;


