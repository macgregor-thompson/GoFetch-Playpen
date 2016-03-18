/**
 * Created by MacGregorThompson on 4/20/15.
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