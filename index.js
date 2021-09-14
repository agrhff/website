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