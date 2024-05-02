function signIn(email, password) {
    // API endpoint for sign-in
    const apiUrl = 'https://example.com/api/signin';
    const data = {
      email: email,
      password: password
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(apiUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to sign in');
        }
        return response.json();
      })
      .then(data => {
        console.log('User signed in successfully');
        console.log('User data:', data);
      })
      .catch(error => {
        console.error('Error signing in:', error.message);
        
      });
  }
  function signUp(email, password, confirmPassword, name, age, gender) {
    // API endpoint for sign-up
    const signUpUrl = 'https://example.com/api/signup';
    // API endpoint for checking email availability
    const checkEmailUrl = 'https://example.com/api/check-email';
  
    fetch(checkEmailUrl + '?email=' + encodeURIComponent(email))
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to check email availability');
        }
        return response.json();
      })
      .then(data => {
        if (data.exists) {
          throw new Error('Email is already in use');
        } else {
          const signUpData = {
            email: email,
            password: password
          };
  
          const signUpOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
          };
  
          return fetch(signUpUrl, signUpOptions);
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
        return response.json();
      })
      .then(data => {
        console.log('User signed up successfully');
        console.log('User data:', data);

      })
      .catch(error => {

        console.error('Error signing up:', error.message);
       
      });
  }
  