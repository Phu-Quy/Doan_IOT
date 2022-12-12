//----------------------------QUAN LI----------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA7gSb_kINJ8Jb1_In0OZCUnNzGcTdiIoo",
  authDomain: "kc326-e4f67.firebaseapp.com",
  databaseURL: "https://kc326-e4f67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc326-e4f67",
  storageBucket: "kc326-e4f67.appspot.com",
  messagingSenderId: "829740238707",
  appId: "1:829740238707:web:6c69fb9c89b51bc49fe706"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



const dtbase = getDatabase();
const phuquy = ref(dtbase, 'trang_thai/Quy');
const minhthong = ref(dtbase, 'trang_thai/Thong');
const conghau = ref(dtbase, 'trang_thai/Hau');
const phucthuan = ref(dtbase, 'trang_thai/Thuan');
const kieumi = ref(dtbase, 'trang_thai/Mi');
const khac = ref(dtbase, 'trang_thai/Khac');


onValue(phuquy, (snapshot) => {
  var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
var hours = curDate.getHours();
var minutes = curDate.getMinutes() + 1;
var seconds = curDate.getSeconds();
  if (snapshot.val() == "OUT"){
    document.getElementById('quy').style.color=  '#a5b1c2';
    document.getElementById('quy').style.borderBlockColor= '#a5b1c2';
    document.getElementById('quy').style.backgroundColor= '#f1f2f6';
    document.getElementById('quy-tg_ra').innerHTML=(hours+
      ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "IN"){
    document.getElementById('quy').style.color=  'black';
    document.getElementById('quy').style.borderBlockColor= '#32ff7e';
    document.getElementById('quy').style.backgroundColor= '#32ff7e';
    document.getElementById('quy-tg_vao').innerHTML=(hours+
      ":"+minutes+":"+seconds+"     "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "ERROR"){
    alert("Nguyễn Phú Quý truy cập không hợp lệ");
  }
});


onValue(minhthong, (snapshot) => {
  var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
var hours = curDate.getHours();
var minutes = curDate.getMinutes() + 1;
var seconds = curDate.getSeconds();
  if (snapshot.val() == "OUT"){
    document.getElementById('thong').style.color=  '#a5b1c2';
    document.getElementById('thong').style.borderBlockColor= '#a5b1c2';
    document.getElementById('thong').style.backgroundColor= '#f1f2f6';
    document.getElementById('thong-tg_ra').innerHTML=(hours+
      ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "IN"){
    document.getElementById('thong').style.color=  'black';
    document.getElementById('thong').style.borderBlockColor= '#32ff7e';
    document.getElementById('thong').style.backgroundColor= '#32ff7e';
    document.getElementById('thong-tg_vao').innerHTML=(hours+
      ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
}
if (snapshot.val() == "ERROR"){
  alert("Diệp Minh Thông truy cập không hợp lệ");
}
});

onValue(phucthuan, (snapshot) => {
  var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
var hours = curDate.getHours();
var minutes = curDate.getMinutes() + 1;
var seconds = curDate.getSeconds();
  if (snapshot.val() == "OUT"){
    document.getElementById('thuan').style.color=  '#a5b1c2';
    document.getElementById('thuan').style.borderBlockColor= '#a5b1c2';
    document.getElementById('thuan').style.backgroundColor= '#f1f2f6';
    document.getElementById('thuan-tg_ra').innerHTML=(hours+
      ":"+minutes+":"+seconds+"     "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "IN"){
    document.getElementById('thuan').style.color=  'black';
    document.getElementById('thuan').style.borderBlockColor= '#32ff7e';
    document.getElementById('thuan').style.backgroundColor= '#32ff7e';
    document.getElementById('thuan-tg_vao').innerHTML=(hours+
      ":"+minutes+":"+seconds+"     "+curDay+"/"+curMonth+"/"+curYear)
}
if (snapshot.val() == "ERROR"){
  alert("Trần Phúc Thuận truy cập không hợp lệ");
}
});

onValue(conghau, (snapshot) => {
  var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
var hours = curDate.getHours();
var minutes = curDate.getMinutes() + 1;
var seconds = curDate.getSeconds();
  if (snapshot.val() == "OUT"){
    document.getElementById('hau').style.color=  '#a5b1c2';
    document.getElementById('hau').style.borderBlockColor= '#a5b1c2';
    document.getElementById('hau').style.backgroundColor= '#f1f2f6';
    
document.getElementById('hau-tg_ra').innerHTML=(hours+
  ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "IN"){
    document.getElementById('hau').style.color=  'black';
    document.getElementById('hau').style.borderBlockColor= '#32ff7e';
    document.getElementById('hau').style.backgroundColor= '#32ff7e';
document.getElementById('hau-tg_vao').innerHTML=(hours+
  ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
}
if (snapshot.val() == "ERROR"){
  alert("Nguyễn Công Hậu truy cập không hợp lệ");
}

});

onValue(kieumi, (snapshot) => {
  var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
var hours = curDate.getHours();
var minutes = curDate.getMinutes() + 1;
var seconds = curDate.getSeconds();
  if (snapshot.val() == "OUT"){
    document.getElementById('mi').style.color=  '#a5b1c2';
    document.getElementById('mi').style.borderBlockColor= '#a5b1c2';
    document.getElementById('mi').style.backgroundColor= '#f1f2f6';
    document.getElementById('mi-tg_ra').innerHTML=(hours+
      ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
  }
  if (snapshot.val() == "IN"){
    document.getElementById('mi').style.color=  'black';
    document.getElementById('mi').style.borderBlockColor= '#32ff7e';
    document.getElementById('mi').style.backgroundColor= '#32ff7e';
    document.getElementById('mi-tg_vao').innerHTML=(hours+
      ":"+minutes+":"+seconds+"   "+curDay+"/"+curMonth+"/"+curYear)
}
if (snapshot.val() == "ERROR"){
  alert("Huỳnh Thị Kiều Mi truy cập không hợp lệ");
}
});

onValue(khac, (snapshot) => {
  if (snapshot.val() == "UNKNOW"){
    alert("Phát hiện truy cập không hợp lệ");
  }
});



















//   send.addEventListener('click',(e) =>{ 
//   sendDataToFirebase();
//   });
// function sendDataToFirebase(){
//  var SV = document.getElementById('hoTen').value;
// const db = getDatabase();
//   set(ref(db, SV), {
//     Họ_tên : document.getElementById('hoTen').value,
//     Mã_số : document.getElementById('mssv').value
//   });
// }
// -------------------- GỬI THÔNG TIN SINH VIÊN MỚI LÊN FIREBASE-------------------
// submit.addEventListener('click',(e) =>{ 
//   Submit();
//   });
// function Submit(){
//       var ten = document.getElementById('hoten').value;
//       var maso = document.getElementById('mssv').value;
//       var date = document.getElementById('ngaysinh').value;
//       var gender = document.getElementById('gioitinh').value;
//     const db = getDatabase();
//       set(ref(db, ten), {
//         Ho_ten : ten,
//         Ma_so : maso,
//         Ngay_sinh : date,
//         Gioi_tinh : gender,
//         Trang_thai : "OUT"
//       });

//       var p = document.createElement("p");
      
//       var node = document.createTextNode(ten);
//       p.appendChild(node);
//       p.style.textAlign="center";
//       p.style.backgroundColor='#f1f2f6';
//       p.style.color='#a5b1c2';
//       p.style.width="35%";
//       p.style.height="30px";
//       p.style.lineHeight="30px";
//       p.style.borderRadius="10px";
//       p.style.marginTop="15px";
//       p.style.fontFamily='Times New Roman';
//       p.style.fontSize="large";
//       p.style.borderBlockColor='#a5b1c2';
      
//       var div = document.getElementById("quanLi");
//       div.appendChild(p);
//       p.classList.add(maso);
//       alert("Thêm thành công");
//     }


// //-------------- HIỂN THỊ CỬA SỔ THÊM SINH VIÊN-----------------
// them.addEventListener('click',(e) =>{ 
//   displayAddNewStudent();
// });
// function displayAddNewStudent(){
//   var add = document.getElementById('themSV');
//   var manage = document.getElementById('quanLi');
//   var del = document.getElementById('xoaSV');
//   manage.style.display="none";
//   add.style.display="block";
//   del.style.display="none";
//   them.classList.add("active");
//   tongQuan.classList.remove("active");
//   xoa.classList.remove("active");
// }


// // ----------------- HIỂN THỊ CỬA SỔ QUẢN LÍ-----------------
// tongQuan.addEventListener('click',(e) =>{ 
//   displayManage();
// });
// function displayManage(){
//   var add = document.getElementById('themSV');
//   var manage = document.getElementById('quanLi');
//   var del = document.getElementById('xoaSV');
//   manage.style.display="block";
//   add.style.display="none";
//   del.style.display="none";
//   tongQuan.classList.add("active");
//   them.classList.remove("active");
//   xoa.classList.remove("active");
// }

// xoa.addEventListener('click',(e) =>{ 
//   displayDelete();
// });
// function displayDelete(){
//   var add = document.getElementById('themSV');
//   var manage = document.getElementById('quanLi');
//   var del = document.getElementById('xoaSV');
//   manage.style.display="none";
//   add.style.display="none";
//   del.style.display="block";
//   tongQuan.classList.remove("active");
//   them.classList.remove("active");
//   xoa.classList.add("active");
// }
// send.addEventListener('click',(e) =>{ 
// Sends();
// });
// read.addEventListener('click',(e) =>{ 
// Getval();
// });

// function Sends(){
//     Number = parseFloat(document.getElementById('Number').value);
// const db = getDatabase();
//   set(ref(db, 'Number/'), {
//     Value : Number
//   });
// }

// function Getval(){
//     const dbRef = ref(getDatabase());
//     get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//         document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
// }
