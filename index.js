function check() {
  const fname = document.getElementById("fname").value;
  if (!fname.length) {
    document.getElementById("fname").style.borderColor = "red";
    document.getElementById("fname-err-icon").style.visibility = "visible";
    document.getElementById("fname-error").style.display = "block";
  } else {
    document.getElementById("fname").style = "unset";
    document.getElementById("fname-err-icon").style = "unset";
    document.getElementById("fname-error").style = "unset";
  }

  //   last name
  const lname = document.getElementById("lname").value;
  if (!lname.length) {
    document.getElementById("lname").style.borderColor = "red";
    document.getElementById("lname-err-icon").style.visibility = "visible";
    document.getElementById("lname-error").style.display = "block";
  } else {
    document.getElementById("lname").style = "unset";
    document.getElementById("lname-err-icon").style = "unset";
    document.getElementById("lname-error").style = "unset";
  }

  // email
  const email = document.getElementById("email").value;
  if (!email.length) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email-err-icon").style.visibility = "visible";
    document.getElementById("email-error").style.display = "block";
  } else {
    if (document.getElementById("email").checkValidity()) {
      document.getElementById("email").style = "unset";
      document.getElementById("email-err-icon").style = "unset";
      document.getElementById("email-error").style = "unset";
    } else {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email-err-icon").style.visibility = "visible";
      document.getElementById("email-error").style.display = "block";
    }
  }

  // password
  const password = document.getElementById("password").value;
  if (!password.length) {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("password-err-icon").style.visibility = "visible";
    document.getElementById("password-error").style.display = "block";
  } else {
    document.getElementById("password").style = "unset";
    document.getElementById("password-err-icon").style = "unset";
    document.getElementById("password-error").style = "unset";
  }
}
