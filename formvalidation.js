// // // 'use strict'
let fullName;
let email;
let phoneNum;
let password;
let option;

let submitBtn;
let cancelBtn;

//submitBtn.addEventListener("click", function (e) {
  //  fullName = document.getElementById("fullName").value;
  //  email = document.getElementById("email").value;
  //  phoneNum = document.getElementById("phone").value;
  //  password = document.getElementById("password").value;
  //  option = document.getElementById("option").value;
  // // alert('hello');
  //e.preventDefault();
  // console.log(fullName, email,  phone, password, option);

  //checkValidation(fullName, email, phoneNum, password, option);
//});

function checkValidation() {



  fullName = document.getElementById('fullName').value;
  phoneNum = document.getElementById('phone').value;
  if (
    fullName == "" ||
    // email == "" &&
    // phoneNum == "" &&
    phoneNum == "" 
    // option == ""
  ) {
    // return false;
    alert("Please fill in all the required fields.");
    // console.log(fullName, email,  phone, password, option);

  } else {
    alert("Thank you for signing up!" + fullName  + phoneNum );
    // console.log(fullName, email,  phone, password, option);
    // return false;
    console.log(fullName);

  }
};
const cancelValidation = function () {
    // document.getElementById("fullName").value = "";
    document.getElementById("fullName").value ="";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
    document.getElementById("option").value = "";
}

cancelBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cancelValidation();
});



// var fullName = document.getElementById("fullName").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var password = document.getElementById("password").value;
//     var option = document.getElementById("option").value;
//     function checkValidation (event) {
//         if (fullName === "" || email === "" || phone === "" || password === "" || option === "") {
//             event.preventDefault(); // Prevent form submission
//           //   alert("Please fill in all the required fields.");
//           console.log("Please fill in all the required fields.");
//           }
//           else {
//                 alert("Thank you for signing up!");
//                 console.log(fullName, email,  phone, password, option);
//               }
//     }
// document.getElementById("submit").addEventListener("click", checkValidation (event));
