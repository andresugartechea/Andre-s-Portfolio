//IMAGES
let drawing01 = document.getElementById("drawing01");

// BUTTONS
let btn_drawing = document.getElementById("btn_drawing");
let btn_photo = document.getElementById("btn_photo");
let btn_video = document.getElementById("btn_video");
let btn_animation = document.getElementById("btn_animation");
let btn_all = document.getElementById("btn_all");

// CLASSES
let drawing = document.getElementsByClassName("drawing");
let photo = document.getElementsByClassName("photography");
let video = document.getElementsByClassName("video");
let animation = document.getElementsByClassName("animation");

document.querySelectorAll(".gallery .container").forEach(container =>{
    container.onclick = () => {
        document.querySelector(".popup-img").style.display = "block";
        document.querySelector(".gallery").style.display = "none";
        document.querySelector(".nav").style.display = "none";
        // a = container.querySelector("img");
        // console.log(a);
        document.querySelector(".popup-img img").src = container.querySelector("img").getAttribute("src");
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
        for (let i = 0; i < photo.length; i++) {
            photo[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < animation.length; i++) {
            animation[i].style.display = 'none';
        }
    });
}

if (btn_photo) {
    btn_photo.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < photo.length; i++) {
            photo[i].style.display = 'block';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < animation.length; i++) {
            animation[i].style.display = 'none';
        }
    });
}

if (btn_video) {
    btn_video.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < photo.length; i++) {
            photo[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'block';
        }
        for (let i = 0; i < animation.length; i++) {
            animation[i].style.display = 'none';
        }
    });
}

if (btn_animation) {
    btn_animation.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'none';
        }
        for (let i = 0; i < photo.length; i++) {
            photo[i].style.display = 'none';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'none';
        }
        for (let i = 0; i < animation.length; i++) {
            animation[i].style.display = 'block';
        }
    });
}

if (btn_all) {
    btn_all.addEventListener('click', () => {
        for (let i = 0; i < drawing.length; i++) {
            drawing[i].style.display = 'block';
        }
        for (let i = 0; i < photo.length; i++) {
            photo[i].style.display = 'block';
        }
        for (let i = 0; i < video.length; i++) {
            video[i].style.display = 'block';
        }
        for (let i = 0; i < animation.length; i++) {
            animation[i].style.display = 'block';
        }
    });
}