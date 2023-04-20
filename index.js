const video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

video.addEventListener("play", playFile);

function playFile() {
     canvas.width = video.videoWidth;
     canvas.height = video.videoHeight;
     worker();
}

function worker() {
     if (!video.ended) {
          ctx.filter = "grayscale(1)";
          // gab
          ctx.drawImage(video, 0, 0);
          setTimeout(worker, 1000 / 20); // 20 fps for performance
     }
}
