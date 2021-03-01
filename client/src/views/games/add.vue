<template>
  <div>
    <p>Add a new game</p>

    <div class="m-2">
      <label for="">Name</label>
      <input type="text" v-model="name" class="rounded ml-2 text-black">
    </div>
    <div class="m-2">
      <label for="">Genre</label>
      <input type="text" v-model="genre" class="rounded ml-2 text-black">
    </div>

    <button class="bg-blue-600 p-2 rounded shadow" @click="addNewGame()">Add Game</button>
  </div>
</template>

<script>
import GameService from '../../gameService'

export default {
  data () {
    return {
      name: '',
      genre: ''
    }
  },
  methods: {
    isInputFilled: function () {
      return this.name != '' && this.genre != '' ? true : false
    },
    addNewGame: function () {
      if(this.isInputFilled()){
        GameService.createGame({
          name: this.name,
          genre: this.genre
        })
      }else{
        console.log('Inputs not filled')
      }
    }
  }
}
</script>

<style>

</style>