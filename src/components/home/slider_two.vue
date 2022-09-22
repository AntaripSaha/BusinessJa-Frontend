<template>
    <div class='mx-auto max-w-7xl lg:px-8' >
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
        '1024': {
          slidesPerView: 2,
          spaceBetween: 10,
        }, 
        
      }"
      :modules="modules"
      >
        <swiper-slide v-for='category in slider_two' :key='category.id' :category='category' class='group bg-white rounded-lg hover:shadow-lg'>
          <router-link :to="{ name: 'Home'}" >
            <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)' aria-hidden='true' class='rounded-lg h-72'>
          </router-link>
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