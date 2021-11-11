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

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('active');
    navigation.classList.toggle("visible");
});

myTimer();

var myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    var d = new Date();
    document.getElementById("local-time").innerHTML = d.toLocaleTimeString();
  }