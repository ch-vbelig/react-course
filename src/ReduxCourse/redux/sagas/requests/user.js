import axios from 'axios'

export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/ch-vbelig/demo/user",
        //url: "http://localhost:8081/user",
    });
}