var GoFetch = GoFetch || {}

GoFetch = function() {

    var ret = {};

    ret.init = function() {
      setYear();
    };
    
    function setYear() {
      var d = new Date();
        $('#year').html(d.getFullYear());
    }


    return ret;
}();

$(function() {
    GoFetch.init();
});