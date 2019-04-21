$(document).ready(function () {
    let margin=70;
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-margin
        }, 777);
        e.preventDefault();
        return false;
    });
});
