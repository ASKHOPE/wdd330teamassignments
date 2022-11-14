const containers = document.querySelectorAll('.drag_conttainer');
const draggables = document.querySelectorAll('.key');

onkeydown = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "Red";
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

}

onkeyup = (e) => {
    const keyColor = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const color = keyColor.style.backgroundColor = "yellow";
    const marginTop = keyColor.style.marginTop ="40px";
}


draggables.forEach(graggable => {
    graggable.addEventListener('dragstart', ()=>{
        graggable.classList.add('dragging')
    })
    graggable.addEventListener('dragend', () => {
        graggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (e)=> {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable); 
    })
})
