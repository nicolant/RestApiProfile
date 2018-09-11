import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import state from '@/store/state'
import * as mutations from '@/store/mutations'
import * as actions from '@/store/actions'
import * as getters from '@/store/getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: sessionStorage
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
