var images = ["life-of-pi-1200-1200-675-675-crop-000000.jpg", "486141.jpg", "trans image 2.jpg"];
var count = 0;
var image = document.getElementById("imageslide");
setInterval(function() {
image.src = images[count];
count = (count + 1) % images.length;
}, 4000);