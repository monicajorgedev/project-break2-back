
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCi3lLNHnSArgkvHxVt-pfliCV2xps7xvQ',
  authDomain: 'projectbreakback.firebaseapp.com',
  projectId: 'projectbreakback',
  storageBucket: 'projectbreakback.appspot.com',
  messagingSenderId: '729131511239',
  appId: '1:729131511239:web:d34618e73f8f25a5a23de2'
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = async (ev) => {
  ev.preventDefault();
  const mensajeDiv = document.getElementById('mensaje');
  mensajeDiv.textContent = '';

  try {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      mensajeDiv.textContent = 'Email and password are required';
      return;
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    const idToken = await userCredential.user.getIdToken(); 
    
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();

    
    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      mensajeDiv.textContent = 'Login failed: ' + data.error;
    }
  } catch (error) {
    mensajeDiv.textContent = 'Error during login: ' + error.message;
  }
};

document.getElementById('loginButton').addEventListener('click', login);
