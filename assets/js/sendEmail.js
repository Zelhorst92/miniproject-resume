function sendMail(contactForm) {
    emailjs.send("service_shp22d7", "template_hdsyj4s", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
        
    })
    .then(
        function(response) {
            console.log("Email send successfully!", response);
        },
        function(error) {
            console.log("Epic Fail, Email not send.", error);
        }
    );
    return false;
}