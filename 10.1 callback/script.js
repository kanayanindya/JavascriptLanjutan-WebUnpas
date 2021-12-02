// // function halo(nama) {
// //     alert('halo,' + nama);
// // }

// function tampilkanPesan(callback){
//     const nama = prompt('masukkan nama : ');
//     callback(nama);
// }

// // tampilkanPesan(halo);

// // tampilkanPesan(function (nama) {
// //     alert('Halo, '+ nama)
// // })

// // tampilkanPesan();


// // tampilkanPesan(nama => {
// //     alert('Halo, ' + nama);
// // })

// tampilkanPesan(nama => alert('Halo, ' + nama));

//=================================================================

// const mhs = [
//     {
//         "nama"  : "Puput Budi Wintoro",
//         "nidn"  : "0231108402",
//         "email" : "wintorogaulz@gmail.com",
//         "id"    : 1
//     },
//     {
//         "nama"  : "Norma Maylinda",
//         "nidn"  : "12345678",
//         "email" : "norma@gmail.com",
//         "id"    : 2
//     }
// ]


// console.log('Mulai');
// mhs.forEach(m => {
//     for(let i=0; i<10000000;i++){
//         console.log();
//     }
//     console.log(m.nama);
// });   
// console.log('Selesai');


/*=============
Asynchronous Callback
===============*/
// function getDataMahasiswa(url, success, error){ // success dan error adalah callback
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){                // 4 = ready
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// function success(){

// }

// function error(){

// }


// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', 
// (results)=> {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama )); 
// }, 
// ()=> {});
// console.log('akhir');

/* ==========================
Bisa Juga Kita Gunakan JQUERY untuk melakukan hal seperti diatas
=============================*/


console.log('awal');

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs)=> {
        mhs.forEach(m => {
            console.log(m.nama);
        })
    },
    error: (e)=>{
        console.log(e.responseText);
    }
})
console.log('akhir');