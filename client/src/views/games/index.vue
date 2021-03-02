<template>
  <div class="home flex justify-center">
    <div>
      <h1>-- Supported Games --</h1>
      <div class="flex flex-wrap">
        <div v-for="game in games" :key="game.id" class="shadow p-2 mx-8 my-2">
          <router-link :to="`games/${game._id}`">
            <p>{{game.name}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameService from '../../gameService'

export default {
  name: 'Home',
  data () {
    return {
      games: []
    }
  },
  async mounted() {
    try {
      this.games = await GameService.getGames()
    } catch(err) {
      console.error(err)
    }
  }
}
</script>