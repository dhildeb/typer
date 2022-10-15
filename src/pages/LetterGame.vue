<template>
  <h1>{{score}}</h1>
  <div id="typeField" v-for="letter in letters" :key="letter">
      <span :id="letter.char" class="char button-73" :style="'left: '+letter.width+'px; top: '+letter.height+'px;'">{{letter.char}}</span>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "@vue/runtime-core"
import { letterService } from '../services/LetterService'
import { useStore } from '../Store'
import $ from 'jquery'

export default {
  watch:{
    score(){
      if(this.score % 3 == 0){
        this.speed--
        clearInterval(this.speedInterval)
        this.speedInterval = setInterval(()=>{
          letterService.moveChars()
        }, this.speed)
      }
      if(this.score % 2 == 0){
        this.rate -= 10
        clearInterval(this.rateInterval)
        this.rateInterval = setInterval(()=>{
        letterService.setChar()
      }, this.rate)
      }
    }
  },
  setup() {
    const store = useStore()
    onMounted(()=>{
      state.rateInterval = setInterval(()=>{
        letterService.setChar()
      }, state.rate)
      state.speedInterval = setInterval(()=>{
        letterService.moveChars()
      }, state.speed)
      $(document).keypress(function(e) {
        let code = e.keyCode || e.which;
        let char = String.fromCharCode(code)
        let index = store.letters.findIndex(l => l.char == char)
        if(index >= 0 && store.game != 'game over'){
          store.letters.splice(index, 1)
          store.score++
        }else{
          letterService.setChar()
          letterService.setChar()
        }
      })
    })
    const state = reactive({
      letters: computed(()=> store.letters),
      score: computed(()=> store.score),
      speed: 100,
      rate: 2000,
      speedInterval: null,
      rateInterval: null
    })
    return state
  }
}
</script>

<style scoped lang="scss">
.char{
  font-size: xx-large;
  position: absolute;
}
h1{
  display: flex;
  justify-content: center;
  filter: blur(1px);
  transform: scale(3);
  top: 50vh;
  position: absolute;
  left: 50vw;
}
</style>
