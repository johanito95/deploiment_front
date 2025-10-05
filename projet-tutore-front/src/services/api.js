// src/services/api.js
import axios from "axios";
import { API_URL } from "../config";

export const apiClient = axios.create({
  baseURL: API_URL, // ✅ Railway backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
