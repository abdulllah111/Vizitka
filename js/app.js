window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

$(function(){

	$('#button1').click(function(){

		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);

		return false;

	});

});


const arrow = document.querySelector('.arrow-8');

window.addEventListener('resize', () => {
  arrow.style.transform = 'scale(1)'; 
});