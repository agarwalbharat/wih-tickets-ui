
 var elem = document.getElementById("fullScreen");

 function openFullscreen() {
	 alert("Take a screenShot and keep it with you");
     if (elem.requestFullscreen) {
         elem.requestFullscreen();
         setTimeout(function(){},3000);
     } else if (elem.mozRequestFullScreen) {
         elem.mozRequestFullScreen();
     } else if (elem.webkitRequestFullscreen) {
         elem.webkitRequestFullscreen();
     } else if (elem.msRequestFullscreen) {
         elem.msRequestFullscreen();
     }
 }
