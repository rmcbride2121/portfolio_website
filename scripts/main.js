// changes the background color of the navigation bar when scrolling past the banner image title
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 210) {
	    $(".navbar").css("background" , "#2374AB");
	  } else if (scroll < 210) {
      $(".navbar").css("background" , "none");
    }

	  // else{
		//   $(".navbar").css("background" , "#333");  	
	  // }
  })
})

// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// JQuery fade in
function main(){
  $('.hero-text').hide()
  $('.hero-text').fadeIn(2000)
};

// "See More" click event
$(".btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#my-work").offset().top
  }, 1000);
});

// Menu button click events
$(".about-btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 1000);
});

$(".work-btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#my-work").offset().top
  }, 1000);
});

$(".skills-btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#skills").offset().top
  }, 1000);
});

$(".contact-btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 1000);
});


$(document).ready(main);
