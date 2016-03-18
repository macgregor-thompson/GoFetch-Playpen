/** Created by MacGregorThompson on 5/7/15.*/



/*$(function () {
    $('.team-player').hide().delay(5000).fadeIn(3000);
});*/

/*
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() < 430) {
            $('.team-player').hide();
        }
        if ($(window).scrollTop() > 431) {

            $('.team-player').removeClass('not-shown').show(3000);
        }
    });
});
*/


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() < 430) {
            $('.team-player').hide();
        }
        if ($(window).scrollTop() > 431) {

            $('.team-player').removeClass('not-shown').show(3000);
        }
    });
});

/*

$(document).ready(function() {

    $('.foo').delay(3000).fadeIn(2000);
});
*/



/*$(document).ready(function () {
    var images = ['../img/fripp1.JPG', '../img/fripp2.JPG', 'fripp3.JPG'];

    var url = images[Math.floor(Math.random() * images.length)];
    var img = new Image();
    img.onload = function () {
        $('.blah').css({'background-image': 'url(' + url + ')', 'background-size': 'cover'});
    };
    img.src = url;


});*/




$(document).ready(function() {
    $('.blah').css({background: "url('../img/fripp1.JPG')"});

});


