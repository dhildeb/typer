<template>
  <div id="typeField">
    <span v-for="letter in letters" :key="letter">
      {{letter}}
    </span>
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
        AppState.letters.push(letterService.getRandomLetter())
      }, 1000)
      $(document).keypress(function(e) {
        let code = e.keyCode || e.which;
        let char = String.fromCharCode(code)
        let index = AppState.letters.indexOf(char)
        console.log(index)
        if(index >= 0){
          AppState.letters.splice(index, 1)
        }else{
          AppState.letters.push(letterService.getRandomLetter())
          AppState.letters.push(letterService.getRandomLetter())
        }
      })
    })
    const state = reactive({
      letters: computed(()=> AppState.letters)
    })
    return state
  }
}
</script>

<style scoped lang="scss">

</style>
