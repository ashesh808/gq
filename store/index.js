import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      keyword: '',
      response: []
    }),
    mutations: {
      searchResponse(state, payload) {
        state.response = payload;
        state.response.push(payload);
      },
      getters: {
          getresponse(state) {
              return state.response;
          }
      }

    }
  })
}

export default createStore