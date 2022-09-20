<template>
  <div class='relative'>
    <div class=" ">
      <Loader v-if='slider_two.length === 0' height='h-72 sm:h-72' />
      <div v-if='slider_two.length' class='mx-auto max-w-7xl h-48 sm:h-72 sm:px-6 lg:px-8'>
      <swiper
      :slides-per-view="2"
      :loop="true"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
      }"
      :breakpoints="{
        '240': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }"
      :modules="modules"
      >
        <swiper-slide  v-for='slide in slider_two' :key='slide' class='relative w-full shadow-xl sm:overflow-hidden'>
          <div class='absolute inset-0'>
            <img :src='this.$filters.getFirstMediaUrl(slide)'
                 alt='People working on laptops'
                 class='object-fit w-full h-72 rounded-lg' />
            <div class='absolute inset-0' />
          </div>
          <div class='flex relative items-center px-6 w-full h-72 sm:px-10 sm:h-72 ml-5'>
            
          </div>
        </swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>
<style>
  .carousel__prev{
    display: none !important;
  }
  .carousel__next{
    display: none !important;
  }
@media (min-width: 640px) {
  .carousel .carousel__viewport {
    border-radius: 1rem;
  }
}
</style>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { createNamespacedHelpers } from 'vuex'
import Loader from '../partial/loader.vue'
import { Autoplay, Pagination, Navigation } from "swiper";
const { mapState, mapActions } = createNamespacedHelpers('sliderTwo')

export default {
  name: 'SliderTwo',
  components: {
    Loader,
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  mounted() {
    this.getSlidesAction()
  },
  computed: {
    ...mapState(['slider_two']),
  },
  methods: {
    ...mapActions(['getSlidesAction']),
  },
}
</script>