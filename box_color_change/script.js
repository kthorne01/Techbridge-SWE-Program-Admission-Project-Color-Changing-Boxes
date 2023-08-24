// Inside the <script> tag

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(boxNumber) {
    const box = document.getElementById(`box${boxNumber}`);
    box.style.backgroundColor = getRandomColor();
}

function changeAllColors() {
    for (let i = 1; i <= 3; i++) {
        changeColor(i);
    }
}

function hideBox(boxNumber) {
    const box = document.getElementById(`box${boxNumber}`);
    box.style.display = 'none';
}

function hideAll() {
    for (let i = 1; i <= 3; i++) {
        hideBox(i);
    }
}

function showAll() {
    for (let i = 1; i <= 3; i++) {
        const box = document.getElementById(`box${i}`);
        box.style.display = 'inline-block';
    }
}

function resetColors() {
    const colors = ['danger', 'primary', 'success'];
    for (let i = 1; i <= 3; i++) {
        const box = document.getElementById(`box${i}`);
        box.className = `box bg-${colors[i - 1]}`;
    }
}
