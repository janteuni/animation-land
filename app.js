
var container = document.querySelector(".container");

var allImgs = [
    {url: "images/road.svg", class:"s-300", size: 300, speed: 1, y: 250,  imgs: []},
    {url: "images/back-mountain.svg", class:"s-900", size: 900, speed: 20, y: 0, imgs: []},
    {url: "images/landscape.svg", class:"s-900", size: 900, speed: 10, y: 10, imgs: []}

];

function preLoadImg(callback) {
    allImgs.forEach(function(data) {
        var img = new Image();
        img.onload = function () { callback(data); };
        img.src = data.url;
    });
}

preLoadImg(function(image) {
    for (var i = 0; i < window.innerWidth; i += image.size) {
        addImg(image);
    }
    addImg(image);
    animate(image);
});

function animate (data) {
    data.imgs.forEach(function (img) {
        var t = new TimelineMax({ repeat: -1 });
        t.to(img.element, data.speed, { x: '-=' + (img.size), ease: Linear.easeNone });
    });
}

function addImg(data) {
    var element = document.createElement("img");
    element.src = data.url;
    element.className = data.class;
    TweenMax.set(element, {x:(data.size - 2) * data.imgs.length, y: data.y});
    data.imgs.push({element: element, size: data.size});
    container.appendChild(element);
}

(function(){
    var car = document.querySelector(".camion");
    var t = new TimelineMax({ repeat: -1 });
    t
        .to(car,.5, { y: -3, ease: Elastic.easeOut.config(1, 0.3)})
        .to(car,.5, { y: 0, ease: Elastic.easeIn.config(1, 0.3)});
})();