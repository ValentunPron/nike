const email = (templateParams) => {
	(function(){
		emailjs.init("ovMXZVwdfqTP4zKxm");
	})();
	
	emailjs.send('service_0tbqnna', 'template_bxkcbju', templateParams)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	   document.querySelector('.wrapperDialog').classList.remove('active');
	   document.body.classList.remove('lock');
	}, function(error) {
	   console.log('FAILED...', error);
	   alert('Виникла помилка =(')
	});
	
}
const dialog = () => {
	document.querySelector('#sub').addEventListener('click', (e) => {
		e.preventDefault();
		document.body.classList.add('lock')

		document.querySelector('.wrapperDialog').innerHTML = `
		<div class="dialog">
			<h3 class="dialog__title title">WE WILL CONTACT YOU ASAP!</h3>
			<form action="#" class="dialog__form">
				<input required placeholder="Name" type="text" id="form_name" name="name" class="dialog__input">
				<input required placeholder="Email" type="email" id="form_email" name="email" class="dialog__input">
				<button class="dialog__button button" id="submit_form">SUBESCRIBE</button>
			</form>
			<button class="close">X</button>
		</div>
		`

		document.querySelector('.close').addEventListener('click', () => {
			document.querySelector('.wrapperDialog').classList.remove('active');
			document.body.classList.remove('lock');
		})
		document.querySelector('.wrapperDialog').classList.add('active');

		document.querySelector('#submit_form').addEventListener('click', (e) => {
			e.preventDefault();
			const templateParams = {
				from_name: document.querySelector('#form_name').value,
				from_email: document.querySelector('#form_email').value
			}
			email(templateParams);
		})
	})

	document.querySelectorAll('.button').forEach(item => {
		if (item.id !== 'sub') {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				document.body.classList.add('lock')
		
				document.querySelector('.wrapperDialog').innerHTML = `
				<div class="dialog">
					<h3 class="dialog__title title">This is a demo layout so many features and buttons are not working</h3>
					<button class="dialog__button button close-button">Close</button>
				</div>
				`
		
				document.querySelector('.close-button').addEventListener('click', () => {
					document.querySelector('.wrapperDialog').classList.remove('active');
					document.body.classList.remove('lock');
				})
				document.querySelector('.wrapperDialog').classList.add('active');
			})
		}
	})
}

export default dialog;