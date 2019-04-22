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


// $("#form-row").vide('video.mp4', {
//     volume: 1, // звук
//     playbackRate: 1, // скорость воспроизведения
//     muted: true, // отключен ли звук
//     loop: true, // закцикливание
//     autoplay: true, // автовоспроизведение
//     position: "50% 50%" // выравнивание
// });