var form = document.getElementById("contactForm");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("contactForm-status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		status.innerHTML = "Bedankt voor bericht!";
		form.reset()
	}).catch(error => {
		status.innerHTML = "Oeps! Er was een probleem met het versturen van het bericht."
	});
}
form.addEventListener("submit", handleSubmit)