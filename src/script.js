document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('/.netlify/functions/discord-webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert('Message sent! We will get back to you soon.'))
    .catch(error => alert('Error sending message! Try again later.'));
});




document.getElementById('development-icon').addEventListener('click', function() {
    document.getElementById('development-notice').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('development-notice').style.display = 'none';
});


window.onclick = function(event) {
    if (event.target == document.getElementById('development-notice')) {
        document.getElementById('development-notice').style.display = 'none';
    }
};
