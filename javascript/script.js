document.getElementById("welcome").innerHTML = "Selamat Datang"
document.getElementById("nama").innerHTML ="<b>Alfredo<b />";
document.getElementById("email").innerText = "alfredo@test.com";

console.log("Hanya bisa dilihat di console");

//variabel
let nama = "";
let email = "";
let data = []; //array /larik

//function
function tampil(){
    console.log("Button ditekan");
    //Simpan value txtnama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    console.log(nama);
    //ubah konten txtnama
    document.getElementById("nama").innerHTML = nama;
    //Email
    //Simpan value txtnama
    email = document.getElementById("txtEmail").value;
    console.log(ElementInternals);
    //ubah konten
    document.getElementById("email").innerHTML = email;
    //simpan ke dalam array data
    data.push(nama);
    console.log(data);
}


