onload= init;

function init(){

document.getElementById("_username").value= localStorage.getItem("username");
document.getElementById("_password").value= localStorage.getItem("password");
document.getElementById("_country").value= localStorage.getItem("country");
document.getElementById("_sex").value= localStorage.getItem("sex");

}