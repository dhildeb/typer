<template>
<h1>{{score}}</h1>
  <div id="typeField" v-for="letter in letters" :key="letter">
      <span :id="letter.char" class="char" :style="'left: '+letter.width+'px; top: '+letter.height+'px;'">{{letter.char}}</span>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "@vue/runtime-core"
import { letterService } from '../services/LetterService'
import { AppState } from '../AppState'
import $ from 'jquery'

export default {
  setup() {
    onMounted(()=>{
      setInterval(()=>{
        letterService.setChar()
      }, 2000)
      setInterval(()=>{
        letterService.moveChars()
      }, 80)
      $(document).keypress(function(e) {
        let code = e.keyCode || e.which;
        let char = String.fromCharCode(code)
        let index = AppState.letters.findIndex(l => l.char == char)
        if(index >= 0){
          AppState.letters.splice(index, 1)
          AppState.score++
        }else{
          letterService.setChar()
          letterService.setChar()
        }
      })
    })
    const state = reactive({
      letters: computed(()=> AppState.letters),
      score: computed(()=> AppState.score)
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
}
</style>
