const slider = () => {
	new Swiper('.swiper', {
		effect: 'cube',
		loop: true,
		cubeEffect: {
		  slideShadows: false,
		  shadow: false,
		},
		autoplay: {
			delay: 15000,
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.slider__arrow-next',
			prevEl: '.slider__arrow-prev',
		},
		pagination: {
			el: '.slider__dots',
			clickable: true,
			type: 'bullets',
		},
	});
}

export default slider;