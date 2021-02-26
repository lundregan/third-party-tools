<template>
  <div>
    <p>Tools</p>
    <div v-for="tool in tools" :key="tool.id">
      <p>{{tool.name}}</p>
    </div>
  </div>
</template>

<script>
import ToolService from '../toolService'

export default {
  name: 'HelloWorld',
  data() {
    return {
      tools: [],
      err: '',
      text: ''
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
