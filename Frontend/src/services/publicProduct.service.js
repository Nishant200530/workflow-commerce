import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL?.replace("/auth", "") || "http://localhost:8080/api";

const PUBLIC_PRODUCT_API_URL = `${BASE_URL}/products/public`;

const getAll = () => {
    return axios.get(PUBLIC_PRODUCT_API_URL);
};

const publicProductService = {
    getAll,
};

export default publicProductService;