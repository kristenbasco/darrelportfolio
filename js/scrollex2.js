// When the DOM is ready
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();
  
  // Create Animation for 0.5s
  var tween = TweenMax.fromTo('#animation', 0.5, 
  {
    backgroundColor: 'rgb(255, 255, 255)',
    scale: 3,
    rotation: 0
  },
  {
    backgroundColor: 'rgb(0, 0, 0)',
    scale: 1,
    rotation: 360

  }
  );
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 0, /* offset the trigger 150px below #scene's top */
    duration: 300
  })
  .setTween(tween)
  .triggerHook(.1)
  // .loglevel(3)
  .setPin("#animation", {pushFollowers: false})
  // reverse is set to true automatically
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
    
   scene.on("end", function () {
    $("#myonce").animate({
      opacity: 1,
      'stroke-dashoffset': 0
    }, 5000);
   });

});