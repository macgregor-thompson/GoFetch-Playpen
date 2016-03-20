var GoFetch = GoFetch || {};

GoFetch = function() {

    var ret = {};
    var form = $('#Contact_Form').parsley();

    ret.init = function() {
        setYear();
        addFancybox();

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
        $('.fancybox-media').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            helpers : {
                media :{}
            }
        });
    }

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