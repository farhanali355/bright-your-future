// function storeFormData(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get form field values
//   const fullName = document.getElementById("fullName").value;
//   const email = document.getElementById("email").value;
//   const age = document.getElementById("age").value;
//   const gender = document.querySelector('input[name="gender"]:checked')?.value;
//   const course = document.getElementById("course").value;

//   // Validate form inputs
//   if (!fullName || !email || !age || !gender || !course) {
//     alert("Please fill out all required fields.");
//     return;
//   }

//   const studentData = {
//     fullName: fullName,
//     email: email,
//     age: age,
//     gender: gender,
//     course: course,
//   };

//   localStorage.setItem("studentData", JSON.stringify(studentData));
//   alert("Your data has been successfully stored in local storage.");

//   const likeWebsite = confirm("Do you like our website?");
//   if (likeWebsite) {
//     alert("Thank you for your feedback!");
//   } else {
//     alert("We appreciate your feedback and will work on improvements.");
//   }

//   // Display the stored data on the page
//   document.getElementById(
//     "storedData"
//   ).textContent = `Stored Data: ${JSON.stringify(studentData)}`;
// }

// window.onscroll = function () {
//   const thankYouDisplayed = localStorage.getItem("thankYouDisplayed");

//   if (
//     !thankYouDisplayed &&
//     window.innerHeight + window.scrollY >= document.body.offsetHeight
//   ) {
//     setTimeout(function () {
//       alert("Thank you for visiting our website!");
//       localStorage.setItem("thankYouDisplayed", "true"); // Set flag to prevent future alerts
//     }, 1000);
//   }
// };

// document
//   .getElementById("studentForm")
//   .addEventListener("submit", storeFormData);










// meri js 










function getData() {
  var name = document.getElementById("Name");
  var email = document.getElementById("email");
  var age = document.getElementById('age')

  
  if (name.value.trim() && email.value.trim() && age.value.trim()) {
    console.log(name.value);
    value = "";
    console.log(email.value);
    value = "";
    console.log(age.value);
    value = "";

    // value = "";
  } else {
    alert("fields are missing");
  }

}

function getRadioData() {
  var radios = document.getElementsByClassName("gender");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    value = "";

      console.log(radios[i].value);
    }
  }
}

function getDropdown() {
  var dropdown = document.getElementById("dropdown");
  value = "";

  console.log(dropdown.value);
}