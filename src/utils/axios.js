import axios from "axios";
import store from '../store/store'
import { logout } from "../store/features/user"

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_LINK,
  withCredentials: true,
  timeout: 8000
})



api.interceptors.response.use(
  config => Promise.resolve(config),
  error => {
    if (error.response) {
      const status = error.response.status;

      if (status === 511) {
        store.dispatch(logout())
        setTimeout(() => window.location.pathname = '/login'
        ,1000);
      }
    }
    Promise.reject(error)
  }
)

export default api;