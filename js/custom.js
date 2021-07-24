$(function(){
    // banner-bg-slider goes to here
    $('.banner-bg-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        arrows:false,
        fade:true,
      });

    // desing-slider goes to here
    $('.desing-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        arrows:false,
        dots:true,
      });
    // tasi-slider goes to here
    $('.tasi-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:1000,
        arrows:false,
        // dots:true,
      });


      // scroll nav bar----
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 150){
          $('.navbar').addClass('nav-bg');
      }
      else {
          $('.navbar').removeClass('nav-bg');
      }
  });

   //  animation scroll js-------------------------

   var html_body = $('html, body');
   $('.navbar a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 65
               }, 100);
               return false;
           }
       }
   });
    // scroll up--------------------------------------------
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 250){
          $(".down-to-up").fadeIn();
      }
      else {
          $(".down-to-up").fadeOut();
      }
  });
     
     

    // Menu spy-slider goes to here
    var elm = document.querySelector('#navbarSupportedContent');
    var ms = new MenuSpy(elm);

    // slider bar spy-slider goes to here
    var elm = document.querySelector('.slide-nav');
    var ms = new MenuSpy(elm);


    // banner-bg-slider goes to here
    $('.sliderbarss').click(function(){
        $('.siderbar').toggleClass('slideropen')
        $('.close-item i').toggleClass('fa-bars')
    });
    //  preloader--------------------------------------

    $(window).on('load',function(){
        $('.preloader').delay(500).fadeOut(500);
    });



});

