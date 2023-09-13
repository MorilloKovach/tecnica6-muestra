
const firebaseConfig = {
    apiKey: "AIzaSyDhDH1nL3P2K0GdsYBAGZEKjzZf81n9j2M",
    authDomain: "tecnica6-d8f42.firebaseapp.com",
    projectId: "tecnica6-d8f42",
    storageBucket: "tecnica6-d8f42.appspot.com",
    messagingSenderId: "93540606388",
    appId: "1:93540606388:web:9c14750b105ac4a15612e1",
    measurementId: "G-2ZL78SWS36"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  const boton = document.getElementById('enviar');
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value
    let documento = document.getElementById('documento').value
    // Define los datos que deseas agregar como un objeto
    const data = {
      Documento: documento,
      Nombre: nombre
    };
    db.collection('comentarios').add(data)
      .then((docRef) => {
        console.log(`Documento agregado con ID: ${docRef.id}`);
        Swal.fire({
          icon: 'success',
          title: 'Formulario',
          text: `Se envió con éxito! su ticket es: ${docRef.id}`,
        })
      })
      .catch((error) => {
        console.error('Error al agregar documento: ', error);
      });

  });