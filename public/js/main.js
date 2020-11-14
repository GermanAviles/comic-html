const baseURL = 'https://xkcd.com/'
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

const getRandomComic = async () => {
  try {
    const number = Math.floor(Math.random() * 1000)
    const res = await fetch(`${baseURL}${number}/info.0.json`, { method: 'GET', headers: headers })
    console.log('RESPUESTA: ', res)
  } catch (e) {
    console.error(e)
  }
}

window.onload = () => {
  getRandomComic()
}