import axios from 'axios';

const registerUser = async () => {
    try {
        const response = await axios.post('/api/user', user)

    } catch (error) {
        console.log(error)
    }
}