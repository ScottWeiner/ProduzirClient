import axios, { AxiosResponse, AxiosError } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5227/api/',
    timeout: 1000
})

// Add request interceptor to log request details
axiosInstance.interceptors.request.use(request => {
    console.log('Request:', {
        url: request.url,
        method: request.method,
        headers: request.headers,
        data: request.data
    });
    return request;
});

// Add response interceptor to log errors
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.log('API Error:', {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            headers: error.response?.headers
        });
        return Promise.reject(error);
    }
);

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string, params?: URLSearchParams) => axiosInstance.get(url, { params }).then(responseBody),
    post: (url: string, body: {}) => axiosInstance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axiosInstance.put(url, body).then(responseBody),
    delete: (url: string) => axiosInstance.delete(url).then(responseBody),
    postForm: (url: string, data: any) => axiosInstance.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(responseBody),
    putForm: (url: string, data: any) => {
        console.log('DATA', data)
        axiosInstance.put(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data;',
                'Accept': 'application/json'
            }
        }).then(responseBody)
    }
}

const Products = {
    getProduct: (id: any) => requests.get(`products/${id}`),
    getAllProducts: () => requests.get('products'),
    createProduct: (productFormData: any) => requests.postForm('products', productFormData),
    updateProduct: (productFormData: any) => requests.putForm('products', productFormData),
    deleteProduct: (id: any) => requests.delete(`products/${id}`)

}

const apiAgent = {
    Products
}


export default apiAgent
