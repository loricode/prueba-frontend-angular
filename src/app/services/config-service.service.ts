import axios from 'axios';

const environment = {
  baseAPI:"http://localhost:8000/api"
}

const instanciaAxios = axios.create();
instanciaAxios.defaults.baseURL = environment.baseAPI;

//Interceptor para capturar el tocken y para agregarlo a todo request que se realice
instanciaAxios.interceptors.request.use((config) => {
    const token_seguridad = window.localStorage.getItem("token_seguridad");
    if (token_seguridad != null) {
        config.headers.Authorization = 'Bearer ' + token_seguridad;
    }
    return config;
},
    error => {
        return Promise.reject(error);
    }
);

instanciaAxios.interceptors.response.use((config) => {
   return config
 },
 error => {
    return error.response;
});

//objeto que representa las peticiones genericas
export const requestGenericSecurity = {
    get: (url: string) => instanciaAxios.get(url),
    post: (url:string, body: {}) => instanciaAxios.post(url, body),
    put: (url:string, body: {}) => instanciaAxios.put(url, body),
    delete: (url:string, body: {}) => instanciaAxios.delete(url, body)
};