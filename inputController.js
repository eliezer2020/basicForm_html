
var username;
var password;
var description;
var sex;
var country;

function setProfile() {
  console.log("submitting...");
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  description = document.getElementById("textarea").value;
  sex = document.querySelector('input[name="fieldsex"]:checked').value;

  console.log(username);
  console.log(password);
  console.log(description);
  console.log(sex);
  console.log(country);


  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("description", description);
  localStorage.setItem("sex", sex);
  localStorage.setItem("country", country);


  window.open("./page2.html", "blank");



}

function getSelected(sel) {
  country = sel.options[sel.selectedIndex].value;
}




