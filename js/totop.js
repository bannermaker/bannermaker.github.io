jQuery(document).ready(function() {
jQuery('body').append('<div class="button-up" style="display: none;opacity: 0.7;width: 40px;height:100%;position: fixed;left: 0;top: 0;cursor: pointer;text-align: center;line-height: 40px;color: #333;font-weight: normal;">&#9650;</div>');
jQuery (window).scroll (function () {
if (jQuery (this).scrollTop () > 100) {
jQuery ('.button-up').fadeIn();
} else {
jQuery ('.button-up').fadeOut();
}
});
jQuery('.button-up').click(function(){
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
jQuery('.button-up').hover(function() {
jQuery(this).animate({
'opacity':'0.5',
}).css({'background-color':'#607d8b','color':'#333'});
}, function(){
jQuery(this).animate({
'opacity':'0.7'
}).css({'background':'none','color':'#333'});;
});
});