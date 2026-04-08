import axios from "../utils/axiosInterceptor";

const API_URL = "/payments";

const processPayment = (orderId, paymentMethod) => {
    return axios.post(`${API_URL}/${orderId}`, { paymentMethod });
};

const getAllPayments = (params = {}) => {
    return axios.get(API_URL, { params });
};

const refundPayment = (paymentId) => {
    return axios.put(`${API_URL}/${paymentId}/refund`);
};

const paymentService = {
    processPayment,
    getAllPayments,
    refundPayment,
};

export default paymentService;