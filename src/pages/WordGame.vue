<template>
<router-link to="/" class="back">&#8592;</router-link>
  <p class="definition">{{wordDetails.definition}} -{{wordDetails.partOfSpeech}}</p>
  <div class="about text-center">
    <div class="word button-73" :style="'left: '+wordDirection.width+'px; top: '+wordDirection.height+'px;'">
      <span v-for="(char, index) in word" :key="index" :class="typedWord.length > index ? 'typed' : ''">{{char}}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import $ from 'jquery'
import { useStore } from '../Store'
import { wordService } from '../services/WordService'

export default {
  setup() {
    const store = useStore()
    onMounted(()=>{
      $(document).keypress(function(e) {
        let code = e.keyCode || e.which;
        let char = String.fromCharCode(code)
        checkLetterTyped(char)
      })
      state.speedInterval = setInterval(()=>{
        wordService.moveWord()
      }, state.speed)
    })
    const state = reactive({
      word: computed(()=> store.word),
      typedWord: computed(()=> store.typedWord),
      wordLength: computed(()=> store.score),
      wordDetails: computed(()=> store.wordDetails),
      wordDirection: computed(()=> store.wordDirection),
      speedInterval: '',
      speed: 10
    })
    function checkLetterTyped(char){
      let neededChar = state.word[state.typedWord.length]
      if(neededChar == char){
        store.typedWord += char
      }else{
        store.typedWord = ''
      }
      wordService.checkWordCompleted()
    }

    return state
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.typed{
  color:chartreuse
}
.word{
  font-size: xx-large;
  position: absolute;
}
.definition{
  top: 50vh;
  position: absolute;
  font-size: xxx-large;
  padding-left: 5vw;
  padding-right: 5vw;
  color: silver;
}
.back{
  position: absolute;
  right: 1vw;
  color: silver;
  padding: 10px;
  font-size: xx-large;
}
</style>
