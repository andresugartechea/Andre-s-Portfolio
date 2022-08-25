let btn_drawing = document.getElementById("btn_drawing");
let btn_all = document.getElementById("btn_all");

let drawing = document.getElementsByClassName("drawing");


if (btn_drawing) {
    btn_drawing.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
    });
}

if (btn_all) {
    btn_all.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'block';
        }
    });
}