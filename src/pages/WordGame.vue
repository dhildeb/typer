<template>
<div class="timer" :style="'width: '+(timer/30000)*100+'vw'"></div>
<!-- <router-link to="/" class="back">&#8592;</router-link> -->
  <h1>{{score}}</h1>
  <p class="definition">{{wordDetails.definition}} -{{wordDetails.partOfSpeech}}</p>
  <div class="word text-center js-explode" :style="'left: '+wordDirection.width+'px; top: '+wordDirection.height+'px;'">
    <div id="wordBtn" class="word button-73">
      <span v-for="(char, index) in word" :key="index" :class="typedWord.length > index ? 'typed' : ''">{{char}}</span>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue'
import $ from 'jquery'
import { useStore } from '../Store'
import { wordService } from '../services/WordService'
import { explodeAnimation } from '../utils/explodeAnimation'
export default {
  watch: {
    timer(){
      if(this.timer <= 0){
        clearInterval(this.timerInterval)
        wordService.endGame()
      }
    }
  },
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
    onBeforeUnmount(()=>{
      clearInterval(state.speedInterval)
      $(document).unbind("keypress")
      store.typedWord = ''
    })
    const state = reactive({
      word: computed(()=> store.word),
      typedWord: computed(()=> store.typedWord),
      wordLength: computed(()=> store.score),
      wordDetails: computed(()=> store.wordDetails),
      wordDirection: computed(()=> store.wordDirection),
      score: computed(()=> store.score),
      speedInterval: '',
      timerInterval: '',
      timer: 30000,
      speed: 10
    })
    function setTimer(){
      state.timerInterval = setInterval(()=>{
        state.timer -= 50
      }, 50)
    }
    async function checkLetterTyped(char){
      let neededChar = state.word[state.typedWord.length]
      if(neededChar == char){
        store.typedWord += char
      }else{
        store.typedWord = ''
      }
      if(store.typedWord.length == store.word.length){
        if(store.score == 0){
          setTimer()
        }else{
          state.timer += store.word.length*100
        }
        if (store.typedWord.length == store.word.length) {
          if(store.score > 0){
            clearInterval(state.timerInterval)
          }
          $('#wordBtn').addClass('hidden')
          explodeAnimation(store.wordDirection.width, store.wordDirection.height)
          if(await wordService.completeWord()){
            if(store.score > 1){
              setTimer()
            }
            $('#wordBtn').removeClass('hidden')
          }
        }
      }
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
.timer{
  background-color: silver;
  height: 50px;
}
h1{
  display: flex;
  justify-content: center;
  filter: blur(1px);
  transform: scale(3);
  top: 25vh;
  position: absolute;
  left: 50vw;
}
.hidden{
  display: none;
}
</style>
