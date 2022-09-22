<template>
  <div class='mx-auto max-w-7xl lg:px-8'>
      <swiper
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
        '1500': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        
      }"
      :modules="modules"
      >
        <swiper-slide v-for='slide in slider_two' :key='slide'>
            <img :src='this.$filters.getFirstMediaUrl(slide)' class='rounded-lg h-72' />
        </swiper-slide>
      </swiper>
   </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from "swiper";
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('sliderTwo')

export default {
  name: 'SliderTwo',
  components: {
     Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Autoplay],
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