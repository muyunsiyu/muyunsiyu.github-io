$(document).ready(function(){
    
	resizeWin();
	function resizeWin(){
		ww = $(window).width();
		h = $(window).height();

		if(ww < 1280) {
			hh = ww*0.9;
			$('.s-home').css('height', hh+'px');
		} else {
			$('.s-home').css('height', '1000px');
		}
		if(ww <= 768) {
			$('.c-main').addClass('cmobile');
		} else {
			$('.c-main').removeClass('cmobile');
		}
		$('.s-home').css('height', h+'px');
		$('#s-about1').css('height', $('#about').height()+'px');
	}
	$(window).resize(function(){
		resizeWin();
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	   var target = $(this.hash); 
	   if(this.hash == '#product-carousel') return true;
	   if(this.hash == '#product-carousel-mobile') return true;
	   target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
	   if (target.length) {
	    tt = target.offset().top; 
	    if(target[0].id == "home") tt = 0;
	    if($(window).width() < 768) {
	     $('.navbar-collapse.in').removeClass('in');
	    }
	    $('html, body').animate({
	       scrollTop: tt
	    }, 1000);
	    return false;
	   }
	  }
	 });
});