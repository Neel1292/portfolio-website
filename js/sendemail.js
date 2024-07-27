function sendEmail(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: fullname,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Message sent successfully.');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Message sending failed.');
        });
}