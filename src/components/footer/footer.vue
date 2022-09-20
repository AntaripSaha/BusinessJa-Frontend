<template>
  <footer aria-labelledby='footer-heading' class='bg-gray-100'>
    <h2 id='footer-heading' class='sr-only'>Footer</h2>
    <div class='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
      <div class='xl:grid xl:grid-cols-3 xl:gap-8'>
        <div class='space-y-4 xl:col-span-1'>
          <router-link as='div' class='cursor-pointer' to='/'>
            <img :alt='this.$settings["app_name"] == 0 ? "" : this.$settings["app_name"]' :src='this.$settings["app_logo"]'
                 class='w-auto h-12' />
          </router-link>
          <p class='text-base text-black-500'>
            {{ $t('Home Service Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services.')
            }}
          </p>
        </div>
        <div class='grid grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2'>
          <div class='mt-12 md:mt-0'>
            <h3 class='text-sm font-semibold tracking-wider text-black-400 uppercase'>
              {{ $t('Featured Categories') }}
            </h3>
            <ul class='mt-4 space-y-4'>
              <li v-for='category in this.featuredCategories' :key='category.id'>
                <router-link :to="{name:'Category',params:{id:category.id}}" class='text-base text-black-500 hover:text-second-color-600'>
                  {{ this.$filters.transString(category.name) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class='mt-12 md:mt-0'>
            <h3 class='text-sm font-semibold tracking-wider text-black-400 uppercase'>
              {{ $t('Help & Support') }}
            </h3>
            <ul class='mt-4 space-y-4'>
              <li v-for='category in this.faqCategories' :key='category.id'>
                <router-link :to="{name:'Help',params:{id:category.id}}" class='text-base text-black-500 hover:text-second-color-600'>
                  {{ this.$filters.transString(category.name) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class='mt-12 md:mt-0'>
            <h3 class='text-sm font-semibold tracking-wider text-black-400 uppercase'>
              {{ $t('Useful links') }}
            </h3>
            <ul class='mt-4 space-y-4'>
              <li v-for='page in this.customPages' :key='page.id'>
                <router-link :to="{name:'CustomPage',params:{id:page.id}}" class='text-base text-black-500 hover:text-second-color-600'>
                  {{ this.$filters.transString(page.title) }}
                </router-link>
              </li>
              <div style="display:flex !important;" class="social-icon" >
                <a href='https://facebook.com' target="_blank">
                 <img :src="'images/facebook.png'"  class='ml-1 mr-1 mx-auto h-10 w-auto '>
                </a>
                <a href='https://twitter.com' target="_blank">
                 <img :src="'images/twitter.png'"  class='ml-1 mr-1 mx-auto h-10 w-auto'>
                </a>
                <a href='https://youtube.com' target="_blank">
                 <img :src="'images/youtube.png'"  class='ml-1 mr-1 mx-auto h-10 w-auto'>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      
      <div class='pt-8 mt-12 border-t border-black-200'>
        <p class='text-base text-black-400 xl:text-center'>
          {{ $t('© 2022 Easital Technologies Ltd. All rights reserved.') }}
        </p>
      </div>
    </div>
  </footer>
</template>
<style>
@media screen and (max-width: 600px) {
  .social-icon {
    display: block;
    margin-left: -25px;
    height: 35px;
  }
}
</style>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HSFooter',
  mounted() {
    this.getFeaturedCategoriesAction()
    this.getCustomPagesAction()
    this.getCategoriesAction()
  },
  computed: {
    ...mapState('category', {
      featuredCategories: state => state.featuredCategories.slice(0, 3),
    }),
    ...mapState('customPage', {
      customPages: state => state.customPages.slice(0, 3),
    }),
    ...mapState('faq', {
      faqCategories: state => state.categories.slice(0, 3),
    }),
  },
  methods: {
    ...mapActions('category', ['getFeaturedCategoriesAction']),
    ...mapActions('customPage', ['getCustomPagesAction']),
    ...mapActions('faq', ['getCategoriesAction']),
  },
}
</script>