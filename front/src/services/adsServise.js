import axios from 'axios';

const API_URL = '/api/ad';

// gauti visus visu skelbimus
// home page

const getAllAdsData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// sukurti nauja skelbima
const createAd = async (adData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    console.log(config)
    console.log(adData)

    const response = await axios.post(API_URL, adData, config)

    return response.data
}

// gauti tik vartotojo skelbimus
const getUserAds = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    console.log(config)
    try {
        const response = await axios.get(API_URL + '/my', config)

        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const adsService = {
    getAllAdsData,
    getUserAds,
    createAd
}

export default adsService