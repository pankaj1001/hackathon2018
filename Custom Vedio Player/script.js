var video = document.getElementById('myved');
console.log(video);
var controls = document.getElementById('controll');
video.addEventListener('mouseover',function () {
  controls.style.visibility='visible';
  controls.style.transform='translateY(-25px)';
  controls.style.transition='0.2s';
});
video.addEventListener('mouseout',function () {
  controls.style.visibility='hidden';
  controls.style.transition='5s';
});
var button_play = document.getElementById('butt');
console.log(typeof(button_play));
var playing = 'false';
button_play.addEventListener('click', function play_pause() {
  if(playing =='false'){
    video.play();
    playing = 'true';
  }
  else{
    video.pause();
    playing = 'false';
  }
  });

var time = document.getElementById('time');
function gettime(){
  var currentTime = Math.floor(video.currentTime/60) + ':'+ Math.floor(video.currentTime)%60 + ' / ' + Math.floor(video.duration/60) + ':'+ Math.floor(video.duration)%60;
  time.innerHTML = currentTime;
console.log(currentTime);
}


setInterval(gettime,1000);

var muteb = document.getElementById('mute');
muteb.addEventListener('click',function (){
  //console.log("click");

if(video.muted == false){
  video.muted=true;
  video.volume=0;
}
else{
  video.volume=prev;
  ctvol.value=prev;
  video.muted=false;
}
});
var container=document.getElementById('container');
var full = document.getElementById('fullscreen');
full.addEventListener('click',function togglefull() {
if(container.style.height=='540px'){
  container.style.width='100vw';
  container.style.height='100vh';
}else{
  container.style.width='960px';
  container.style.height='540px';
}
});

var ctvol = document.getElementById('vol-input');
ctvol.addEventListener('change',function () {
  video.volume=this.value;
});

var videotime = document.getElementById('progress-input');
videotime.addEventListener('change',function () {
  video.currentTime=video.duration*(this.value)/100;
});

function set() {
  ctvol.value=video.volume;
  videotime.value=100*(video.currentTime/video.duration);
}
setInterval(set,1000);
