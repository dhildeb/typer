import { defineStore } from 'pinia'

export const useStore = defineStore('State', {
  state: () => {
    return {
      account: {},
      letters: [],
      word: 'Start',
      wordDetails: { definition: 'begin or be reckoned from a particular point in time or space.', partOfSpeech: 'verb' },
      typedWord: '',
      wordDirection: { height: 50, width: 50, y: true, x: true },
      score: 0,
      speed: 0,
      numList: '1234567890',
      letterList: 'qwertyuiopasdfghjklzxcvbnm',
      specialCharList: ';-=[]|\',./!@#$%^&*()_+{}:"<>?`~',
      game: 'start'
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increaseScore() {
      this.score++
    },
  },
})
