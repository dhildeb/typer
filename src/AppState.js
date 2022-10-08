import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  letters: [],
  score: 0,
  speed: 0,
  numList: '1234567890',
  letterList: 'qwertyuiopasdfghjklzxcvbnm',
  specialCharList: ';-=[]|\',./!@#$%^&*()_+{}:"<>?`~'
})
