import { getCurrentInstance as instance } from 'vue'

export default {
    namespaced: true,
    state: () => ({
        eProviderSearch: {},
        eProviderSearchAll: [],
    }),
    mutations: {
        UPDATE_E_PROVIDER(state, eProvider) {
            state.eProviderSearchAll = eProvider
        },
    },
    actions: {
        getEProviderList({ commit }) {
            commit('UPDATE_PROVIDER_LIST', {})
            let queryParameters = {
                'only': 'eProvider;id;name;price;discount_price;price_unit;has_media;media;total_reviews;rate;description',
                'limit': '8',
            }
            this.$axios.get(`e_providers`, { params: queryParameters }).then(response => {
                const providers = response.data.data
                console.log(response.data.data)
                commit('UPDATE_PROVIDER_LIST', providers)
            })
        },
        getSearchEServicesAction({ commit }, { keywords = '' }) {
            if (this.state.eService.page === 1)
                commit('UPDATE_E_SERVICES_OF_CATEGORY', [])
            let queryParameters = {
                'with': 'eProvider;eProvider.addresses;categories',
                'search': `name:${keywords}`,
                'searchFields': 'name:like',
                'searchJoin': 'and',
                'limit': '4',
                'offset': ((this.state.eService.page - 1) * 4).toString(),
            }
            this.$axios.get('e_services', { params: queryParameters }).then(response => {
                console.log(response.data.data)
                if (response.status === 200 && response.data?.success) {
                    const eServices = response.data.data?.map(element => swipePrices(element))
                    commit('PUSH_E_SERVICES_OF_CATEGORY', eServices)
                }
            })
        },
    },
}
