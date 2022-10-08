class LetterService {
    getRandomLetter() {
        let list = '1234567890-=qwertyuiop[]asdfghjkl;|\'zxcvbnm,./!@#$%^&*()_+{}:"<>?`~'
        return list[Math.floor(Math.random() * list.length)]
    }
}

export const letterService = new LetterService()