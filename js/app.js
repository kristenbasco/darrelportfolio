$(document).ready(function($) {
    console.log("Page is reaady!");
    // make a variable to store the window height.
    var windowHeight = $(window).innerHeight();
    // function to be used to retrieve variable
    function getWindowHeight() {
      return windowHeight;
    }
    // update window height on resize
    $(window).on("resize", function () {
      windowHeight = $(window).innerHeight();
    });           
    // init controller
    var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

    // scenes
    new ScrollScene({triggerElement: "#parallax1"})
      .setTween(TweenMax.from("#parallax1 > div", 1, {top: "-80%", ease: Linear.easeNone}))
      .addTo(controller)
    

    new ScrollScene({triggerElement: "#parallax2"})
      .setTween(TweenMax.from("#parallax2 > div", 1, {top: "-80%", ease: Linear.easeNone}))
      .addTo(controller)
   

    new ScrollScene({triggerElement: "#parallax3"})
      .setTween(TweenMax.from("#parallax3 > div", 1, {top: "-80%", ease: Linear.easeNone}))
      .addTo(controller);
     

    $(window).load(function() {
          var options =
          {
               srcNode: 'img',             // grid items (class, node)
               margin: '20px',             // margin in pixel, default: 0px
               width: '250px',             // grid item width in pixel, default: 220px
               max_width: '',              // dynamic gird item width if specified, (pixel)
               resizable: true,            // re-layout if window resize
               transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
          }
          $('.grid').gridify(options);
     });

 

      

});

 $(document).ready(function() {
    $('#fadeUp').addClass('animated fadeInUp'); 
    $('#fadeIn').addClass('animated fadeIn'); 
    $('#bounce').addClass('animated bounce'); 
     
    $('.adobe').css('width', '90%');
    $('.html').css('width', '95%');
    $('.css').css('width', '95%');

});

