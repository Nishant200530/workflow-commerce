import axios from "../utils/axiosInterceptor";

const API_URL = "/orders";

const createOrder = (orderData) => {
    return axios.post(API_URL, orderData);
};

const getMyOrders = () => {
    return axios.get(`${API_URL}/my`);
};

const cancelOrder = (orderId) => {
    return axios.put(`${API_URL}/${orderId}/cancel/user`);
};

const orderService = {
    createOrder,
    getMyOrders,
    cancelOrder,
};

export default orderService;