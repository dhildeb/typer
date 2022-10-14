import { useStore } from "../Store"
import $ from 'jquery'
import { X_API_KEY, X_API_HOST } from '../env'
class WordService {
  store = useStore()
  async getNewWord() {
    let wordLength = Math.round(this.store.score)
    let length = wordLength < 4 ? 4 : wordLength > 20 ? Math.round(Math.random() * 19) + 1 : wordLength
    let newWord = '????'

    await $.ajax({
      method: 'GET',
      url: 'https://random-words5.p.rapidapi.com/getRandom?wordLength=' + length,
      headers: {
        'X-RapidAPI-Key': X_API_KEY,
        'X-RapidAPI-Host': X_API_HOST
      },
      success: function (res) {
        newWord = res
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
    this.store.wordDetails = wordDetails
  }
  async checkWordCompleted() {
    if (this.store.typedWord.length == this.store.word.length) {
      this.store.typedWord = ''
      this.store.increaseScore()
      this.store.word = await this.getNewWord()
    }
  }

  endGame() {
    this.store.game = 'game over'
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