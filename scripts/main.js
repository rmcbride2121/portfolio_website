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

// Sidenav Push Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

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
