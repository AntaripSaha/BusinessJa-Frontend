<template>
    <div class='pt-16 mx-auto max-w-7xl lg:px-8 pt-6 mb-3 cus-margin' >
        <div class='flex justify-between items-center px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div class='flex-1 min-w-0'>
              <h2 class=' text-xl font-bold lg:text-4xl text-second-color-600'>
                Suppliers By Emirates
              </h2>
            </div>
          </div>  
      <swiper
      :slides-per-view="3"
      :loop="true"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
      }"
      :breakpoints="{
        '240': {
          slidesPerView: 1,
          spaceBetween: 0,
        }, 
        '1024': {
          slidesPerView: 3,
          spaceBetween: 0,
        }, 
        
      }"
      :modules="modules"
      >
        <swiper-slide  class='group items-start items-center  rounded-lg hover:shadow-lg'>
          <router-link :to="{ name: 'Home'}" >
            <button class="button-custom bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                <p class="pl-3 custom-text-button">
                    FUJAIRAH
                </p>
                
            </button>  
          </router-link>
        </swiper-slide>
        <swiper-slide  class='group items-start items-center rounded-lg hover:shadow-lg'>
          <router-link :to="{ name: 'Home'}" >
            <button class="button-custom bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                <p class="pl-3 custom-text-button">
                    RAS AL KHAIMAH
                </p>
                
            </button>  
          </router-link>
        </swiper-slide>
        <swiper-slide  class='group items-start items-center rounded-lg hover:shadow-lg'>
          <router-link :to="{ name: 'Home'}" >
            <button class="button-custom bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                <p class="pl-3 custom-text-button">
                    UMM ALL QUWAIN
                </p>

            </button>  
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
<style scoped>
.button-icon-custom{
  height: 30px;
}
.button-custom{
    width: 80%;
}
.custom-text-button{
    padding-left: 15%;
}
</style>