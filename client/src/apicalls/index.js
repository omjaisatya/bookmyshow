import axios from "axios";

export const axiosInstance = axios.create({
  creadentials: "include",
  method: "post",
  "Content-type": "application/json",
  // authorization: `Bearer ${localStorage.getItem("token")}`,
});
