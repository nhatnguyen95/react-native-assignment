import axios from "axios";
import { BASE_URL } from "../constants/Urls";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const get = async (childUrl, params = {}) => {
  try {
    const result = await instance.get(childUrl, { params });
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  get,
};
