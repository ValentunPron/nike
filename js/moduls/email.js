const email = () => {
	(function(){
		emailjs.init("YOUR_PUBLIC_KEY");
	})();

	var templateParams = {
		from_name: 'James',
		from_email: 'Check this out!'
	};

	console.log(document.querySelector('#submit_form'))


	document.querySelector('#submit_form').addEventListener('click', (e) => {
		emailjs.send('service_0tbqnna', 'template_bxkcbju', templateParams)
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		}, function(error) {
		   console.log('FAILED...', error);
		});
	})
}

export default email;