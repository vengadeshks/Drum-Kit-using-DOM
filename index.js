
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
          var innerHtml = this.innerHTML;
          makesound(innerHtml);
          Animation(innerHtml);
  });
}

document.addEventListener('keydown',function(event){
  var keyPressed = event.key;
  makesound(keyPressed);
Animation(keyPressed);
});

function makesound(key){
  switch (key) {
  case "w":
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
  break;
  case "a":
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  break;
  case "s":
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
  break;
  case "d":
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  break;
  case "j":
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
  break;
  case "k":
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  break;
  case "l":
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  break;

default: console.log(key);
}
}
function Animation(pressedKey){
var activeButton =  document.querySelector("."+pressedKey);
activeButton.classList.add('pressed');
setTimeout(function() {
  activeButton.classList.remove('pressed');
},100);
}
