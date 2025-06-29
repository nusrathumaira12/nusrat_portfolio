import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "swiper/css";
import "swiper/css/navigation";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
Component: MainLayout,
children: [
  {
    index: true,
    Component: Home
  }
]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div className='font-poppins'>
 <RouterProvider router={router} />
 </div>
  </StrictMode>,
)
