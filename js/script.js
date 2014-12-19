$(function() {
	$('.select1').fancySelect();
	$('.select2').fancySelect();
	$('.select3').fancySelect();
	$('.select4').fancySelect();
})

$(window).scroll(function(){

    if ($(window).scrollTop() > $("header").height()){
    	$('.slides').addClass('debounce');
        $(".navigation").addClass("sticky");
        
    } else {
        $(".navigation").removeClass("sticky");
        $('.slides').removeClass('debounce');
    }

});