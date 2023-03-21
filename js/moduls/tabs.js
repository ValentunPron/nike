const tabs = () => {
	const tabsImage = document.querySelectorAll('.hero__image'),
		  tabsButton = document.querySelectorAll('.hero__tab');

	tabsButton.forEach((item, index) => {
		item.addEventListener('click', (event) => {
			tabsButton.forEach(item => item.classList.remove('active'));
			tabsImage.forEach(item => item.classList.remove('active'));
			tabsImage[index].classList.add('active');
			item.classList.add('active');
		})
	})
}

export default tabs;