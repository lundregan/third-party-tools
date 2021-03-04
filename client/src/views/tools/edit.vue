<template>
  <div>editing Tool
    {{tool}}

    <div>
      <div>
        <label for="">name</label>
        <input type="text" v-model="tool.name" class="m-2 p-2 text-black">
      </div>
      <div>
        <label for="">description</label>
        <input type="text" v-model="tool.description" class="m-2 p-2 text-black">
      </div>
      <div>
        <label for="">Game</label>
        <input type="text" v-model="tool.game" class="m-2 p-2 text-black">
      </div>
      <div>
        <label for="">Catagory</label>
        <input type="text" v-model="tool.catagory" class="m-2 p-2 text-black">
      </div>
      <button class="p-2 bg-blue-600 text-white rounded mt-8" @click="saveChanges()">Save Changes</button>
    </div>
  </div>
</template>

<script>
import ToolService from '../../toolService'

export default {
  data () {
    return {
      tool: {}
    }
  },
  async created() {
    const id = this.$route.params.slug

    this.tool = await ToolService.getTool(id)
  },
  methods: {
    saveChanges: function () {
      console.log('saving changings')

      ToolService.updateTool({
        id: this.tool._id,
        data: {
          name: this.tool.name,
          description: this.tool.description,
          game: this.tool.game,
          catagory: this.tool.catagory
        }
      })
    }
  }
}
</script>

<style>

</style>