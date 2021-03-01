<template>
  <div class="database">
    <h1 class="text-blue-600 font-bold">The Database</h1>
    <h2>The Complete Database of Third-Party Tools</h2>

    <div class="mx-64">
      <div class="flex justify-between m-2 border-b-2 border-gray-300 pb-2">
        <p>Name</p>
        <p>Description</p>
        <p>Game</p>
      </div>
      <div v-for="tool in tools" :key="tool.id" class="flex justify-between shadow m-2">
        <p>{{tool.name}}</p>
        <p>{{tool.description}}</p>
        <p>{{tool.game}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ToolService from '../toolService'

export default {
  data() {
    return {
      tools: []
    }
  },
  async mounted() {
    try {
      this.tools = await ToolService.getTools()
      console.log('created')
    } catch(err) {
      this.err = err
    }
  }
}
</script>
