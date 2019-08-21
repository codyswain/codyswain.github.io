window.onload = function() {
  // Smooth page scrolling for navbar 
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
	scrollTop: target.offset().top-30
      }, 1000);
    }
  });
  
  // Main display show up on hover
  $('.main-displaybox-project-box').hover(
    // Hover in function
    function(){
      $('.displaybox2').css({'display': 'flex', 'opacity': .85});
    },
    //Hover out function
    function (){
      $('.displaybox2').css({'display': 'none', 'opacity': 0});
    }
  );
}
