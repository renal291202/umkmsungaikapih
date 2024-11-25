<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website UMKM Kelurahan Sungai Kapih</title>

<header>
    <h1>UMKM Kelurahan Sungai Kapih</h1>
</header>

<nav>
    <a href="#" onclick="showSection('home')">Home</a>
    <a href="#" onclick="showSection('umkmList')">Daftar UMKM</a>
    <a href="#" onclick="showSection('loginForm')">Admin</a>
</nav>

<div class="container">
    <!-- Home Section -->
    <div id="home" class="section">
        <h2>Selamat Datang di Website UMKM Kelurahan Sungai Kapih</h2>
        <p>Temukan informasi lengkap tentang UMKM di Kelurahan Sungai Kapih di sini.</p>

        <!-- Profil Kelurahan -->
        <div class="umkm-profile">
            <div class="profile-info">
                <h3>Profil Kelurahan</h3>
                <p><strong>Kecamatan:</strong> Sambutan</p>
                <p><strong>Tipologi:</strong> Dataran dan sebagian rawa</p>
                <p><strong>Luas Wilayah:</strong> 17,5 Km²</p>
                <p><strong>Populasi:</strong> 12.734 Jiwa</p>
            </div>
        </div>
    </div>

     <!-- Daftar UMKM Section -->
     <div id="umkmList">
        <h2>Daftar UMKM</h2>
        <div class="umkm-container" id="umkmData"></div>
    </div>

     <!-- Admin Login Form -->
<div id="loginForm">
    <h2>Selamat Datang di Halaman Admin</h2>
    <h3>Silahkan Login di Bawah ini</h3>
    
    <form id="login">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" placeholder="Enter Username" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Password" required>
        </div>
        <button type="button" onclick="login()">Login</button>
    </form>
</div>

<!--Admin Section-->
<div id="adminSection">
    <h2>Admin Dashboard</h2>
    <nav>
        <a href="#" onclick="showAdminSection('adminHome')">Beranda</a>
        <a href="#" onclick="showAdminSection('adminUmkm')">UMKM</a>
        <a href="#" onclick="showAdminSection('optionsSection')">Option</a>
    </nav>

    <!-- Admin Home Section -->
        <h3>Selamat datang di Dashboard Admin</h3>
        <p>Di sini Anda bisa mengelola data UMKM yang ada di Kelurahan Sungai Kapih.</p>
    </div>

    <!-- Admin UMKM Section -->
    <div id="adminUmkm">
        <h3>Tambah UMKM Baru</h3>
        <form id="umkmForm">
            <div class="form-group">
                <label for="umkmName">Nama UMKM:</label>
                <input type="text" id="umkmName" placeholder="Masukkan Nama UMKM">
            </div>
            <div class="form-group">
                <label for="umkmCategory">Kategori Usaha:</label>
                <input type="text" id="umkmCategory" placeholder="Masukkan Kategori Usaha">
            </div>
            <div class="form-group">
                <label for="umkmOwner">Pemilik UMKM:</label>
                <input type="text" id="umkmOwner" placeholder="Masukkan Pemilik UMKM">
            </div>
            <div class="form-group">
                <label for="umkmPlace">Alamat UMKM:</label>
                <input type="text" id="umkmPlace" placeholder="Masukan Alamat UMKM">
            </div>
            <div class="form-group">
                <label for="umkmDescription">Deskripsi UMKM:</label>
                <input type="text" id="umkmDescription" placeholder="Masukan Deskripsi">
            </div>
            <div class="form-group">
                <label for="umkmSocial">Whatsapp:</label>
                <input type="url" id="umkmSocial" placeholder="Masukan Whatsapp">
            </div>
            <div class="form-group">
                <label for="umkmMap">Gmaps:</label>
                <input type="url" id="umkmMap" placeholder="Masukan Google Maps">
            </div>
            <div class="form-group">
                <label for="umkmImage">Gambar UMKM:</label>
                <input type="file" id="umkmImage" accept="image/*">
            </div>
            <button type="button" onclick="addUMKM()">Tambah UMKM</button>
        </form>
        <h3>Daftar UMKM</h3>
        <div id="umkmListAdmin"></div>
    </div>

    <!-- Options Section -->
    <div id="optionsSection">
        <h3>Opsi Lainnya</h3>
        <p>Anda dapat melakukan pengaturan lainnya di sini.</p>
    </div>
</div>
</div>

<footer>
<p>&copy; 2024 UMKM Kelurahan Sungai Kapih</p>
</footer>