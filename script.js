// Init Array & LocalStorage
let dataMember = JSON.parse(localStorage.getItem('techData')) || [
    { nama: "Andhika Ryan", email: "andhika@student.ac.id", minat: "Cybersecurity" },
    { nama: "Shendy", email: "shendy@student.ac.id", minat: "Web Development" },
    { nama: "Randy", email: "randy@student.ac.id", minat: "Network Engineering" }
];

// Render Table Data (index.html)
let tabel = document.getElementById('tabelMember');
if (tabel) {
    tabel.innerHTML = ''; 
    dataMember.forEach(function(member, index) {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td style="color: #fff;">${member.nama}</td>
                <td style="color: #ccc;">${member.email}</td>
                <td><span style="color: #4facfe;">${member.minat}</span></td>
            </tr>
        `;
    });
}

// Handle Form Submission (form.html)
let form = document.getElementById('formDaftar');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let namaBaru = document.getElementById('inputNama').value;
        let emailBaru = document.getElementById('inputEmail').value;
        let minatBaru = document.getElementById('inputMinat').value;

        // Push new data
        dataMember.push({
            nama: namaBaru,
            email: emailBaru,
            minat: minatBaru
        });

        localStorage.setItem('techData', JSON.stringify(dataMember));

        alert(`Sukses: Data ${namaBaru} berhasil didaftarkan!`);

        // Update UI Result
        let divHasil = document.getElementById('hasilInput');
        divHasil.style.display = 'block'; 
        divHasil.innerHTML = `
            <span style="color: #4facfe; font-weight: bold;">Berhasil Menyimpan Data:</span><br><br>
            <span style="color: #ccc;">Nama:</span> ${namaBaru} <br>
            <span style="color: #ccc;">Email:</span> ${emailBaru} <br>
            <span style="color: #ccc;">Minat:</span> ${minatBaru}
        `;

        form.reset(); 
    });
}

// Image Modal Functions (gallery.html)
function bukaPreview(srcGambar) {
    let modal = document.getElementById("imageModal");
    let imgPreview = document.getElementById("imgPreviewUrl");
    
    if(modal && imgPreview) {
        modal.style.display = "flex";
        imgPreview.src = srcGambar;
    }
}

function tutupPreview() {
    let modal = document.getElementById("imageModal");
    if(modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside image
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Audio Controls
function playLagu() {
    let audio = document.getElementById('audioGaleri');
    if(audio) audio.play();
}

function pauseLagu() {
    let audio = document.getElementById('audioGaleri');
    if(audio) audio.pause();
}