# Jumo Mobil - Marketplace Jual Beli Mobil Bekas (MERN Stack)

Website jual beli mobil modern, bersih, dan responsif untuk semua ukuran layar (PC desktop, laptop, tablet, dan smartphone).

Dibuat dengan gaya bahasa natural, lugas, dan praktis untuk pembeli serta penjual mobil — bebas dari teks marketing robotik / AI yang berlebihan.

---

## 🛠️ Tech Stack (MERN)

- **MongoDB / Mongoose**: Database untuk data listing mobil, spesifikasi, inspeksi, dan penjual. Dilengkapi auto-fallback in-memory store sehingga aplikasi tetap bisa dijalankan langsung meski MongoDB lokal belum menyala.
- **Express.js**: RESTful API untuk filtering multi-kriteria, pencarian, detail mobil, dan pasang iklan mobil baru.
- **React 18 & Vite**: Frontend cepat dan interaktif.
- **Tailwind CSS & Lucide Icons**: UI/UX responsif, bersih, rapi, dan mudah dinavigasi.

---

## 📱 Responsif di Semua Platform

- **Desktop & Laptop (≥ 1024px)**: Sidebar filter lengkap, 3 kolom kartu mobil, preview foto besar, dan panel simulasi kredit interaktif.
- **Tablet (768px - 1024px)**: 2 kolom kartu mobil, filter drawer slide-over, dan layout modal yang proporsional.
- **Smartphone (< 768px)**: Bottom Navigation Bar khas aplikasi mobile, quick swipe galeri, serta tombol aksi mengambang "Chat WA Penjual" dan "Telepon".

---

## 🚀 Cara Menjalankan

### 1. Jalankan Sekaligus (Backend + Frontend)
Di folder utama project, jalankan:
```bash
npm run dev
```

### 2. Atau Jalankan Terpisah
**Terminal 1 (Backend API):**
```bash
cd backend
npm run dev
```
Backend berjalan di: `http://localhost:5000`

**Terminal 2 (Frontend React):**
```bash
cd frontend
npm run dev
```
Frontend berjalan di: `http://localhost:5173`

---

## ⚙️ Konfigurasi Database (MongoDB)
Konfigurasi database ada di file `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/jumo_mobil
```
*Jika MongoDB lokal sedang tidak aktif, backend otomatis beralih ke penyimpanan memori lokal tanpa error, sehingga Anda bisa langsung mencoba semua fitur.*

---

## 📋 Fitur Utama untuk Pengunjung

1. **Pencarian Cepat & Filter Multi-Kriteria**:
   - Berdasarkan merek, tipe bodi (MPV, SUV, Sedan, Hatchback, City Car).
   - Transmisi (Matic / Manual).
   - Rentang harga, tahun pembuatan, dan batas kilometer (odometer).
   - Lokasi kota (Jabodetabek, Bandung, Surabaya, Semarang, Medan, dll).
2. **Kartu Mobil Transparan**:
   - Menampilkan harga cash tunai & perkiraan angsuran per bulan.
   - Tag status: Lolos Inspeksi, Bebas Banjir, Pajak Hidup.
3. **Detail Mobil Lengkap**:
   - Galeri foto dengan thumbnail switcher.
   - Tabel spesifikasi teknis (cc mesin, nomor polisi ganjil/genap, masa pajak).
   - Checklist hasil inspeksi fisik 6 poin utama.
4. **Kalkulator Simulasi Kredit Real-Time**:
   - Geser slider DP (15% - 50%) dan pilih tenor (1 - 5 tahun) untuk melihat estimasi cicilan per bulan.
5. **Kontak Langsung ke Penjual**:
   - Tombol WhatsApp dengan pesan otomatis yang sudah terisi judul unit dan harganya.
6. **Pasang Iklan Jual Mobil**:
   - Form ringkas untuk menerbitkan mobil baru langsung ke katalog.
7. **Simpan Favorit**:
   - Fitur bookmark mobil yang tersimpan di memori browser (localStorage).
