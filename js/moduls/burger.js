
const burger = () => {
	const header = document.querySelector('.header'),
	  headerBurger = document.querySelector('.header__burger');

	headerBurger.addEventListener('click', (event) => {
		event.preventDefault();
		header.classList.toggle('active');
	});
}

export default burger
