import axios from "axios";

let token = "";
if (sessionStorage.getItem("jwtToken") === null) {
  token = localStorage.getItem("jwtToken");
} else {
  token = sessionStorage.getItem("jwtToken");
}
const instance = axios.create({
  baseURL: "http://192.168.43.18:5000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default instance;
