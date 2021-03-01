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

  static 

  // CREATE a tool

  // static createTool(toolInfo) {
  //   console.log('static create tool')
    
  //   return axios.post(url, toolInfo)
  // }

  // DELETE a tool

  // static deleteTool(id) {
  //   return axios.delete(`${url}${id}`)
  // }

  // UPDATE a tool
}

export default GameService;