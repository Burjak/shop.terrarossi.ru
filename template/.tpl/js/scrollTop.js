$(document).ready(function(){
    $('body').append ('<div id="scroller" class="b-top" style="display: none;"><span class="b-top-but"></span></div>');
    $(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
    $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
});