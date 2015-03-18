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
      .addIndicators({zindex: 1, suffix: "1"});

    new ScrollScene({triggerElement: "#parallax2"})
      .setTween(TweenMax.from("#parallax2 > div", 1, {top: "-80%", ease: Linear.easeNone}))
      .addTo(controller)
      .addIndicators({zindex: 1, suffix: "2"});

    new ScrollScene({triggerElement: "#parallax3"})
      .setTween(TweenMax.from("#parallax3 > div", 1, {top: "-80%", ease: Linear.easeNone}))
      .addTo(controller)
      .addIndicators({zindex: 1, suffix: "3"});

});
