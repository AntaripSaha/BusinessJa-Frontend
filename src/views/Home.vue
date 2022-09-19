<template>
  <Slider />
  <FeaturedCategories />
  <!-- <RecommendedServices /> -->
  <FeaturedProvider />
  <SliderTwo />
  <NewestProvider />
</template>

<script>

import Slider from '../components/home/slider.vue'
import SliderTwo from '../components/home/slider_two.vue'
import FeaturedCategories from '../components/home/featured_categories.vue'
import RecommendedServices from '../components/home/recommended_services.vue'
import NewestProvider from '../components/home/NewestProvider.vue'
import FeaturedProvider from '../components/home/FeaturedProvider.vue'

export default {
  components: {
    Slider,
    SliderTwo,
    FeaturedCategories,
    NewestProvider,
    FeaturedProvider,
  },
}
</script>
