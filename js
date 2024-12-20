<script>
// Fungsi untuk menampilkan bagian yang sesuai
function showSection(section) {
    document.querySelectorAll('.container > div').forEach(div => div.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function showAdminSection(section) {
    document.querySelectorAll('#adminSection > div').forEach(div => div.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Fungsi login sederhana
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'kelurahan sungai kapih' && password === '1234') {
        alert('Login berhasil!');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminSection').style.display = 'block';
        displayUMKMAdmin();
    } else {
        alert('Login gagal! Username atau password salah');
    }
}

function logout() {
    alert('Logout berhasil!');
    document.getElementById('adminSection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Fungsi untuk menambahkan data UMKM
function addUMKM() {
    const umkmName = document.getElementById('umkmName').value;
    const umkmCategory = document.getElementById('umkmCategory').value;
    const umkmOwner = document.getElementById('umkmOwner').value;
    const umkmPlace = document.getElementById('umkmPlace').value;
    const umkmDescription = document.getElementById('umkmDescription').value;
    const umkmSocial = document.getElementById('umkmSocial').value;
    const umkmMap = document.getElementById('umkmMap').value;
    const umkmImage = document.getElementById('umkmImage').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const umkm = {
            name: umkmName,
            category: umkmCategory,
            owner: umkmOwner,
            place: umkmPlace,
            description: umkmDescription,
            social: umkmSocial,
            map: umkmMap,
            image: e.target.result // Gambar dalam bentuk base64
        };

        localStorage.setItem(umkmName, JSON.stringify(umkm));
        alert('UMKM berhasil ditambahkan!');
        displayUMKMAdmin();
    };
    reader.readAsDataURL(umkmImage);
}

 // Fungsi untuk menampilkan data UMKM di halaman admin
 function displayUMKMAdmin() {
    const umkmListAdmin = document.getElementById('umkmListAdmin');
    umkmListAdmin.innerHTML = '';

    Object.keys(localStorage).forEach(key => {
        const umkm = JSON.parse(localStorage.getItem(key));
        const umkmItem = document.createElement('div');
        umkmItem.classList.add('umkm-item');
        umkmItem.innerHTML = `
            <h3>${umkm.name}</h3>
            <img src="${umkm.image}" alt="${umkm.name}">
            <p>Kategori: ${umkm.category}</p>
            <p>Pemilik: ${umkm.owner}</p>
            <p>Alamat: ${umkm.place}</p>
            <p>${umkm.description}</p>
            <a href="${umkm.social}" target="_blank">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" style="width: 40px; margin-bottom: -10px;"></a> 
            <a href="${umkm.map}" target="_blank">
                 <img src="data:image/png;base64,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" alt="Google Maps Icon" style="width: 40px; margin-bottom: -10px"></a>
            <button type="button" onclick="deleteUMKM('${key}')">Hapus</button>
        `;
        umkmListAdmin.appendChild(umkmItem);
    });
}

// Fungsi untuk menghapus data UMKM
function deleteUMKM(key) {
    localStorage.removeItem(key);
    alert('UMKM berhasil dihapus!');
    displayUMKMAdmin();
}

// Fungsi untuk menampilkan data UMKM di halaman UMKM
function displayUMKM() {
    const umkmData = document.getElementById('umkmData');
    umkmData.innerHTML = '';

    Object.keys(localStorage).forEach(key => {
        const umkm = JSON.parse(localStorage.getItem(key));
        const umkmItem = document.createElement('div');
        umkmItem.classList.add('umkm-item');
        umkmItem.innerHTML =` 
            <h3>${umkm.name}</h3>
            <img src="${umkm.image}" alt="${umkm.name}">
            <p>Kategori: ${umkm.category}</p>
            <p>Pemilik: ${umkm.owner}</p>
            <p>Alamat: ${umkm.place}</p>
            <p>${umkm.description}</p>
            <a href="${umkm.social}" target="_blank">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" style="width: 40px; margin-bottom: -10px;"></a> 
            <a href="${umkm.map}" target="_blank">
                <img src="data:image/png;base64,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" alt="Google Maps Icon" style="width: 40px; margin-bottom: -10px;"></a>
        `;
        umkmData.appendChild(umkmItem);
    });
}

// Tampilkan data UMKM di halaman UMKM
window.onload = function () {
    displayUMKM();
    showSection('home');
};
</script>