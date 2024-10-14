import axios from "axios";

const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

export const sendForgotPassword = (email: string) => {
    return axios.post(BaseURL + '/api/auth/forgot-password', { email });
};

export const resetPassword = async (token: string, password: string) => {
    return axios.post(BaseURL + '/api/auth/reset-password', { token, password });
};
