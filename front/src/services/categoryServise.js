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

// prideti kategorija
const setCategory = async(categoryData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    console.log(config)
    try {
        const response = await axios.post(API_URL, categoryData, config);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

const categoryService = {
    getAllCategoriesData,
    setCategory
}

export default categoryService