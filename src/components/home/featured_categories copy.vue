<template>

  <div class='pt-16 bg-accent-color-50 cus-margin'>

    <div class='flex justify-between items-center px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div class='flex-1 min-w-0'>
        <h2 class='pb-4 text-xl font-bold lg:text-4xl text-second-color-600'>
          {{ $t('Categories') }}
        </h2>
        <p class='text-sm sm:text-base text-second-color-400<template>

<div class='pt-16 bg-accent-color-50 cus-margin'>

  <div class='flex justify-between items-center px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8'>
    <div class='flex-1 min-w-0'>
      <h2 class='pb-4 text-xl font-bold lg:text-4xl text-second-color-600'>
        {{ $t('Categories') }}
      </h2>
      <p class='text-sm sm:text-base text-second-color-400 sm:truncate'>
        <!-- {{ $t('Featured Categories Subtitle') }} -->
        All Categories
      </p>
    </div>
    <div class='flex mt-4 md:mt-0'>
      <router-link :to='{name:"Categories"}'
                   class='inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                   type='button'>
        {{ $t('View All') }}
      </router-link>
    </div>
  </div>
    <!-- <CategoryItem  /> -->
  <div class='mx-auto max-w-7xl lg:px-8' >
    <swiper
    :loop="true"
    :autoplay="{
      delay: 25000,
    }"
    :breakpoints="{
      '240': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '320': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      '1024': {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    }"
    :modules="modules"
    >
      <swiper-slide v-for='category in featuredCategories' :key='category.id' :category='category'>
        <router-link :to="{ name: 'Category', params: { id: category.id }}" >
          <div class="custom-height bg-white  rounded-lg ">
            <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)'  class='img-custom'>
            <div class='mt-7'>
              <h3 class='font-bold name'>
                {{ $filters.transString(category.name) }}
              </h3>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>

  </div>
    
</div>

</template>
<style>
.name{
  font-size: 12px;
  text-align: center;
}
.img-custom{
  height: 55px;
  width: auto;
  align-items: 30%;
  padding-top: 5%;
  padding-bottom: 0%;
}
@media screen and (min-width: 1500px){
  .cus-margin{
    margin-top: 8% !important;
  }
}
@media only screen and (min-width: 290px) and (max-width: 800px){
  .custom-height{
    height: 100px;
    width: 125px !important;
  }
}
@media only screen and (min-width: 799px){
  .custom-height{
    height: 6rem;
    width: 8rem !important;
  }
}
</style>
<script>

import { createNamespacedHelpers } from 'vuex'
import CategoryItem from './partial/category_item.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
const { mapState, mapActions } = createNamespacedHelpers('category')


export default {
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
mounted() {
  this.getFeaturedCategoriesAction()
},
computed: {
  ...mapState(['featuredCategories']),
},
methods: {
  ...mapActions(['getFeaturedCategoriesAction']),
},

}
</script> sm:truncate'>
          <!-- {{ $t('Featured Categories Subtitle') }} -->
          All Categories
        </p>
      </div>
      <div class='flex mt-4 md:mt-0'>
        <router-link :to='{name:"Categories"}'
                     class='inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                     type='button'>
          {{ $t('View All') }}
        </router-link>
      </div>
    </div>
      <!-- <CategoryItem  /> -->
    <div class='mx-auto max-w-7xl lg:px-8' >
      <swiper
      :slides-per-view="6"
      :loop="true"
      :centeredSlides="false"
      :autoplay="{
        delay: 25000,
      }"
      :breakpoints="{
        '240': {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        '320': {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 5,
        },
      }"
      :modules="modules"
      >
        <swiper-slide v-for='category in featuredCategories' :key='category.id' :category='category'>
          <router-link :to="{ name: 'Category', params: { id: category.id }}" >
            <div class="custom-height  rounded-lg ">
              <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)'  class='img-custom'>
              <div class='mt-7'>
                <h3 class='font-bold name'>
                  {{ $filters.transString(category.name) }}
                </h3>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>

    </div>
      
  </div>

</template>
<style>
  .name{
    font-size: 12px;
    text-align: center;
  }
  .img-custom{
    height: 55px;
    width: auto;
    align-items: 30%;
    padding-top: 5%;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 1500px){
    .cus-margin{
      margin-top: 8% !important;
    }
  }
  @media only screen and (min-width: 290px) and (max-width: 800px){
    .custom-height{
      height: 100px;
      width: 125px !important;
    }
  }
  @media only screen and (min-width: 799px){
    .custom-height{
      height: 6rem;
      width: 8rem !important;
    }
  }
</style>
<script>

import { createNamespacedHelpers } from 'vuex'
import CategoryItem from './partial/category_item.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";
const { mapState, mapActions } = createNamespacedHelpers('category')


export default {
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
  mounted() {
    this.getFeaturedCategoriesAction()
  },
  computed: {
    ...mapState(['featuredCategories']),
  },
  methods: {
    ...mapActions(['getFeaturedCategoriesAction']),
  },

}
</script>