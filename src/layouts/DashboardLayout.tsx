// src/layouts/DashboardLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <header>Header Dashboard</header>
      {/* Nanti bisa tambah Sidebar di sini */}
      <main>
        <Outlet /> {/* Komponen halaman dashboard akan dirender di sini */}
      </main>
    </div>
  );
};

export default DashboardLayout;