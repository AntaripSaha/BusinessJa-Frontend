<template>
  <div class='relative'>
    <div class=" ">
      <Loader v-if='slides.length === 0' height='h-72 sm:h-72' />
      <div v-else class='mx-auto max-w-7xl h-48 sm:h-72 sm:px-6 lg:px-8'>
      <swiper
      :slides-per-view="2"
      :loop="true"
      :spaceBetween="10"
      :centeredSlides="false"
      :autoplay="{
        delay: 25000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      >
        <swiper-slide  v-for='slide in slides' :key='slide' class='relative w-full shadow-xl sm:overflow-hidden'>
          <div class='absolute inset-0'>
            <img :src='this.$filters.getFirstMediaUrl(slide)'
                 alt='People working on laptops'
                 class='object-fit w-full h-72' />
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

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Navigation, Slide } from 'vue3-carousel'
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
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  mounted() {
    this.getSlidesAction()
  },
  computed: {
    ...mapState(['slides']),
  },
  methods: {
    ...mapActions(['getSlidesAction']),
  },
}
</script>