const timeline = document.getElementsByClassName('timeline')[0];
const canvas = timeline.querySelector('canvas');
const ctx = canvas.getContext('2d');

(async () => {
    window.addEventListener('resize', (ev) => {
        canvas.width = timeline.clientWidth;
        canvas.height = timeline.clientHeight;
    });

    async function draw() {
        if(!canvas.classList.contains('hidden') && canvas.checkVisibility()) {
            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
})();