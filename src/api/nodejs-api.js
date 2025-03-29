import axios from 'axios';
// For local change this to http://localhost:5000
export const invokeApi = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const userContact = (data) => invokeApi.post("/userContact", data);
export const getContact = () => invokeApi.get("/getcontact");

export const userVendor = (data) => invokeApi.post("/userVendor", data);
export const getVendor = () => invokeApi.get("/getvendor");