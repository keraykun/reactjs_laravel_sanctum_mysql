
import axios from 'axios'
const axiosClient = axios.create({
//   baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
    baseURL:'http://localhost:8000/api',
    headers: {
        'Content-Type': 'multipart/form-data',
    }
})
axiosClient.interceptors.request.use((config)=>{
  const token = localStorage.getItem('ACCESS-TOKEN')
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Accept'] = 'application/json';
//   config.headers['Content-Type'] = 'application/json';
  return config;
})
axiosClient.defaults.withCredentials=true
axiosClient.interceptors.response.use((response)=>{
  return response
},(error)=>{
  if(error.code==='ERR_NETWORK'){
    return Promise.reject(error);
   // window.location.replace("/no-connection")
  }

  if(error.response.status===401){
    localStorage.clear()
    window.location.replace("/login")
  }
  if(error.response.status===403){
    window.location.replace("/404")
  }
  if(error.response.status===404){
    window.location.replace("/404")
  }
  if(error.response.status===422){
    error.message = error.response.data.message || 'Something went wrong!';
    return Promise.reject(error);
  }

})
export default axiosClient
