/*global $*/
$(function () {
  
    "use strict";
    $('.fixed-sidebar ul li').click(function () {
      $('html,body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
      }, 900,function(){
          $('.fixed-sidebar').css('left' , '-260px');
      });
  });

     // For [ sidebar nav ]
     $('.fixed-icon').click(function (){
      $('.fixed-sidebar').css('left' , '0px');
    });
    $('.fixed-sidebar .fa-times').click(function (){
      $('.fixed-sidebar').css('left' , '-260px');
    });

    $(document).mouseup(function (e) { 
      if ($(e.target).closest(".fixed-sidebar").length === 0) { 
          $(".fixed-sidebar").css('left' , '-260px');
      } 
  }); 

   $(window).scroll(function(){
    if($(window).scrollTop() >= 100) {
       // rocket
      $('.rocket').css('left' , '20px');
    }
    else {
      $('.rocket').css('left' , '-60px');
    }
   });
   $('.rocket').click(function(){
    $('body,html').animate({
      scrollTop : 0
    },1000);
   });
 
    // team
    $('.tabs li').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      $('.' + $(this).data('tab')).fadeIn();
      $('.bind').not('.' + $(this).data('tab')).hide();
    });

  $('.team .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
  
     // isotope
     $('.gallery-item').isotope({
      itemSelector : '.item' ,
      layoutMode : 'fitRows'
    });
    $(".works .tabs ul li").click(function (){
      $(this).addClass('active').siblings().removeClass('active');
  
      var selector = $(this).attr('data-filter');
      $('.gallery-item').isotope({
        filter : selector
      });
      return false;
    });

   
 
});



