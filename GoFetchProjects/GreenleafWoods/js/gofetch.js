var GoFetch = GoFetch || {};

GoFetch = function() {

    var ret = {};
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    ret.init = function() {
        setYear();
        addFancybox();
        listeners();
        valueboxHeight()
    };

    function valueboxHeight() {
        var boxes = $('.valuebox');
        boxes.height(Math.max(boxes.height()));
    }

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

    //clear form and the form messages div below form
    function clearForm() {
        console.log('Clearing Form...');
        $('#interest').val('general');
        $('#form-title').text('Contact Us for More Information');
        document.getElementById('ajax-contact').reset();
        formMessages.removeClass('success error').text('');
        console.log('form has been cleared');
    }

    function postForm() {
        var formData = $(form).serialize();

        $.post(form.attr('action'), formData )
            .done(function(response) {
                formMessages.removeClass('error');
                formMessages.addClass('success');
                formMessages.text(response);
            })
            .fail(function(data) {
                formMessages.removeClass('success');
                formMessages.addClass('error');
                if (data.responseText !== '') {
                    formMessages.text(data.responseText);
                } else {
                    formMessages.text('Oops! An error occurred and your message could not be sent.');
                }
            });
    }


    function listeners() {

        //grab and then set the interest and form title
        $('.request-btn').on('click', function() {
            var interest = $(this).data('id');
            $('#interest').val(interest);
            $('#form-title').text('Contact Us for More Information about ' + interest);
        });

        //clear the form title and interest when the modal is dismissed
        $('#contact-form').on('hide.bs.modal', function() {
            clearForm();
        });

        //submit the contact form
        $(form).submit(function(e) {
            e.preventDefault();
            postForm();
        });
        
    }

    return ret;
}();


$(function() {
    GoFetch.init();
});
