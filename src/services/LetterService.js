import { AppState } from "../AppState"

class LetterService {
  getRandomLetter() {
    let list = AppState.numList
    if (AppState.score > 10) {
      list += AppState.letterList
    }
    if (AppState.score > 50) {
      list += AppState.specialCharList
    }
    return list[Math.floor(Math.random() * list.length)]
  }
  setChar() {
    let char = this.getRandomLetter()
    AppState.letters.push({ char, height: Math.random() * window.innerHeight, width: Math.random() * window.innerWidth, direction: Math.floor(Math.random() * 4) })
  }
  moveChars() {
    AppState.letters.forEach(letter => {
      switch (letter.direction) {
        case 0:
          letter.height++
          if (letter.height >= window.innerHeight) {
            letter.height = window.innerHeight - 10
            let options = [1, 2, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 1:
          letter.height--
          if (letter.height <= 0) {
            letter.height = 10
            let options = [0, 2, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 2:
          letter.width++
          if (letter.width >= window.innerWidth) {
            letter.width = window.innerWidth - 10
            let options = [1, 0, 3]
            letter.direction = options[Math.floor(Math.random() * 3)]
          }
          return
          break
        case 3:
          letter.width--
          if (letter.height <= 0) {
            letter.width = 10
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