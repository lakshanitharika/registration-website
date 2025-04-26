document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual submit

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log(`Registered Student:
    Name: ${name}
    Age: ${age}
    Address: ${address}
    Gender: ${gender}
    Course: ${course}
    Email: ${email}
    Phone: ${phone}
    `);

    alert('Form submitted successfully!');
    this.reset();
});
