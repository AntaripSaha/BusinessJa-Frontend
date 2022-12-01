<template>
    <div class='pt-6 bg-accent-color-50 cus-margin'>

        <div class='flex justify-between items-center px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div class='flex-1 min-w-0'>
            <h2 class=' text-xl font-bold lg:text-4xl text-second-color-600'>
              Suppliers By Emirates
            </h2>
          </div>
        </div>

        <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper>
        <!-- <div class="flex mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            
            <div class="row-span-3 ">
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                    <p class="pl-3">
                        FUJAIRAH
                    </p>
                    
                </button>
            </div>
      
            <div class="row-span-3 pl-3 pr-3">
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                    <p class="pl-3">
                        RAS AL KHAIMAH
                    </p>
                    
                </button>
            </div>
            <div class="row-span-3 ">
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full  bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                    <img :src="'images/burj.png'" alt="" srcset="" class="button-icon-custom">
                    <p class="pl-3">
                        UMM ALL QUWAIN
                    </p>

                </button>
            </div>
        
            
          </div> -->


    
        

          <!-- <CategoryItem  /> -->


      
      </div>
  
  </template>

  <script>
  
  import { createNamespacedHelpers } from 'vuex'
  import CategoryItem from './partial/category_item.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { Autoplay, Pagination, Navigation } from "swiper";
  const { mapState, mapActions } = createNamespacedHelpers('category')
  
  
  export default {
    name: "Suppliers",
    components: {
      Swiper,
      SwiperSlide,
    },

  }
  </script>
  <style scoped>
  .button-icon-custom{
    height: 30px;
  }
</style>