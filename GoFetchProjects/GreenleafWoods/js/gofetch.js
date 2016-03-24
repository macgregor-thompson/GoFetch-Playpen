var GoFetch = GoFetch || {};

GoFetch = function() {

    var ret = {};
    var form = $('#Contact_Form').parsley();

    ret.init = function() {
        setYear();
        addFancybox();
        
        //addToCarousel(complexGallery);

        $('.request-info').on('click', function() {
            var unit = $(this).data('id');
            $('#interest').val(unit);
            $('#form-title').text('Contact us to know more about ' + unit + '.');
        });

        $('#submitForm').on('click', function(){ formSubmit(); });

    };
    
    //////////////////////////////////////////////////
    
    function setYear() {
      var d = new Date();
        $('#year').html(d.getFullYear());
    }
    
    function addFancybox() {
        $('.fancybox').fancybox();
        $('.fancybox-slideshow').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            arrows: true,
            helpers : {
                media :{}
            }
        });
    }


    function addToCarousel(images) {
        for (var i = 0; i< images.length; i++) {
            var markup = [
                '<div class="item">',
                '<img src="assets/img/complex_general/',
                images[i],
                '.JPG" alt="',
                images[i],
                '"><div class="carousel-caption"></div>'
            ].join('');
            $('.carousel-inner').append(markup);
        }
    }

    var complexGallery = [

        'DSC_3124',
        'DSC_3126',
        'DSC_3197',
        'greenleaf_woods_marsh_view',
        'portsmouth_bld6',
        'portsmouth_commercial_space_bld_7',
        'portsmouth_office_bld_1',
        'seacoast_office_bld_6'
    ];




    function cleanContactForm(){
        $('#form-title').empty();
        $('#lead_source').val('');
    }

    function formSubmit(){
        form.validate();
        if(form.isValid()) {
            $('#Contact_Form').submit();
            cleanContactForm();
            ga('send', 'event', 'contact form', 'submit');
        }
    }

    return ret;
}();

$(function() {
    GoFetch.init();
});