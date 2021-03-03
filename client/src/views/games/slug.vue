<template>
  <div>
    <div v-if="game">
      <p>{{game.name}}</p>
      <p>{{game.genre}}</p>
    </div>
    
    <router-link :to="`/games/edit/${game._id}`" class="bg-blue-600 text-white p-2 m-16">
      Edit
    </router-link>
  </div>
</template>

<script>
import GameService from '../../gameService'

export default {
  data () {
    return {
      game: null
    }
  },
  async created() {
    const id = this.$route.params.slug

    this.game = await GameService.getGame(id) 
  }
}
</script>

<style>

</style>