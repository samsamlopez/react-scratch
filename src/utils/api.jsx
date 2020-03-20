import axios from "axios";

const baseUrl =
	"https://iu7inqj2l4.execute-api.us-east-1.amazonaws.com/dev/api";

const get = (endpoint, data) => axios.get(`${baseUrl}${endpoint}`, data);
const post = (endpoint, data) => axios.post(`${baseUrl}${endpoint}`, data);
const patch = (endpoint, data) => axios.patch(`${baseUrl}${endpoint}`, data);
const remove = (endpoint, data) => axios.delete(`${baseUrl}${endpoint}`, data);

const auth = (endpoint, data) => axios.post(`${baseUrl}${endpoint}`, { data });

export { get, patch, post, auth, remove };
