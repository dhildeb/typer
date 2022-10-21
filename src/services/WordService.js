import { useStore } from "../Store"
import $ from 'jquery'
class WordService {
  constructor() {
    setTimeout(() => {
      this.store = useStore()
    }, 100);
  }

  async getNewWord() {
    let wordLength = Math.round(this.store.score)
    let length = wordLength < 4 ? 4 : wordLength > 15 ? Math.round(Math.random() * 13) + 2 : wordLength
    let newWord = '????'

    await $.ajax({
      method: 'GET',
      url: 'https://random-word-api.herokuapp.com/word?length=' + length,
      success: function (res) {
        newWord = Array.isArray(res) ? res[0] : res
      }
    })
    this.getDefinition(newWord)
    return newWord
  }

  async getDefinition(word) {
    let wordDetails = { definition: 'No definiation', partOfSpeech: 'unknown' }
    await $.ajax({
      method: 'GET',
      url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
      success: function (res) {
        wordDetails = { definition: res[0].meanings[0].definitions[0].definition, partOfSpeech: res[0].meanings[0].partOfSpeech }
      }
    })
    this.store.wordDetails = wordDetails ?? 'Could not find definition'
  }
  async completeWord() {
    this.store.typedWord = ''
    this.store.increaseScore()
    this.store.word = await this.getNewWord()
    return true
  }

  endGame() {
    this.store.game = 'game over'
    if (JSON.parse(window.localStorage.getItem("wordScore")) < this.store.score) {
      window.localStorage.setItem("wordScore", this.store.score)
    }
  }
  moveWord() {
    if (this.store.wordDirection.y) {
      this.store.wordDirection.height++
    } else {
      this.store.wordDirection.height--
    }
    let height = this.store.wordDirection.height
    if (height > window.innerHeight - 50 || height < 1) {
      this.store.wordDirection.y = !this.store.wordDirection.y
    }

    if (this.store.wordDirection.x) {
      this.store.wordDirection.width++
    } else {
      this.store.wordDirection.width--
    }
    let width = this.store.wordDirection.width
    if (width > window.innerWidth - 100 || width < 1) {
      this.store.wordDirection.x = !this.store.wordDirection.x
    }
  }
}
export const wordService = new WordService()