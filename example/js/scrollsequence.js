$(function() {	
	$(window).on("scroll", function(event){
		videoplay();
		event.stopPropagation();
	});
	
	// Add frames
	function pad (str, max) {
	  return str.length < max ? pad("0" + str, max) : str;
	}
		
	for (var i=0; i < 400; i++) {
		$("#videoslide").append('<div class="frame slide-'+i+'" style="background:url(images/mymovie'+pad(""+i+"",3)+'.jpg) no-repeat;"></div>');
	};
	
	// Distance from video to top
	var x = $("#videoslide").offset().top;
	// Height of Video
	var z = $("#videoslide").height();
	
	function videoplay() {
		// Distance scrolled from top
		y = $(window).scrollTop();
		actotal = Math.round(x+z);
		acdifference = Math.round(z-x);
		// Increment starting from 1 when section is visible
		current = Math.round((y - x) + 300);
		if (y <= actotal && y >= x - 300) {
			$(".frame").css("z-index", "10");
			$(".slide-"+current).css("z-index", "90");
		}
	}
});