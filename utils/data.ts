const baseUrl = 'https://williamscustomhomes.herokuapp.com/api/'

const getData = async (endpoint: string) => {
	let data = (await (await fetch(baseUrl + endpoint)).json()).data

	if (Array.isArray(data)) {
		data = data.map((d) => d.attributes)
	} else {
		data = data.attributes
	}

	return data
}

export default getData
