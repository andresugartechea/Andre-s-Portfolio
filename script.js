// BUTTONS
let btn_drawing = document.getElementById("btn_drawing");
let btn_digital = document.getElementById("btn_digital");
let btn_video = document.getElementById("btn_video");
let btn_IM = document.getElementById("btn_IM");
let btn_all = document.getElementById("btn_all");

// CLASSES
let drawing = document.getElementsByClassName("drawing");
let digital = document.getElementsByClassName("digital");
let video = document.getElementsByClassName("video");
let IM = document.getElementsByClassName("IM");

let a;
document.querySelectorAll(".gallery .container").forEach(container =>{
    container.onclick = () => {
        document.querySelector(".popup-img").style.display = "block";
        document.querySelector(".gallery").style.display = "none";
        document.querySelector(".nav").style.display = "none";
        // document.querySelector(".footer").style.display = "none";
        // a = container.querySelector(".details p").innerHTML;
        // console.log(a);
        document.querySelector(".popup-img img").src = container.querySelector("img").getAttribute("src");
        document.querySelector(".popup-img .title").innerHTML = container.querySelector("img").getAttribute("alt");
        document.querySelector(".popup-img .label-details").innerHTML = container.querySelector(".details p").innerHTML;
        document.querySelector(".popup-img .label-description").innerHTML = container.querySelector(".description p").innerHTML;
    }
})

document.getElementById("span").onclick = () => {
    document.querySelector(".popup-img").style.display = "none";
    document.querySelector(".gallery").style.display = "flex";
    document.querySelector(".nav").style.display = "flex";
}

// BUTTON BEHAVIOUR

if (btn_drawing) {
    btn_drawing.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'block';
        }
        for (let i = 0; i < digital.length; i++) {
            digital[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < IM.length; i++) {
            IM[i].style.display = 'none';
        }
    });
}

if (btn_digital) {
    btn_digital.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < digital.length; i++) {
            digital[i].style.display = 'block';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < IM.length; i++) {
            IM[i].style.display = 'none';
        }
    });
}

if (btn_video) {
    btn_video.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < digital.length; i++) {
            digital[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'block';
        }
        for (let i = 0; i < IM.length; i++) {
            IM[i].style.display = 'none';
        }
    });
}

if (btn_IM) {
    btn_IM.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < digital.length; i++) {
            digital[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < IM.length; i++) {
            IM[i].style.display = 'block';
        }
    });
}

if (btn_all) {
    btn_all.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'block';
        }
        for (let i = 0; i < digital.length; i++) {
            digital[i].style.display = 'block';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'block';
        }
        for (let i = 0; i < IM.length; i++) {
            IM[i].style.display = 'block';
        }
    });
}