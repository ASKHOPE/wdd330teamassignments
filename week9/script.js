onkeydown = (e) => {
    const keycolor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keycolor.style.backgroundColor = "Blue";
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
};

onkeyup = (e) => {
    const keycolor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keycolor.style.backgroundColor = "grey";
}