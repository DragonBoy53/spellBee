const user = document.getElementById("Username");
const pass = document.getElementById("password");
const error = document.getElementById("error");
const form = document.querySelector("form");

function authentication() {
    let flag;
  if (user.value === "admin" && pass.value === "admin") {
    window.location.href = "/sb.js";
  } 
  else if(user.value==="" || pass.value==="")
  {
    error.textContent = "Blocks cannot be left empty. Filling all fields above is necessary.";
    flag=1;
  }
  else if (user.value === "admin"  && pass.value !== "admin")
  {
    error.textContent = "Password is incorrect.";
    flag=1;
  }
  else if (user.value !== "admin"  && pass.value === "admin")
  {
    error.textContent = "user is incorrect.";
    flag=1;
  }
  else {
    error.textContent = "Email or Password is incorrect.";
    flag=1;
  }
  if(flag===1)
  {
    error.style.color="red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents default form submission
  authentication();
});
