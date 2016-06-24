(function ($) {
  $(function () {
    $("#menu").load("menu.html", function(){
      $('.button-collapse').sideNav();
    });
    $('.parallax').parallax();
    $("#footerContent").load("footer.html");

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function () { // wait for document ready
  /*
  SETA ALTURA DO DIV PARA O TAMANHO DA TELA DISPONIVEL
  console.log(window.innerHeight, window.innerWidth);

  $(".panel").each(function () {
    $(this).height(window.innerHeight);
  });*/

  // init
  
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel2");

  // create scene for every slide
  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
});