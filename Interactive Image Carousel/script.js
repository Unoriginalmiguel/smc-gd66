var groupSelect = document.getElementById("groupSelect");
var catSelect = document.getElementById("catSelect")

groupSelect.addEventListener("change", function () {
    console.log(groupSelect.value);

    if (groupSelect.value == 'pies') {
        fillCategory(hotPies);
    }
    else if (groupSelect.value == 'pizza') {
        fillCategory(hotPizza);
    }
    else if (groupSelect.value == 'pasta') {
        fillCategory(hotPasta);
    }
})

var hotPies = ["Apple Pie", "Pumpkin Pie", "Blueberry Pie"];
var hotPizza = ["Margherita", "Spinach and Artichoke", "Hawaiian BBQ Chicken"];
var hotPasta = ["Bucatini Amatriciana", "Cheese Tortellini ", "Mostaccioli"];

var galImage1 = document.getElementById("galleryImg-1");
var galImage2 = document.getElementById("galleryImg-2");
var galImage3 = document.getElementById("galleryImg-3");

var clickOption = document.getElementById("clickOption");


var fillCategory = function (catArray) {
    catSelect.innerHTML = "";
    catArray.forEach(element => {
        var opt = document.createElement('option');
        opt.value = member;
        opt.textContent = member;
        catSelect.appendChild(opt);
    })
}

var pieImgs = ["images/pie-apple.jpg", "images/pie-blueberry.jpg", "images/pie-pumpkin.jpg"];
var pizzaImgs = ["images/pizza-hawaii.jpg", "images/pizza-margherita.jpg", "images/pizza-spinach.jpg"];
var pastaImgs = ["images/pasta-amatriciana.jpg", "images/pasta-mostaccioli.jpg", "images/pasta-tortelloni.jpg"];

var imageCounter = 1;
var currentImage = 0;

// function pieGallery() {
//     var nextImage = currentImage + 1;
//     if(nextImage == pieImgs.length) nextImage = 0;
//     galImage1.src = pieImgs[nextImage];
//     currentImage = nextImage;
// }

var pieGallery = function () {
                if (imageCounter == 1) {
                    galleryImg.src = "images/pie-apple.jpg";
                    imageCounter = 2;
                } else if (imageCounter == 2) {
                    galleryImg.src = "images/pie-blueberry.jpg";
                    imageCounter = 3;
                } else if (imageCounter == 3) {
                    galleryImg.src = "images/pie-pumpkin.jpg";
                    imageCounter = 1;
                }

function pizzaGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == pizzaImgs.length) nextImage = 0;
    galImage2.src = pizzaImgs[nextImage];
    currentImage = nextImage;
}

function pastaGallery() {
    var nextImage = currentImage + 1;
    if(nextImage == pastaImgs.length) nextImage = 0;
    galImage3.src = pastaImgs[nextImage];
    currentImage = nextImage;
}


window.setInterval(pieGallery, 3000);
window.setInterval(pizzaGallery, 3000);
window.setInterval(pastaGallery, 3000);