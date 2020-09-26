export default {
  ADD_TO_CART({commit}, product) {
    commit('ADD_TO_CART', product);
  },
  UPPER({commit}, state, index ) {
    commit('UPPER', state, index);
  },
  UNDO({commit}, state, index) {
    commit('UNDO', state, index)
  },
  DELETE_FROM_CART({commit}, state, index) {
    commit('DELETE_FROM_CART', state, index)
  }
}
