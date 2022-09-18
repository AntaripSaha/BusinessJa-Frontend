<template>
  <Heading :category=category[0] />

  <div class='bg-white'>
    <div
      class='my-14 max-w-3xl mx-auto grid grid-cols-1 gap-10 px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4'>
      <div class='lg:col-span-4'>
        <EServicesGrid :eServices='eServicesOfCategory' />
        
        <div v-if='eServicesOfCategory.length > 0' class='flex w-full py-12'>
          <button
            class='relative mx-auto px-6 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none'
            type='button'
            @click='this.loadMoreEService()'>
            {{ $t('Load More...') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '../components/category/heading.vue'
import GeneralFilter from '../components/category/general_filter.vue'
import EServicesGrid from '../components/category/e_services_grid.vue'
import PriceFilter from '../components/category/price_filter.vue'
import { mapState, mapActions } from 'vuex'
import { FILTER_AVAILABILITY, FILTER_FEATURED, FILTER_POPULAR, FILTER_RATING } from '../utils/const'

export default {
  name: 'Search',
  components: {
    Heading,
    EServicesGrid,
    GeneralFilter,
    PriceFilter,
  },
  watch: {
    $route() {
      this.resetPagination()
      this.loadEServices()
    },
  },
  mounted() {
    this.resetPagination()
    this.loadEServices()
    this.loadCategories(this.$route.params.id)
    console.log('route  ',this.$route.params.keywords)
  },

  // computed: {
  //   ...mapState('eProvider', {
  //     eServicesOfCategory: state => state.featuredProvidersList,
  //   }),
  // },
  computed: {
    ...mapState('eService', {
      eServicesOfCategory: state => state.eServicesOfCategory,
    }),
    ...mapState('category', {
      category: state => state.category,
    }),
  },
  methods: {
    ...mapActions('eService', ['resetPagination', 'incrementPage', 'getSearchCategoriesServicesAction']),
    ...mapActions('category', ['getCategoryName']),
    loadEServices() {
      this.getSearchCategoriesServicesAction({ keywords: this.$route.params.keywords, catId: this.$route.params.id})
    },
    loadCategories(){
      this.getCategoryName({ catId: this.$route.params.id})
    },
    loadMoreEService() {
      this.incrementPage()
      this.loadEServices()
    },
  },
}
</script>
