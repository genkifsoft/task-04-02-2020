$(document).ready(function() {
    $(".c-menu").find("._close").hide();
    $(".c-menu").click(function() {
        $(".c-gnav").slideToggle('slow');
        if($(this).find('._open').css('display') == 'none'){
            $(this).find('._close').hide();
            $(this).find('._open').show();
        } else {
            $(this).find('._open').hide();
            $(this).find('._close').show();
        }
    });
});