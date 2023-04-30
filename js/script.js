
$(document).ready(function() {
	var introLogo = $('#introLogo');
	var introDescription = $('#introDescription')

	// Scroll to top on reload:
	$("html,body").animate({scrollTop: 0});

	// Fade in body content
	TweenLite.from($("body"), 1.5, {autoAlpha: 0});
	// Slide in logo
	TweenLite.from(introLogo, 1.5, {x: 2000, delay: 1}); /* change y/x for animation*/
	// Fade in logo
	TweenLite.from(introLogo, 1, {autoAlpha: 0, delay: 1});
	// Fade in description
	TweenLite.from(introDescription, 2, {autoAlpha: 0, delay: 2.6});

});

$(window).scroll(function(){
parallax(".image1", .03, 30);
parallax(".image2", .02, 20);
parallax(".image3", .01, 10);
parallax(".image4", .004, 0);


});

function parallax(string, speed, top) {

var wscroll = $(window).scrollTop();
var wscroll = $(document).height() - $(window).height() - $(window).scrollTop();
console.log(wscroll);

 $(string).css("bottom", top+(wscroll*-speed)+"em"); 


};