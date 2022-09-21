<template>
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
        <swiper-slide  >
          <router-link :to="{ name: 'Category', params: { id: category.id }}" class='relative group bg-white rounded-lg hover:shadow-lg'>
            <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)' aria-hidden='true' class='object-contain img-custom'>
            <div class='mt-8'>
              <h3 class='text-md text-second-color-500 font-bold p-3 name'>
                {{ $filters.transString(category.name) }}
              </h3>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
  
</template>
<style>
  .name{
    margin-top: -20%;
    font-size: 12px;
    text-align: center;
  }
  .img-custom{
    height: 50px;
    width: auto;
    margin-left: 39%;
    padding-top: 4%;
    padding-bottom: 4%;
  }
</style>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
export default {
  name: 'CategoryItem',
  props: ['category'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },

}
</script>