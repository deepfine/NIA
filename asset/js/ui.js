$(function() {
    $( "#header .btn_drawer, #nav .close" ).on( "click", function(e) {
        e.preventDefault();
        $('#nav').toggleClass('_open');
    });

    $( "#footer .btn_top" ).on( "click", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        $('#header h1 a').focus();
    });

    // iframe 영상에 title 넣기
    const video_title = $('.area_tit .tit_detail').text() + ' 유튜브 영상';
    $('.area_content iframe').prop('title', video_title);
});