$("#popup-close").on("click", function() {
    $("#popup-div").css({"display": "none"});
});
$("#popup-div").css({"display": "none"});


$(".comprar").on("click", function() {
    $("#popup-div").css({"display": "block"});
});


$("#checkbox, checkbox-label").on("click", function() {
    var is_checked = $("#checkbox").prop("checked");
    if (is_checked) {
        $(".senha").attr("type", "text");
    } else {
        $(".senha").attr("type", "password");
    }
})



var images = ["./assets/modelo-fone.jpg", "./assets/modelo1-fone.jpg", "./assets/modelo2-fone.jpg"];
$(".foto-modelo").on("click", change_Picture);



function change_Picture () {
    var current_image = $(".foto-modelo").attr("src")
    var next_image = images.indexOf(current_image) + 1;
    if (next_image === images.length) {
        next_image = 0;
    }
    $(".foto-modelo").attr("src", images[next_image])
}

var intervalId = window.setInterval(function(){
    change_Picture();
  }, 4000);








var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){

        $('header').slideUp(200);
    } else {

        if(st + $(window).height() < $(document).height()) {
            $('header').slideDown(200);
        }
    }
    
    lastScrollTop = st;
}