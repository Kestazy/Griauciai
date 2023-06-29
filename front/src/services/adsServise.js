import axios from 'axios';

const API_URL = '/api/ad';

// gauti visus visu skelbimus
// home page

const getAllAdsData = async() => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const adsService = {
    getAllAdsData,

}

export default adsService