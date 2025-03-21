const signUpBtn = document.getElementById('signUp'),
  signInBtn = document.getElementById('signIn'),
  container = document.getElementById('container');

// Toggle between Sign Up and Sign In forms
signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});
signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Sign Up Functionality
document.querySelector('.sign-up-container form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.querySelector('.sign-up-container input[type="text"]').value;
  const email = document.querySelector('.sign-up-container input[type="email"]').value;
  const password = document.querySelector('.sign-up-container input[type="password"]').value;

  if (name && email && password) {
    const user = { name, email, password };

    // Save user data in LocalStorage
    localStorage.setItem(email, JSON.stringify(user));
    alert('Account created successfully! You can now sign in.');
    container.classList.remove('right-panel-active'); // Switch to sign-in form
  } else {
    alert('Please fill in all fields.');
  }
});

// Sign In Functionality
document.querySelector('.sign-in-container form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const email = document.querySelector('.sign-in-container input[type="email"]').value;
  const password = document.querySelector('.sign-in-container input[type="password"]').value;

  const storedUser = localStorage.getItem(email);

  if (storedUser) {
    const userData = JSON.parse(storedUser);
    if (userData.password === password) {
      alert(`Welcome back, ${userData.name}!`);
      localStorage.setItem('loggedInUser', email); // Store session
      window.location.href = 'quickCart.html'; // Redirect to another page (optional)
    } else {
      alert('Incorrect password!');
    }
  } else {
    alert('User not found. Please sign up first.');
  }
});
