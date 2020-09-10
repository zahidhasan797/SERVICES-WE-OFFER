// action on scrool init
  AOS.init();
  

// to show black background when menu activates
  $(".navbar-toggler-icon").on("click", function() {
    $(".invisible-nav").toggleClass("bg-dark");
  })

  