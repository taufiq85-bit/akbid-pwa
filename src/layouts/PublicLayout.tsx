// src/layouts/PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Penting untuk render nested routes

const PublicLayout: React.FC = () => {
  return (
    <div>
      <header>Header Publik</header>
      <main>
        <Outlet /> {/* Komponen halaman akan dirender di sini */}
      </main>
      <footer>Footer Publik</footer>
    </div>
  );
};

export default PublicLayout;