import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getCurrencies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching currencies:', error);
        throw error;
    }
};

export const createCurrency = async (currencyData) => {
    try {
        const response = await axios.post(API_URL, currencyData);
        return response.data;
    } catch (error) {
        console.error('Error creating currency:', error);
        throw error;
    }
};

export const updateCurrency = async (id, purchase, sell) => {
    try {
        const currencyData = {
            purchase: purchase,
            sell: sell
        };

        const response = await axios.put(`${API_URL}/${id}`, currencyData);
        return response.data;
    } catch (error) {
        console.error('Error updating currency:', error);
        throw error;
    }
};

export const deleteCurrency = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting currency:', error);
        throw error;
    }
};
