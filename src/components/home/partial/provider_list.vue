<template>
    <div class='flex flex-col rounded-lg shadow-xl overflow-hidden'>
      <div class='flex-shrink-0'>
        <img :src='this.$filters.getFirstMediaUrl(providers)' alt='' class='h-80 w-full object-cover' />
      </div>
      <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div class='flex-1'>
          <router-link :to='{name:"EProvider", params:{ id:providers.id }}' class='block mt-2'>
            <p class='text-xl font-semibold text-second-color-600'>
              {{ this.$filters.transString(providers.name) }}
            </p>
            <p class='mt-3 text-sm text-second-color-400 line-clamp-3'>
              {{ this.$filters.stripHtml(providers.description) }}
            </p>
          </router-link>
        </div>
        <div class='flex items-end justify-between'>
          <div class='h-6 flex'>
            <StarIcon v-for='i in Math.ceil(providers.rate)' :key='i' aria-hidden='true' class='w-5 h-5 text-yellow-400' />
            <StarIcon v-for='i in Math.floor(5 - providers.rate)' :key='i' aria-hidden='true' class='w-5 h-5 text-gray-300' />
          </div>
          <div class='flex flex-col pt-1 items-end  sm:pt-3'>
            <router-link :to='{name:"EProvider", params:{ id:providers.id }}'
                       class='inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                       type='button'>
            View Details
          </router-link>
            <!-- <div v-if='providers.discount_price' class='flex items-center min-w-0 text-sm text-gray-400'>
              <span class='text-xl font-bold line-through'>{{ this.$filters.formatPrice(eService.discount_price) }} </span>
              <span class='text-xs '> /{{ $t(eService['price_unit'] || '') }}</span>
            </div>
            <div class='h-6 flex items-center min-w-0 text-sm'>
              <span class='hidden sm:block text-xs text-second-color-400 mx-2'>{{ $t('Starts From') }}</span>
              <span class='text-xl font-bold text-main-color-600'>{{ this.$filters.formatPrice(eService.price) }} </span>
              <span class='text-xs text-main-color-600'> /{{ $t(eService['price_unit'] || '') }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { StarIcon } from '@heroicons/vue/solid'
  
  export default {
    components: {
      StarIcon,
    },
    props: ['providers'],
  }
  </script>
  