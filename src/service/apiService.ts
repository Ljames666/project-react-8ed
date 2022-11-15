import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tasklistapi-lj.herokuapp.com/',
});

const doGet = async (url: string) => {
    try {
        const response = await api.get(url);

        if (response.status === 200) {
            return response.data;
        }

        return 'Erro';
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.name, message: error.message };
        }
    }
};

const doPost = async (url: string, data: object) => {
    try {
        const response = await api.post(url, data);

        if (response.status === 200) {
            return response.data;
        }
        return 'Erro';
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.name, message: error.message };
        }
    }
};
const doPut = async (url: string, data: object) => {
    try {
        const response = await api.put(url, data);

        if (response.status === 200) {
            return response.data;
        }
        return 'Erro';
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.name, message: error.message };
        }
    }
};
const doDelete = async (url: string) => {
    try {
        const response = await api.delete(url);

        if (response.status === 200) {
            return response.data;
        }

        return 'Erro';
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.name, message: error.message };
        }
    }
};

export { doGet, doPost, doPut, doDelete };
