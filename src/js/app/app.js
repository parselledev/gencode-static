

$( document ).ready(function() {

    $("a[href*='#']").on("click", (e) => { //Smooth scroll
        let target = $(e.target);
        let anchor = target;
        $("a[href*='#']").removeClass("active");
        
        $('html, body').stop().animate({
            scrollTop: ($(anchor.attr('href')).offset().top)
        }, 777);
        e.preventDefault();
        return false;
    });

});