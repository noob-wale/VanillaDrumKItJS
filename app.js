window.addEventListener('keydown', function (e) {
    const AUDIO = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    if (!AUDIO) return;
    AUDIO.currentTime = 0;
    AUDIO.play();
    const KEY = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    KEY.classList.add("playing");
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

const KEYS = document.querySelectorAll(".key");

KEYS.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
})