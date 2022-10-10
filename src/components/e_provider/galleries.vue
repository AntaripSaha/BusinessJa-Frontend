<template>
  <section>
    <Loader v-if='eProviderGalleries.length === 0' height='h-96' />
    <div v-else class='rounded-lg bg-white overflow-hidden shadow-lg p-8'>
      <h2 class='text-xl font-bold text-second-color-600 mb-4 '>{{ $t('Galleries') }}</h2>
      <ul class='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8' role='list'>
        <photo-provider>
            <photo-consumer v-for="image in eProviderGalleries" :intro="this.$filters.stripHtml(image.description)" :key="image.id" :src="image.media[0].url">
              <img :src="image.media[0].thumb" class="w-full custom-img-height aspect-w aspect-h-8 rounded-lg object-cover">
            </photo-consumer>
        </photo-provider>
      </ul>
    </div>
  </section>
</template>

<script>
import Loader from '../partial/loader.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('eProvider')
export default {
  name: 'Galleries',
  components: {
    Loader,

  },
  mounted() {
    this.getEProviderGalleries(this.$route.params.id)
  },
  computed: {
    ...mapState(['eProviderGalleries']),
  },
  methods: {
    ...mapActions(['getEProviderGalleries']),
  },
}
</script>
<style>
  .custom-img-height{
    height: 130px;
    width: auto;
  }
</style>