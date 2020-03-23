import Vue from 'vue'
import Vuex from 'vuex'

//STORE BROKEN OUT
import actions    from './actions.js'
import getters    from './getters.js'
import mutations  from './mutations.js'
import state      from './state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state     : state,
  mutations : mutations,
  actions   : actions,
  getters   : getters
})
