
function matchPassword() {
  let password = document.getElementById("pass");
  let confirm = document.getElementById("confirmPass");
  let check = document.querySelector(".check");
  if (password.value != confirm.value) {
    check.innerHTML = "Passwords did not match";  
  } else {  
    check.innerHTML = "Password created successfully";
    check.style.color = "green";
  }  

  };


