import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4a2c0701585342adb50f2d1687cb5e55'
    }
})