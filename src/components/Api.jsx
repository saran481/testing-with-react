import axios from 'axios'

export default async Basic => {

    const response = await axios.get('https://percipio.com/search/machine',
    {
        params: {
        queryString : "searchTerm"

        }
    });
    return response.data.result;
}