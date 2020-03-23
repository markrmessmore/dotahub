export default{
    setHeroData(state, payload){
      state.heroData  = payload
      state.loading   = false
    },
    setItemData(state, payload){
      state.itemData  = payload
      state.loading   = false
    },
    setLoading(state, payload){
      state.loading = payload
    }
}