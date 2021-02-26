<template>
  <div class="database">
    <h1 class="text-blue-600 font-bold">The Database</h1>
    <h2>The Complete Database of Third-Party Tools</h2>

    <div>
      <div v-for="tool in tools" :key="tool.id">
        <p>{{tool.name}}</p>
        <p>{{tool.description}}</p>
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
  async created() {
    try {
      this.tools = await ToolService.getTools()
      console.log('created')
    } catch(err) {
      this.err = err
    }
  }
}
</script>
