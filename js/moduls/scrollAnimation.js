const scrollAnimation = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	if (ScrollTrigger.isTouch !== 1) {	
		gsap.fromTo('.hero__image', { opacity: 0, x: 300}, {opacity: 1, x: 0});
		gsap.fromTo('.hero__bottom', { opacity: 0, y: 100},  {
			opacity: 1, 
			y: 0,
			scrollTrigger: {
				trigger: '.hero__content',
				start: '-200',
				end: '-50',
				scrub: true
			}
		});
	}
}

export default scrollAnimation;