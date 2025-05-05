// src/routes.tsx
import { Routes, Route } from 'react-router-dom';

// Impor Layouts (jika dibuat)
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
// import AuthLayout from './layouts/AuthLayout'; // Jika perlu

// Impor Pages Placeholder
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
// import RegisterPage from './pages/RegisterPage'; // Bisa ditambahkan nanti

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rute Publik dengan Layout */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* Rute Autentikasi (Contoh tanpa layout khusus dulu) */}
      {/* <Route path="/auth" element={<AuthLayout />}> */}
         <Route path="/login" element={<LoginPage />} />
         {/* <Route path="/register" element={<RegisterPage />} /> */}
      {/* </Route> */}


      {/* Rute Aplikasi Utama (Protected - tapi belum ada guard) */}
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        {/* Rute lain dalam dashboard bisa ditambahkan nanti */}
      </Route>

      {/* Rute Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;