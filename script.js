//плавный переход по кнопкам меню

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

// гамбургер меню

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu_xs')
                .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function() {
            // do something

            $(this).closest('.menu_xs')
                .removeClass('menu_state_open');
        });
    });
})(jQuery);


//
//
// $('#logo_AR').mousemove(function(e){
//     var amountMovedX = e.pageX * 1/100;
//     var amountMovedY = e.pageY * 1/100;
//     $(this).css('top', amountMovedX + 'px');
//     $(this).css('left', amountMovedY + 'px');
//
// });
//
//
//

// анимация лого AR

(function(){
    let body = document.body,
        image = document.getElementById('logo_AR'),
        startX = 15,
        startY = 20,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;

    body.addEventListener('mousemove', function(evt){
        var posX = Math.round(evt.clientX / w * startX);
        var posY = Math.round(evt.clientY / h * startY);
        image.style.top = posY + 'px';
        image.style.left = posX + 'px';

    })
})();

// анимация лого VR

(function(){
    let body = document.body,
        image = document.getElementById('logo_VR'),
        startX = 10,
        startY = 30,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;

    body.addEventListener('mousemove', function(evt){
        var posX = Math.round(evt.clientX / w * startX);
        var posY = Math.round(evt.clientY / h * startY);
        image.style.top = posY + 'px';
        image.style.left = posX + 'px';

    })
})();

// анимация лого MR

(function(){
    let body = document.body,
        image = document.getElementById('logo_MR'),
        startX = 20,
        startY = 40,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;

    body.addEventListener('mousemove', function(evt){
        var posX = Math.round(evt.clientX / w * startX);
        var posY = Math.round(evt.clientY / h * startY);
        image.style.top = posY + 'px';
        image.style.left = posX + 'px';

    })
})();