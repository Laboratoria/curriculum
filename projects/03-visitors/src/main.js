import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import App from './components/App/App.js';

const firebaseApp = initializeApp({
  // YOUR FIREBASE CONFIG GOES HERE!!!
});

document.getElementById('root').appendChild(App({ firebaseApp }));