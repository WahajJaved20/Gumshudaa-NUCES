import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import PostItem from './Components/PostItem.jsx'
import { ToastContainer } from 'react-toastify';
import NotFoundPage from './Components/RedirectError.jsx'
import ForgotPasswordLink from './Components/ForgotPasswordLinkGen.jsx'
import ForgotPasswordPage from './Components/ForgotPasswordPage.jsx'
import { Analytics } from '@vercel/analytics/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/forgotPasswordLink" element={<ForgotPasswordLink />} />
        <Route path="/forgetPassword" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
  </React.StrictMode>,
)
