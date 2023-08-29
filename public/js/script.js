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
                Name: ${brewery.name}
                <br/>
				Type: ${brewery.brewery_type}
                <br/>
				Street: ${brewery.street}
                <br/>
				City: ${brewery.city}
                <br/>
				Zip Code: ${brewery.postal_code}
                <br/>
				State: ${brewery.state}
                <br/>
				Phone: ${brewery.phone}
                <br/>
				Website: ${brewery.website_url}
                <hr/>
                `;
				document
					.querySelector('#p_class')
					.insertAdjacentHTML('beforeend', breweryName);
			});
			const clearBtn = document.querySelector('#clear');
			clearBtn.addEventListener('click', () => {
				document.querySelector('#p_class').innerHTML = '';
				document.querySelector('#zip-input').value = '';
			});
		})
		.catch((error) => {
			`Error: ${error}`;
		});
}
