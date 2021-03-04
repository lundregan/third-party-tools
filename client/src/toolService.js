import axios from 'axios';

const url = "http://localhost:3000/api/tools/"

class ToolService { 
  // FETCH tools
  static getTools() {
    return new Promise ((resolve,reject) => {
        axios.get(url).then((res) => {
            const data = res.data;
            resolve(
                data.map(tool => ({
                    ...tool,
                    createdAt: new Date(tool.createdAt)
                }))
            );
        })
        .catch((err)=> {
            reject(err);
        })
        
    });
  }

  static getTool(slug) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}${slug}`)
      .then(res => {
        const data = res.data;

        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  // CREATE a tool

  static createTool(toolInfo) {
    console.log('static create tool')
    
    return axios.post(url, toolInfo)
  }

  // DELETE a tool

  static deleteTool(id) {
    return axios.delete(`${url}${id}`)
  }

  // UPDATE a tool
  static updateTool(toolInfo) {
    return axios.put(`${url}${toolInfo.id}`, toolInfo.data)
  }
}

export default ToolService;