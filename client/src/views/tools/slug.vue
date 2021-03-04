<template>
  <div>
    <p>{{tool.name}}</p>

    <router-link :to="`/tools/edit/${tool._id}`" class="bg-blue-600 p-2 mt-16">Edit Tool</router-link>
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
  }
}
</script>

<style>

</style>