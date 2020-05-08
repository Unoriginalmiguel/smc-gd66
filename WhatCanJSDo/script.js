var header = document.getElementById("docHeader");
var hColorChangeBtn = document.getElementById("headerColorControl");

var bunnyImage = document.getElementById("bunnyImg")
var bunnyButton = document.getElementById("bunnyImgChange")

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 225;
    var blueComp = Math.random() * 225;

    header.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}

var swapBunnyImage = function(){
    console.log(bunnyImage.alt);

    if(bunnyImage.alt == "First image of a bute bunny"){
    bunnyImage.src = "bunny-2.jpg";
    bunnyImage.alt = "Second image of a bute bunny";
    bunnyButton.innerText = "Show the first one!";
    
    }
    else {
        bunnyImage.src = "bunny-1.jpg";
        bunnyImage.alt = "First image of a bute bunny";
        bunnyButton.innerText = "Show the second one!";
    
    }

}

headerColorChange();

hColorChangeBtn.addEventListener("click", headerColorChange);

bunnyButton.addEventListener("click", swapBunnyImage)



// bunnyImage.src = "bunny-2.jpg";
// bunnyButton.innerText = "Show the first one!";