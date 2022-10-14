<template>
  <div class="about">
    <button class="button-73" @click="startGame('Letter')">Play Letter Game</button>
    <button class="button-73" @click="startGame('Word')">Play Word Game</button>
  </div>
</template>

<script>
import { useStore } from "../Store"
import { router } from "../router"

export default {
  setup() {
    return {

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
</style>
