let currentslide = 0;
let slidemax = 6;

function update() {
    currentslide++;
    if(currentslide > slidemax) currentslide = 1;

    let slides = document.getElementsByClassName('slide');
    for(let i = 0; i < slides.length; i++) {
        let sl = slides.item(i);
        sl.classList[sl.classList.contains(`slide${currentslide}`) ? 'remove' : 'add']('hidden');
    }
}

update();

window.addEventListener('keypress', (event) => {
    if(event.key !== 'Enter') return;
    update();
});