const baseURL = 'https://xkcd.com/'
const headers = { 'Content-Type': 'application/json' }

const getRandomComic = async () => {
  try {
    const number = Math.floor(Math.random() * 1000)
    const res = await fetch(`${baseURL}${number}/info.0.json`, { method: 'GET', headers: headers })
    
  } catch (e) {
    console.error(e)
  }
}

window.onload = () => {
  getRandomComic()
}