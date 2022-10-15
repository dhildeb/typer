import { useStore } from "../Store"

class LetterService {
  constructor() {
    setTimeout(() => {
      this.store = useStore()
    }, 100);
  }
  getRandomLetter() {
    let list = this.store.numList
    if (this.store.score > 10) {
      list += this.store.letterList
    }
    if (this.store.score > 50) {
      list += this.store.specialCharList
    }
    return list[Math.floor(Math.random() * list.length)]
  }
  setChar() {
    if (this.store.letters.length > 10) {
      this.endGame()
    }
    let char = this.getRandomLetter()
    this.store.letters.push({ char, height: Math.random() * (window.innerHeight - 50), width: Math.random() * (window.innerWidth - 50), direction: Math.floor(Math.random() * 4) })
  }

  endGame() {
    this.store.game = 'game over'
    if (JSON.parse(window.localStorage.getItem("letterScore")) < this.store.score) {
      window.localStorage.setItem("letterScore", this.store.score)
    }
  }
  moveChars() {
    this.store.letters.forEach(letter => {
      switch (letter.direction) {
        case 0:
          letter.height++
          if (letter.height >= window.innerHeight - 50) {
            letter.height = window.innerHeight - 50
            let options = [1, 2, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 1:
          letter.height--
          if (letter.height <= 50) {
            letter.height = 50
            let options = [0, 2, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 2:
          letter.width++
          if (letter.width >= window.innerWidth - 50) {
            letter.width = window.innerWidth - 50
            let options = [1, 0, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 3:
          letter.width--
          if (letter.width <= 50) {
            letter.width = 50
            let options = [1, 2, 0]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
      }
    })
  }
}

export const letterService = new LetterService()