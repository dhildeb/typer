/* eslint-disable */
<template>
  <div class="about">
    <div class="d-flex">
      <button class="button-73" @click="startGame('Letter')">Play Letter Game</button>
      <span class="highscore" v-if="lettersHighscore > 0">HighScore: {{lettersHighscore}}</span>
    </div>
    <div class="d-flex">
      <button class="button-73" @click="startGame('Word')">Play Word Game</button>
      <span class="highscore" v-if="wordsHighscore > 0">HighScore: {{wordsHighscore}}</span>
    </div>
  </div>
</template>

<script>
import { router } from "../router"
import { useStore } from "../Store"

export default {
  setup() {
    return {
      lettersHighscore: JSON.parse(window.localStorage.getItem('letterScore')),
      wordsHighscore: JSON.parse(window.localStorage.getItem('wordScore'))
    }
  },
  methods:{
    startGame(name){
      const store = useStore()
      store.game = 'start'
      store.letters = []
      store.score = 0
      router.push({name: name+'Game'})
    }
  }
}
</script>

<style scoped>
.about{
  margin-top: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.button-73{
  margin: 15px;
}
.d-flex{
  display: flex;
  flex-direction: column;
}
.highscore{
  font-size: x-large;
  color: silver;
  text-align: center;
}
</style>
