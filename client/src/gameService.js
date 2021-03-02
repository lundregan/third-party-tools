import axios from 'axios';

const url = "http://localhost:3000/api/games/"

class GameService { 
  static getGames() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  static getGame(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}${id}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  // CREATE game
  static createGame(gameInfo) {
    return axios.post(url, gameInfo)
  }

  // DELETE a tool

  // static deleteTool(id) {
  //   return axios.delete(`${url}${id}`)
  // }

  // UPDATE a tool
}

export default GameService;