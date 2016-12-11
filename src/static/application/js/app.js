function YrStr() {

}

var yrStr = new YrStr();

$(document).ready(function () {
    yrStr.initRightFlyer();
});

YrStr.prototype.initRightFlyer = function () {
    var $rgtFlyr = $('#rgtFlyr');

    setTimeout(function () {
       $rgtFlyr.slideToggle('slow');
    }, 500);

    $('.rgtFlyrCls', $rgtFlyr).on('click', function () {
        $rgtFlyr.slideToggle('slow');
    });
};