import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: ''
  },
  mutations: {
    setUserName (state, userName) {
      state.userName = userName
    }
  },
  // 获取用户名称
  getters: {
    getUserName: state => state.userName
  },
  actions: {
  },
  modules: {
  }
})
