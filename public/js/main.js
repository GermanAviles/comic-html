const baseURL = 'http://localhost:3000/'
const headers = { 'Content-Type': 'application/json' }

var firebaseConfig = {
  apiKey: "AIzaSyBiUupB_EtSy6sFI6NECKAn0LRGjIDMKdE",
  authDomain: "comics-ccb2d.firebaseapp.com",
  databaseURL: "https://comics-ccb2d.firebaseio.com",
  projectId: "comics-ccb2d",
  storageBucket: "comics-ccb2d.appspot.com",
  messagingSenderId: "659704801718",
  appId: "1:659704801718:web:32d51a84f6433effb43917",
  measurementId: "G-T6KM4KQLD5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const calcularPosicionIcono = () => {
  const padre = document.getElementById('cont-info-comic')
  const icono = document.getElementById('icono-refresh')
  icono.style.top = `${ (window.innerHeight - padre.offsetHeight)/2 + 10 }px`

}

const getRandomComic = () => {
  const number = Math.floor(Math.random() * 1000)
  fetch(`${baseURL}comic/${number}`, { method: 'GET', headers: headers }).then((response) => response.json())
    .then((comic) => {
      const imagenComic = document.getElementById('comic-image')
      const tituloComic = document.getElementById('titulo-comic')
      const descripcionComic = document.getElementById('descripcion-comic')

      tituloComic.innerHTML = comic.data.title
      imagenComic.setAttribute('src', comic.data.img)
      descripcionComic.innerHTML = comic.data.transcript
      calcularPosicionIcono()
    });
}


window.onload = () => {
  getRandomComic()
  const refresh = document.getElementById('icono-refresh')
  refresh.addEventListener('click', getRandomComic, false)
}
