const scrollAnimation = () => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TimelineMax);

	if (window.innerWidth <= 1400) {
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

			gsap.fromTo('.view__text-block', { opacity: 0, x: -200},  {
				opacity: 1, 
				x: 0,
				scrollTrigger: {
					trigger: '.view__body',
					start: '-300',
					end: '-50',
					scrub: true
				}
			});
			gsap.fromTo('.view__video', { opacity: 0, x: 200},  {
				opacity: 1, 
				x: 0,
				scrollTrigger: {
					trigger: '.view__body',
					start: '-300',
					end: '-50',
					scrub: true
				}
			});

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
}

export default scrollAnimation;