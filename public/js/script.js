// zip code

document.querySelector('#btn').addEventListener('click', () => {
	const userInput = document.querySelector('#zip-input');
	request(userInput.value);
});

function request(userInput) {
	let url = `https://api.openbrewerydb.org/v1/breweries?by_postal=${userInput}&per_page=50`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((brewery) => {
				const breweryName = `
                <br/>
                ${brewery.name}
                <br/>${brewery.brewery_type}
                <br/>${brewery.street}
                <br/>${brewery.city}
                <br/>${brewery.postal_code}
                <br/>${brewery.state}
                <br/>${brewery.phone}
                <br/>${brewery.website_url}
                <hr/>
                `;
				document
					.querySelector('#p_class')
					.insertAdjacentHTML('beforeend', breweryName);
			});
		})
		.catch((error) => {
			`Error: ${error}`;
		});
}
