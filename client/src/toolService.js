import axios from 'axios';

const url = "http://localhost:3000/api/tools/"

class ToolService { 
  // GET
  static getTools() {
    return new Promise ((resolve,reject) => {
        axios.get(url).then((res) => {
            const data = res.data;
            resolve(
                data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
            );
        })
        .catch((err)=> {
            reject(err);
        })
        
    });
}

  // Create

  static createTool(toolInfo) {
    console.log('static create tool')
    
    return axios.post(url, toolInfo)
  }

  // Delete

  static deleteTool(id) {
    return axios.delete(`${url}${id}`)
  }

  // Update
}

export default ToolService;