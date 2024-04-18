import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=crJFaD7GMRcTopWBptpGzXo8uymwnsH9M_bVsm4wvHc'
    const response = await axios .get(url, {
params: {
    query: term
}
        
})
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}
export default searchImage