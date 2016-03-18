

/* Copyright year
=============================================================*/
var setYear = function() {
    var today = new Date();
    var year = today.getFullYear();

    var el = document.getElementById('copy-year');
    el.innerHTML = year;

};

setYear();

/* Copyright year END
 =============================================================*/

/* Navbar Scroll Lock Navigation
 ===============================================================*/

$(document).ready(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() < 430) {
            $('#quote-btn').addClass('hidden');
        }
        if ($(window).scrollTop() > 431) {
            $('#quote-btn').removeClass('hidden');
        }
    });
});





/* Navbar Scroll Lock Navigation END
===============================================================
 */



/*   Contact Modal Form
=======================================================================*/

 $('#myModal').on('shown.bs.modal', function () {
 $('#myInput').focus()
 });





/*   Contact Modal Form END
 =======================================================================*/



/* Validation  -xs -sm
 ===================================================*/


function validatePassMLXs(){
    if(document.getElementById('marjory-xs').value.toLocaleLowerCase() == 'fripp'){

        cleanXs();
        window.open('http://www.gofetchweb.com/our-work/marjory-lee/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        cleanXs();

        return false;
    }
}

function validatePassML2Xs(){
    if(document.getElementById('marjory-2-xs').value.toLocaleLowerCase() == 'fripp'){

        cleanXs();
        window.open('http://www.gofetchweb.com/our-work/marjory-lee-2/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        cleanXs();

        return false;
    }
}

function validatePassRedXs(){
    if(document.getElementById('red-velvet-xs').value.toLocaleLowerCase() == 'fripp'){

        cleanXs();
        window.open('http://www.gofetchweb.com/our-work/red-velvet/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        cleanXs();

        return false;
    }
}

function validatePassTylerXs(){
    if(document.getElementById('tyler-xs').value.toLocaleLowerCase() == 'eagles' ){

        cleanXs();
        window.open('http://www.gofetchweb.com/our-work/tyler-light-pro-fit/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        cleanXs();

        return false;
    }
}


$('#marjory-xs').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassMLXs();
    }
});

$('#marjory-2-xs').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassML2Xs();
    }
});

$('#red-velvet-xs').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassRedXs();
    }
});

$('#tyler-xs').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassTylerXs();
    }
});







function cleanXs() {
    var el = document.getElementById('marjory-xs');
    el.value = "";
    var el1 = document.getElementById('marjory-2-xs');
    el1.value = "";
    var el2 = document.getElementById('red-velvet-xs');
    el2.value = "";
    var el3 = document.getElementById('tyler-xs');
    el3.value = "";

}

cleanXs();


/* Validation  -xs -sm END
 ===================================================*/








/* Validation  -md -lg
 ===================================================*/

function validatePassML(){
    if(document.getElementById('marjory').value.toLocaleLowerCase() == 'fripp'){

        clean();
        window.open('http://www.gofetchweb.com/our-work/marjory-lee/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        clean();

        return false;
    }
}

function validatePassML2(){
    if(document.getElementById('marjory-2').value.toLocaleLowerCase() == 'fripp'){

        clean();
        window.open('http://www.gofetchweb.com/our-work/marjory-lee-2/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        clean();

        return false;
    }
}

function validatePassRed(){
    if(document.getElementById('red-velvet').value.toLocaleLowerCase() == 'fripp'){

        clean();
        window.open('http://www.gofetchweb.com/our-work/red-velvet/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        clean();

        return false;
    }
}

function validatePassTyler(){
    if(document.getElementById('tyler').value.toLocaleLowerCase() == 'eagles' ){

        clean();
        window.open('http://www.gofetchweb.com/our-work/tyler-light-pro-fit/index.html');
        return true;
    }else{
        alert('Wrong Password!!');

        clean();

        return false;
    }
}


$('#marjory').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassML();
    }
});

$('#marjory-2').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassML2();
    }
});

$('#red-velvet').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassRed();
    }
});

$('#tyler').keydown(function(e) {
    if(e.keyCode == 13) {
        validatePassTyler();
    }
});




function clean() {
    var el = document.getElementById('marjory');
    el.value = "";
    var el1 = document.getElementById('marjory-2');
    el1.value = "";
    var el2 = document.getElementById('red-velvet');
    el2.value = "";
    var el3 = document.getElementById('tyler');
    el3.value = "";

}

clean();


/* Validation  -md -lg END
===================================================*/




/* Skrollr
==================================================== */


/*

This breaks the Portfolio page!

.onload = function() {
    var s = skrollr.init();
};*/

/* Skrollr END
 ==================================================== */

$('.carousel').carousel({
    interval: 3000
})



/* Twitter Widgets
================================================*/

window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));


/* Twitter Widgets END
 ================================================*/