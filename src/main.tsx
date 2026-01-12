import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./styles/globals.css";

import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import NotFoundPage from './pages/NotFound';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />

        {/* auth routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
