export default{
    setHeroData({commit}, payload){
      commit('setLoading', true)
      commit('setHeroData', payload)
    },
    setItemData({commit}, payload){
      commit('setLoading', true)
      commit('setItemData', payload)
    },
    setLoading({commit}, payload){
      commit('setLoading', payload)
    }
}