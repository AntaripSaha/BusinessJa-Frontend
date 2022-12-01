<template>
  <Slider />
  <!-- <Suppliers /> -->

  <FeaturedCategories />
  <!-- <RecommendedServices /> -->
  <FeaturedProvider />
  <SliderTwo />
  <NewestProvider />
  <RealEstateProvider />
</template>

<script>

import Slider from '../components/home/slider.vue'
import SliderTwo from '../components/home/slider_two.vue'
import FeaturedCategories from '../components/home/featured_categories.vue'
import RecommendedServices from '../components/home/recommended_services.vue'
import NewestProvider from '../components/home/NewestProvider.vue'
import FeaturedProvider from '../components/home/FeaturedProvider.vue'
import RealEstateProvider from '../components/home/RealEstateProvider.vue'
import Suppliers from '../components/home/Suppliers.vue'

export default {
  components: {
    Slider,
    SliderTwo,
    FeaturedCategories,
    NewestProvider,
    FeaturedProvider,
    RealEstateProvider,
    // Suppliers,
  },
}
</script>
