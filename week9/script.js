onkeydown = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "Red";
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
};

onkeyup = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "yellow";
}