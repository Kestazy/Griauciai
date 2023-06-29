import axios from 'axios';

const API_URL = '/api/category';

// gauti visas kategorijas
// home page

const getAllCategoriesData = async() => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const categoryService = {
    getAllCategoriesData,

}

export default categoryService