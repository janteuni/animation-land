var IMGURL = "images/back-mountain.svg";
var IMGW = 500;
var container = document.querySelector(".container");
var imgs = [];

function preLoadImg(callback) {
    var img = new Image();
    img.onload = callback;
    img.src = IMGURL;
}

preLoadImg(function() {
    for (var i = 0; i < window.innerWidth; i += (IMGW)) {
        addImg();
    }
    addImg();
    animate();
});

function animate () {
    imgs.forEach(function (img, i) {
        var t = new TimelineMax({ repeat: -1 });
        t
            .to(img, 3, { x: '-=' + (IMGW), ease: Linear.easeNone });
    });
}

function addImg() {
    var img = document.createElement("img");
    img.src = IMGURL;
    TweenMax.set(img, {x:(IMGW) * imgs.length});
    imgs.push(img);
    container.appendChild(img);
};