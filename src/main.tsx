import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router'; 


// 2. Render using the RouterProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={App} />
  </StrictMode>
);