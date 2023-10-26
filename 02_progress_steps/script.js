const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
    }

    updateDOM()
});
prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    }

    updateDOM()
});

function updateDOM() {
    circles.forEach((circle, idx) => {
       if (idx < currentActive) {
            circle.classList.add('active');
       } else {
            circle.classList.remove('active');
       }
    });

    const actives = document.querySelectorAll('.active');
    const surprise = document.getElementById('success');

    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
        surprise.style.display = 'block';
    } else {
        prev.disabled = false;
        next.disabled = false;
        surprise.style.display = 'none';
    }
}
