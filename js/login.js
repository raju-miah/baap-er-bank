
// Step 1: add click event handler with subbit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-2: get the email address inside the email input field
    // always remember to use .value to get text from a input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)

    // Step 3: get password
    // step 3.1: set the id on html element
    // step 3.2: get the element
    // step 3.3: get the valu from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // Danger: Do Not Verify Email Password on the client side

    // Step 4: verify email and password

    if (email === 'raju@gmail.com' && password === 'rajuhere') {
        // console.log('valid user');

        // link bank.html

        window.location.href = 'bank.html';

    }
    else {
        // console.log('invalid user');
        alert('Tor Baap Er bank a ja!! Aita amar Baap Er Bank')
    }

})