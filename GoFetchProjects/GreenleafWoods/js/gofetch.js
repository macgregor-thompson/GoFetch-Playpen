var GoFetch = GoFetch || {};

GoFetch = function() {

    var ret = {};
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    ret.init = function() {
        setYear();
        addFancybox();
        listeners();

    };

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

    function clearForm() {
        $('#interest').val('general');
        $('#form-title').text('Contact Us for More Information');
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');
    }

    function clearFormMessages() {
        $(formMessages).removeClass('success error');
        $(formMessages).text('');
    }

    function dismissContactModal() {
        $('#contact-form').modal('hide');
    }

    function postForm() {
        var formData = $(form).serialize();
        console.log('Serialized:' , formData);

        $.post($(form).attr('action'), formData )
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                clearForm();
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent.');
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
            clearFormMessages()
        });

        //submit the contact form
        $(form).submit(function(e) {
            e.preventDefault();
            postForm();
        });

        //submit the form on the enter key
        $(document).on('keypress', '#submitForm', function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                postForm();
            }
        });
    }


    return ret;
}();


$(function() {
    GoFetch.init();
});
