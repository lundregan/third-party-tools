<template>
  <div>
    <p>{{tool.name}}</p>    
  </div>
</template>

<script>
import ToolService from '../../toolService'

export default {
  data () {
    return {
      tool: null
    }
  },
  async created() {
    const id = this.$route.params.slug

    this.tool = await ToolService.getTool(id) 
  }
}
</script>

<style>

</style>