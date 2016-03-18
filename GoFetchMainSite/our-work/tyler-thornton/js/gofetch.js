/**
 * Created by mthompson on 4/7/2015.
 */

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
        if ($(window).scrollTop() > 110) {
            $('#nav_bar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 111) {
            $('#nav_bar').removeClass('navbar-fixed-top');
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
 })





/*   Contact Modal Form END
 =======================================================================*/


//script for form validation on our-work.html

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
        window.open('http://www.gofetchweb.com/our-work/tyler-thornton/index.html');
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






function validate(elementID, password){
    switch(elementID){
        case 'marjory': //do stuff
            if(password === 'fripp'){
                validatePassML();
                //do thing
            }
            break;
        case 'marjory-2': //do stuff
            if(password === 'fripp'){
                validatePassML2();
            }
            break;
        case 'red-velvet':
            if(password === 'fripp'){
                validatePassRed();
            }
            break;
        case 'tyler':
            if(password === 'eagles') {
                validatePassTyler();
            }
            break;
        default: return 'Wrong Password!!';
            break;

    }
}


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


/* Validation END
===================================================*/

/* Carousel
 ===================================================*/

$('.carousel').carousel({
    interval: 2000
})

/* Carousel END
 ===================================================*/

/* Skrollr
 ===================================================*/


window.onload = function() {
    var s = skrollr.init();
};

/* Skrollr END
 ===================================================*/











