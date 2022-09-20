import { getCurrentInstance as instance } from 'vue'

export default {
    namespaced: true,
    state: () => ({
        slider_two: [],
    }),

    getters: {
        //
    },

    mutations: {
        UPDATE_SLIDES(state, slider_two) {
            state.slider_two = slider_two
        },
    },

    actions: {
        getSlidesAction: function({ commit }) {
            this.$axios.get('slides_center')
                .then(response => {
                    commit('UPDATE_SLIDES', response.data.data)
                })
        },
    },
}
