$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.open-menu').fadeOut(0);
        $('.mobile-menu, .close-menu').fadeIn(0);
    });
    $('.close-menu').click(function(){
        $('.mobile-menu, .close-menu').fadeOut(0);
        $('.open-menu').fadeIn(0);
    });
});