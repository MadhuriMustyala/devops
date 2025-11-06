function submitForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  if (name && phone && email) {
    document.getElementById("confirmation").innerHTML =
      "Thank you " + name + " You have registered successfully";
    console.log("Registeration details:", {
      Name: name,
      Email: email,
      Phone: phone,
    });
  } else {
    alert("Please enter the details correctly");
  }
}
