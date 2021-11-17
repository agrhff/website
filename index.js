window.onload = function(){
    let player = document.querySelector('#player')  
    let el = document.querySelector("#musicControl");
    el.addEventListener("click", changeMusicState);

    function changeMusicState() {
        el.classList.toggle('music-control-pause');

        if (el.classList.contains('music-control-pause')) {
            player.play();
        } else {
            player.pause();
        }
    }
}

let burgerMenu = document.querySelector('.menu');
let navigation = document.querySelector('.nav');
let page = document.querySelector('html');

burgerMenu.addEventListener('click', () => {
    page.classList.toggle("no-scroll");
	burgerMenu.classList.toggle('active');
    navigation.classList.toggle("visible");
});

myTimer();

let myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    let d = new Date();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let suffix = hours >= 12 ? 'PM' : 'AM';
    let northAmericanHours = hours == 0 ? 12 : (hours <= 12 ? hours : hours - 12);
    let time = northAmericanHours + ":" + minutes + " " + suffix;

    document.getElementById("local-time").innerHTML = time;
  }

// scroll 
  $(function() {
var $txtSliderUl = $('.text-slider ul'),
    $txtSliderli = $txtSliderUl.append($txtSliderUl.html()).children(),
    _height = $('.text-slider').height() * -1,
    scrollSpeed = 600,
    timer,
    speed = 1000 + scrollSpeed;

function sliderText() {
var _now = $txtSliderUl.position().top / _height;
_now = (_now + 1) % $txtSliderli.length;

$txtSliderUl.animate({
  top: _now * _height
}, scrollSpeed, function() {

  if (_now == $txtSliderli.length / 2) {
    $txtSliderUl.css('top', 0);
  }

});

timer = setTimeout(sliderText, speed);
}

$txtSliderli.hover(function() {
clearTimeout(timer);
}, function() {
timer = setTimeout(sliderText, speed);
});

timer = setTimeout(sliderText, speed);
});