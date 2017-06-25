

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;( function ( document, window, index )
{
	'use strict';

	var elSelector	= '.navbar-sticky',
		element		= document.querySelector( elSelector ),
		heroImage   = document.getElementById('home-hero'),
		navigation = document.getElementsByTagName('nav')[0];		

	if( !element ) return true;

	var elHeight		= 0,
		elTop			= 0,
		dHeight			= 0,
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0;

    
	window.addEventListener( 'scroll', function()
	{
		elHeight		= element.offsetHeight;
		dHeight			= document.body.offsetHeight;
		wHeight			= window.innerHeight;
		wScrollCurrent	= window.pageYOffset;
		wScrollDiff		= wScrollBefore - wScrollCurrent;
		elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

		if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
			element.style.top = '0px';

		else if( wScrollDiff > 0 ) // scrolled up; element slides in
			element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

		else if( wScrollDiff < 0 ) // scrolled down
		{
			element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
		}

		wScrollBefore = wScrollCurrent;
       
        if( heroImage != null){
            if ( wScrollCurrent > 90 ){
                if (!navigation.classList.contains('navbar-solid-bg')) {
                    navigation.classList.add('navbar-solid-bg');
                }
            }
            else 
                if (navigation.classList.contains('navbar-solid-bg')) {
                    navigation.classList.remove('navbar-solid-bg');
                }
        }	
        	    
		
	});

}( document, window, 0 ));


// JQUERY VERSION:

// ;( function( $, window, document, undefined )
// {
//   'use strict';
//
//   var elSelector    = '.header',
//     $element    = $( elSelector );
//
//   if( !$element.length ) return true;
//
//   var elHeight    = 0,
//     elTop      = 0,
//     $document    = $( document ),
//     dHeight      = 0,
//     $window      = $( window ),
//     wHeight      = 0,
//     wScrollCurrent  = 0,
//     wScrollBefore  = 0,
//     wScrollDiff    = 0;
//
//   $window.on( 'scroll', function()
//   {
//     elHeight    = $element.outerHeight();
//     dHeight      = $document.height();
//     wHeight      = $window.height();
//     wScrollCurrent  = $window.scrollTop();
//     wScrollDiff    = wScrollBefore - wScrollCurrent;
//     elTop      = parseInt( $element.css( 'top' ) ) + wScrollDiff;
//
//     if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
//       $element.css( 'top', 0 );
//
//     else if( wScrollDiff > 0 ) // scrolled up; element slides in
//       $element.css( 'top', elTop > 0 ? 0 : elTop );
//
//     else if( wScrollDiff < 0 ) // scrolled down
//     {
//       if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
//         $element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 );
//
//       else // scrolled down; element slides out
//         $element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
//     }
//
//     wScrollBefore = wScrollCurrent;
//   });
//
// })( jQuery, window, document );

$(function(){

    $("#typed").typed({
        strings: ["Create", "Mentor", "Inspire"],
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        contentType: 'text', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

    $("#scroll-trigger").click(function() {
        $('html, body').animate({
            scrollTop: $(".scroll-to").offset().top
        }, 500);
    });
    $('.carousel').carousel();



    
    
    $('form#preorder-form').submit(function(e) { 

         e.preventDefault();
         e.returnValue = false;
         console.log("TEST");     
         var form = $(this);
         var values = {};
         $.each(form.serializeArray(), function(i, field) {
            values[field.name] = field.value;
         });
        
         $.ajax({ 
                 type: 'post',
                 url: '../newuser.php', 
                 data: { 
                         email: values['Email'], 
                         firstname: values['First Name'], 
                         lastname: values['Last Name'], 
                         city: values['City/Country'],
                         message: values['Message']  
                 }, 
                 success: function() { // your success handler
                    console.log('USPJEH');
                 },
                 error: function() { // your error handler
                     console.log('ERROR');
                 },
                 complete: function() { 
                    // make sure that you are no longer handling the submit event; clear handler
                    form.off('submit');
                    // actually submit the form
                    form.submit();
                 }
          });
          
         
    });


});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }

