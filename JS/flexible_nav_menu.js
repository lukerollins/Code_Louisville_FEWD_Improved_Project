$(function () {
    var pull        = $('#pull');
    menu            = $('nav ul')
    menuHeight      = menu.height();
//This makes it so that when you click on the 'Menu' part, the menu will slide up
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    //This makes it so the menu just hides when the screen width gets to 320 pixels and you have to do the above
    $(window).resize(function() {
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});