export const state = () => ({
  product: []
})

export const mutations = {
  setFavorite (state, data) {
    state.product.push(data)
  }
}

export const actions = {
  triggerFunction (context, payload) {
    context.commit('setFavorite', payload)
  }
}
