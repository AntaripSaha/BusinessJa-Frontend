<template>
  <div
    class='flex absolute custo-search inset-x-0 justify-between items-center mx-4 bg-white rounded-full shadow-2xl transform -translate-y-1/2 sm:mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3'>
    <input :placeholder='$t("Find Services Near You")'
           :value='keywords'
           class='px-6 w-full h-12 bg-white rounded-full border-none focus:outline-none focus:ring-0'
           type='text'
           @input='search'>
    <router-link :to='{name:"Search",params:{keywords:keywords}}' class='px-6 py-4 w-32 text-sm text-center text-white rounded-full w-42 bg-main-color-600'>
      {{ $t('Search') }}
    </router-link>
  </div>
</template>
<style>
  .custo-search{
    position: absolute;
    bottom: 0;
    z-index: 1;
}
@media screen and (min-width: 320px) and (max-width: 634px){
  .custo-search{
    position: absolute;
    bottom: -30%;
    z-index: 1;
}
}
@media screen and (min-width: 1500px){
    .custo-search{
      margin-bottom: -10% !important;
    }
  }
@media screen and (min-width: 1700px){
    .custo-search{
      margin-bottom: -10% !important;
    }
  }
@media screen and (min-width: 2000px){
    .custo-search{
      margin-bottom: -7% !important;
    }
  }
</style>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  computed: {
    ...mapState('eService', {
      keywords: state => state.keywords,
    }),
  },
  mounted() {
    this.updateKeywordsAction(undefined)
  },
  methods: {
    ...mapActions('eService', [
      'updateKeywordsAction',
    ]),
    search(e) {
      this.updateKeywordsAction(e.target.value)
    },
  },
}

</script>