import axios from 'axios'

/*export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "http://localhost:8080/api/timetable",
        //url: "http://localhost:8081/user",
    });
}
*/
export function requestGetUser(credentials) {
    return axios.post(
        'http://localhost:8080/api/login/', 
        credentials);
}