<template>

  <div class='pt-16 bg-accent-color-50 cus-margin'>

    <div class='flex justify-between items-center px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div class='flex-1 min-w-0'>
        <h2 class='pb-4 text-xl font-bold lg:text-4xl text-second-color-600'>
          {{ $t('Categories') }}
        </h2>
        <p class='text-sm sm:text-base text-second-color-400 sm:truncate'>
          {{ $t('Featured Categories Subtitle') }}
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
    <div class='mx-auto max-w-7xl custom-height relative' >
      <swiper
      :slides-per-view="6"
      :loop="true"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
      }"
      :breakpoints="{
        '240': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }"
      :modules="modules"
      >
        <swiper-slide v-for='category in featuredCategories' :key='category.id' :category='category' class='group bg-white rounded-lg hover:shadow-lg'>
          <router-link :to="{ name: 'Category', params: { id: category.id }}" >
            <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)' aria-hidden='true' class='object-contain img-custom'>
            <div class='mt-8'>
              <h3 class='text-md text-second-color-500 font-bold p-3 name'>
                {{ $filters.transString(category.name) }}
              </h3>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>

    </div>
      
  </div>

</template>
<style>
  .custom-height{
    height: 5rem;
    width: 75rem;
  }
  .name{
    margin-top: -20%;
    font-size: 10px;
    text-align: center;
  }
  .img-custom{
    height: 41px;
    width: auto;
    margin-left: 40%;
    padding-top: 3%;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 1500px){
    .cus-margin{
      margin-top: 5% !important;
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