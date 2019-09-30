function sendMail(form) {
  emailjs.send("gmail", "rosie", {
      "from_name": form.name.value,
      "from_email": form.emailaddress.value,
      "project_request": form.projectsummary.value
  })
  .then(
      function(response) {
          console.log("SUCCESS", response);
      },
      function(error) {
          console.log("FAILED", error);
      }
  );
  //return false;  
  // To block from loading a new page
  //changing contactForm to form solved problem with no reloading page after submitting the form!
}