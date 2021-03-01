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
                    createdAt: new Date(post.createdAt)
                }))
            );
        })
        .catch((err)=> {
            reject(err);
        })
        
    });
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
}

export default ToolService;