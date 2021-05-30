//
// Este módulo sirve de "fachada" que nos ayuda a "esconder" y "encapsular" la
// interacción con la API de autenticación de Firebase. De esa forma, en las
// pruebas unitarias de nuestros componentes solo necesitamos mockear este
// módulo en vez de tener que mockear el SDK de Firebase.
//

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

//
// Crea objeto de autenticación exponiendo funcionalidad de Firebase Auth.
//
// Espera recibir el objeto de firebase app creado con `initializeApp`.
//
// Retorna un objeto con los siguientes métodos: `onAuthStateChanged`,
// `signInWithGoogle` y `signOut`.
//
export const createAuth = (firebaseApp) => {
  const auth = getAuth(firebaseApp);
  return {
    onAuthStateChanged: (...args) => onAuthStateChanged(auth, ...args),
    signInWithGoogle: () => signInWithPopup(auth, new GoogleAuthProvider()),
    signOut: () => signOut(auth),
  };
};
