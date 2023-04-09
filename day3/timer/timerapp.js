var endTime = new Date("2024 15:37:25").getTime();
var x = setInterval(function() {
  var currentTime = new Date().getTime();
  var difference = endTime - currentTime;
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =  hours + ": "
  + minutes + ": " + seconds;
}, 1000);
