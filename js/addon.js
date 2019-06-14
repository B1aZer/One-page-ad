(function ($, window, undefined) {

    'use strict';

    $('.scroll-order').click(function () {
        $("html, body").animate({ scrollTop: $("#pricing").offset().top }, 2000);
        return false;
    });


})(jQuery, this);
