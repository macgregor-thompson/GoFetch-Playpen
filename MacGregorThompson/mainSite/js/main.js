
$(function() {

    setBackground();
    activate();

    function activate() {
        setInterval(function() {
           rotateBackground();
        }, 8000);
    }

    function rotateBackground() {
        var imgNum = Math.floor(Math.random() * 27) + 1;
        var image = 'img/' + imgNum + '.png';
        setTimeout(function() {
            $('body').css({
                'background': '#222 url(' + image + ') no-repeat center center fixed',
                '-webkit-background-size': 'contain',
                '-moz-background-size': 'contain',
                '-o-background-size': 'contain',
                'background-size': 'contain'
            });
        }, 3000);
    }
    function setBackground() {
        var imgNum = Math.floor(Math.random() * 27) + 1;
        var image = 'img/' + imgNum + '.png';
            $('body').css({
                'background': '#222 url(' + image + ') no-repeat center center fixed',
                '-webkit-background-size': 'contain',
                '-moz-background-size': 'contain',
                '-o-background-size': 'contain',
                'background-size': 'contain'
            });
        }

});