$(document).ready(function () {

// everything goes here

$('.all-gow').hide();

$("#toggleKratos").click(function () {
    $('.gow-one').fadeToggle(500, );
});

$("#toggleAtreus").click(function () {
    // $('.gow-two').toggle();
    $('.gow-two').fadeToggle(500, );
});

$("#toggleStranger").click(function () {
    $('.gow-three').fadeToggle(500, );
});

$("#toggleQuote").click(function () {
    $('.gow-four').fadeToggle(500, );
});

// button story one end

$("#MoveK").click(function () {
    $('.gow-one').animate({
        left: "+=160%",
        top: "+=60%",
    });
});

$("#MoveA").click(function () {
    $('.gow-two').animate({
        left: "+=-70%",
        top: "+=-80%",
    });
});

$("#MoveSD").click(function () {
    $('.gow-three').animate({
        left: "+=10%",
        top: "+=40%",
    });
});

$("#MoveSQ").click(function () {
    $('.gow-four').animate({
        left: "+=-240%",
        top: '+=-40%',
        width: "80%",
    });
});

$("#GOW4").rotate({
    bind: {
        click: function () {
            $(this).rotate({
                angle: 0,
                animateTo: 180,
                easing: $.easing.easeInOutExpo
            })
        }
    }

});

$("#GOW4").rotate({
  bind:
  {
    click: function(){
      $(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })
    }
  }

});

//end of anim

}); //end of document