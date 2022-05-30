const baseUrl = 'https://williamscustomhomes.herokuapp.com/api/'

const getData = async (endpoint: string) => {
	let data = (await (await fetch(baseUrl + endpoint)).json()).data

	if (Array.isArray(data)) {
		data = data.map((d) => ({ ...d.attributes, id: d.id }))
	} else {
		data = { ...data.attributes, id: data.id }
	}

	return data
}

export default getData
