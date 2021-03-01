<template>
  <div class="create">
    <h1>Creating a new tool entry in the GTD</h1>
    
    <div class="my-2">
      <label>Name</label>
      <input type="text" v-model="name" class="ml-2 rounded bg-gray-100 border-2 border-gray-300" />
    </div>
    <div class="my-2">
      <label>Description</label>
      <input type="text" v-model="description" class="ml-2 rounded bg-gray-100 border-2 border-gray-300" />
    </div>
    <div class="my-2">
      <label>Game</label>
      <input type="text" v-model="game" class="ml-2 rounded bg-gray-100 border-2 border-gray-300" />
    </div>
    <div class="my-2">
      <label>Catagory</label>
      <input type="text" v-model="catagory" class="ml-2 rounded bg-gray-100 border-2 border-gray-300" />
    </div>
    <div>
      <button @click="addNewTool()" class="bg-blue-600 text-white p-2 rounded">Add New Tool</button>
    </div>
  </div>
</template>

<script>
import ToolService from '../toolService'

export default {
  name: 'Create',
  data () {
    return {
      name: '',
      description: '',
      game: '',
      catagory: '',
    }
  },
  methods: {
    isInputFilled: function () {
      return (this.name != '' && this.description != '' && this.game != '' && this.catagory != '') ? true : false
    },
    addNewTool: async function () {
      if(this.isInputFilled()) {
        console.log('adding new tool')
        
        let toolInfo = {
          name: this.name,
          description: this.description,
          game: this.game,
          catagory: this.catagory
        }

        try {
          await ToolService.createTool(toolInfo)
        } catch(err) {
          console.log(err)
        }
      }else{
        console.log('Inputs not filled')
      }
    }
  }
}
</script>
