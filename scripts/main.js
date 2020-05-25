// changes the background color of the navigation bar when scrolling past the banner image title
$(document).ready(function(){
  $(window).scroll(function(){
  	let scroll = $(window).scrollTop();
	  if (scroll > 210) {
	    $(".navbar").css("background" , "#2374AB");
	  } else if (scroll < 210) {
      $(".navbar").css("background" , "none");
    }
  })
})

// Sidenav Push Menu
// Open Sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
// Close Sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// Close the Sidenav if the user clicks outside of it
const $mySidenav = $('#mySidenav');
$(document).mouseup(e => {
  if (!$mySidenav.is(e.target) // if the target of the click isn't the container...
  && $mySidenav.has(e.target).length === 0) // ... nor a descendant of the container
  {
    closeNav();
 }
});

// JQuery fade in hero text
function main(){
  $('.hero-text').hide()
  $('.hero-text').fadeIn(2000)
};

// These create the animation when clicking navigation items

// "See More" click event
$(".btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#my-work").offset().top
  }, 1000);
});

$(".web-dev").click(function(){
  $('html, body').animate({
      scrollTop: $("#web-dev").offset().top
  }, 1000);
});

$(".web-design").click(function(){
  $('html, body').animate({
      scrollTop: $("#web-design").offset().top
  }, 1000);
});
$(".photoshop-illustrator").click(function(){
  $('html, body').animate({
      scrollTop: $("#photoshop-illustrator").offset().top
  }, 1000);
});

$(".contact-btn").click(function(){
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 1000);
});


$(document).ready(main);
