

$(function() {
    $( "#header .btn_drawer, #nav .close" ).on( "click", function(e) {
        e.preventDefault();
        $('#nav').toggleClass('_open');
    });

    $( "#footer .btn_top" ).on( "click", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});