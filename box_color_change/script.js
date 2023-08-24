
function changeColor(boxNumber) {

    // need function to handle individual boxes
    function updateBox(box, bgColor, borderColor, borderStyle) {
        box.classList.remove("bg-danger", "bg-primary", "bg-success");
        box.classList.add(bgColor);
    

        box.style.borderColor = borderColor;
        box.style.borderStyle = borderStyle;
    }

    if (boxNumber === 'all') {
        for (let i = 1; i <= 3; i++) {
            const box = document.getElementById(`box${i}`);
            switch (i) {
                case 1:
                    updateBox(box, "bg-secondary", "#FFEA00", "dashed");
                    break;
                case 2:
                    updateBox(box, "bg-warning", "#0047AB", "dotted");
                    break;
                case 3:
                    updateBox(box, "bg-info", "#DC143C", "double");
                    break;
            }
        }
    } else {
        const box = document.getElementById(`box${boxNumber}`);
        if (boxNumber === 1) {
            updateBox(box, "bg-warning", "#0047AB", "dotted");
        } else if (boxNumber === 2) {
            updateBox(box, "bg-info", "#DC143C", "double");
        } else if (boxNumber === 3) {
            updateBox(box, "bg-secondary", "#FFEA00", "dashed");
        }
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

    const borderStyles = [
        {color: '#000000', style: 'solid', width: '3px'},
        {color: '#FF69B4', style: 'dashed', width: '5px'},
        {color: '#FFA500', style: 'solid', width: '4px'}
    ];

    for (let i = 1; i <= 3; i++) {
        const box = document.getElementById(`box${i}`);
        box.className = `box bg-${colors[i - 1]}`;
        
        // need to set the border properties to the original styles
        box.style.borderColor = borderStyles[i - 1].color;
        box.style.borderStyle = borderStyles[i - 1].style;
        box.style.borderWidth = borderStyles[i - 1].width;
    }
}



