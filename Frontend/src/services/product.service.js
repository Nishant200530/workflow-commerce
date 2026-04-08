import axios from "../utils/axiosInterceptor";

const API_URL = "/products";

const getAll = () => {
    return axios.get(API_URL);
};

const create = (data) => {
    return axios.post(API_URL, data);
};

const update = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

const deactivate = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const productService = {
    getAll,
    create,
    update,
    deactivate,
};

export default productService;