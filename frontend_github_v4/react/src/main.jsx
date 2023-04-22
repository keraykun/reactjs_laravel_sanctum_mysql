import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/index.css'
import '../src/assets/css/App.css'
import '../src/assets/css/Home.css'
import '../src/assets/css/loader.css'
import { ContextProvider } from './components/context/useContextProvider'
import router from "./router.jsx"
import { RouterProvider } from 'react-router-dom'
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  })
window.toast = toast

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
          <RouterProvider router={router}/>
        </ContextProvider>
    </React.StrictMode>,
)
