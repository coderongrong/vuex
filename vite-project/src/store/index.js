



import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 10
    },
    mutations: {
        add(state, data) {
            state.count += data
        }
    },
    actions: {
        asyncAdd({commit}, data) {
            setTimeout(() => {
                commit('add', data)
            }, 1000)
        }
    }
})