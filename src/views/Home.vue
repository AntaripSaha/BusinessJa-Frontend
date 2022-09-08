<template>
  <Slider />
  <FeaturedCategories />
  <!-- <RecommendedServices /> -->
  <NewestProvider />
  <FeaturedProvider />
</template>

<script>

import Slider from '../components/home/slider.vue'
import FeaturedCategories from '../components/home/featured_categories.vue'
import RecommendedServices from '../components/home/recommended_services.vue'
import NewestProvider from '../components/home/NewestProvider.vue'
import FeaturedProvider from '../components/home/FeaturedProvider.vue'

export default {
  components: {
    Slider,
    FeaturedCategories,
    NewestProvider,
    FeaturedProvider,
  },
}
</script>
