<template>
  <div>
    <p>editing</p>
    
    {{game}}
    <div class="flex flex-col">
      <div>
        <label for="" class="mr-4">Name</label>
        <input type="text" v-model="game.name" class="text-black w-64 self-center my-2">
      </div>
      <div>
        <label for="" class="mr-4">Genre</label>
        <input type="text" v-model="game.genre" class="text-black w-64 self-center my-2">
      </div>
      <button class="bg-blue-600 text-white p-2 m-4 w-64 self-center" @click="updateGame">Save Changes</button>
    </div>
  </div>
</template>

<script>
import GameService from '../../gameService'

export default {
  data () {
    return {
      game: {
        name: '',
        genre: '',
        _id: null
      },
      editName: '',
      editGenre: ''
    }
  },
  async created() {
    const id = this.$route.params.slug

    this.game = await GameService.getGame(id)
  },
  methods: {
    updateGame: function () {
      console.log('Updating Game...')

      GameService.editGame({
        id: this.game._id,
        data: {
          name: this.game.name,
          genre: this.game.genre
        }
      })
    }
  }
}
</script>

<style>

</style>