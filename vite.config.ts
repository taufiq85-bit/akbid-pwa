// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // 1. Impor

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // 2. Tambahkan plugin PWA
      registerType: 'autoUpdate', // Atau 'prompt' jika Anda ingin kontrol manual
      // Opsi Konfigurasi Awal (bisa disempurnakan nanti)
      manifest: {
        // Anda akan mengisi detail manifest.json di public/manifest.json
        // Plugin ini akan membacanya secara otomatis jika diletakkan di public/
        // Atau Anda bisa definisikan langsung di sini jika perlu
        name: 'Aplikasi Praktikum PWA',
        short_name: 'PraktikumPWA',
        description: 'Sistem Informasi Praktikum Akademi Kebidanan',
        theme_color: '#ffffff', // Ganti sesuai tema Anda
        // icons akan diambil dari public/icons/ jika path tidak dispesifikasikan
      },
      workbox: {
        // Opsi untuk Service Worker (misalnya, file apa saja yang di-cache)
        // 'generateSW' akan membuat service worker secara otomatis
        // 'injectManifest' jika Anda ingin membuat service worker sendiri (src/serviceWorker.ts)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'] // Contoh file yang di-cache
      },
      devOptions: {
        enabled: true // Aktifkan PWA di mode dev untuk testing
      }
    })
  ],
})