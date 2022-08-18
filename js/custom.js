(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// TEST new things

// portfolio
//$('.gallery ul li a').click(function () {
//    var itemID = $(this).attr('href');
//    $('.gallery ul').addClass('item_open');
//    $(itemID).addClass('item_open');
//    return false;
//});
//$('.close').click(function () {
//    $('.port, .gallery ul').removeClass('item_open');
//    return false;
//});

//$(".gallery ul li a").click(function () {
//    $('html, body').animate({
//        scrollTop: parseInt($("#top").offset().top)
//    }, 400);
//});
