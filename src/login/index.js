import axios from "axios";

export const login = (data) => {
  try {
    const res = axios.post('http://code.aldipee.com/api/v1/auth/login', data);
    return res
  } catch (error) {
    console.log(error);
  }
}