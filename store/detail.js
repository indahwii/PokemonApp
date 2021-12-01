export const state = () => ({
  detailProduct: {}
})

export const mutations = {
  setDetail (state, payload) {
    state.detailProduct = payload
  }
}

export const actions = {
  async getDetail ({ commit }, payload) {
    await this.$axios.get(`/pokemon/${payload}`).then((response) => {
      commit('setDetail', response.data)
    })
  }
}
