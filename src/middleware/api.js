import axios from "axios";

const Http = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    headers:{
        'Content-Type': "application/json",
    },
    timeout: 10000,
})

Http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // 一定要return config
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default Http