var img1Dali = document.getElementById("1-imgDali");
var img2Dali = document.getElementById("2-imgDali");
var img3Dali = document.getElementById("3-imgDali");
var img4Dali = document.getElementById("4-imgDali");
var img5Dali = document.getElementById("5-imgDali");

var LGimg = document.getElementById("L-IMG");

var imgQ1 = document.getElementById("Q-IMG1");
var imgQ2 = document.getElementById("Q-IMG2");
var imgQ3 = document.getElementById("Q-IMG3");
var imgQ4 = document.getElementById("Q-IMG4");
var imgQ5 = document.getElementById("Q-IMG5");


img1Dali.addEventListener("click", myFunction1)
img2Dali.addEventListener("click", myFunction2)
img3Dali.addEventListener("click", myFunction3)
img4Dali.addEventListener("click", myFunction4)
img5Dali.addEventListener("click", myFunction5)

function myFunction1(){
    LGimg.style.display = "none";
    imgQ2.style.display = "none";
    imgQ3.style.display = "none";
    imgQ4.style.display = "none";
    imgQ5.style.display = "none";
    imgQ1.style.display = "block";
}

function myFunction2() {
    LGimg.style.display = "none";
    imgQ1.style.display = "none";
    imgQ3.style.display = "none";
    imgQ4.style.display = "none";
    imgQ5.style.display = "none";
    imgQ2.style.display = "block";
}

function myFunction3() {
    LGimg.style.display = "none";
    imgQ1.style.display = "none";
    imgQ2.style.display = "none";
    imgQ4.style.display = "none";
    imgQ5.style.display = "none";
    imgQ3.style.display = "block";
}

function myFunction4() {
    LGimg.style.display = "none";
    imgQ1.style.display = "none";
    imgQ2.style.display = "none";
    imgQ3.style.display = "none";
    imgQ5.style.display = "none";
    imgQ4.style.display = "block";
}

function myFunction5() {
    LGimg.style.display = "none";
    imgQ1.style.display = "none";
    imgQ2.style.display = "none";
    imgQ3.style.display = "none";
    imgQ4.style.display = "none";
    imgQ5.style.display = "block";
}
