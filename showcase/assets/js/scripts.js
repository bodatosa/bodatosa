 //------- MAGNIFICENT POPUP ---//

      $(document).ready(function() {

        "use strict";

          $('.image-modal').magnificPopup({

          type:'inline',
          fixedContentPos: false,
          removalDelay: 100,
          closeBtnInside: true,
          preloader: false,
          mainClass: 'mfp-fade'

          });

          $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
          });


        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom',
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 150
          }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });

      });



//------- SITE LOADER ---//

jQuery(window).load(function() { 
    jQuery("#loaderInner").fadeOut(); 
    jQuery("#loader").delay(400).fadeOut("slow"); 


});

//------- ACTIVE LINKS SCROLLSPY ---//

$('body').scrollspy({ offset: 220, target: '.navigation' });



// HEADER SCROLL EFFECT

jQuery(document).ready(function($){ 
    $( window ).scroll(function() {
      var heights = window.innerHeight;
      document.getElementById("sectionIntro").style.height = heights * 0.8 + "px";


    });

});


jQuery(document).ready(function($){
var introSection = $('#sHomeBg'),
    introSectionHeight = introSection.height(),

    opacitySpeed = 1.2; 

triggerAnimation();
$(window).on('resize', function(){
    triggerAnimation();
});

function triggerAnimation(){
        $(window).on('scroll', function(){
            window.requestAnimationFrame(animateIntro);
        });
}

function animateIntro () {
    var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5);
    if( $(window).scrollTop() < introSectionHeight) {
        introSection.css({
            'opacity': 1 - scrollPercentage*opacitySpeed
        });
    }
}

});