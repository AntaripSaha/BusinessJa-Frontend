<template>
  <section>
    <Loader v-if='eProvider?.phone_number === undefined' height='h-48' />
    <div v-else class='overflow-hidden p-8 bg-white rounded-lg shadow-lg'>
      <h2 class='text-xl font-bold text-second-color-600'>{{ $t('Contact us') }}</h2>
      <p class='text-sm text-gray-500 line-clamp-3'>
        {{ $t('If you have any question!') }}
      </p>
      <div class='flex flex-col space-y-2 mt-6'>
        <button v-if='eProvider?.phone_number !== undefined'
                class='inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                type='button'>
          <img :src="'images/phone.png'" class='h-7 w-auto'>
          <span>{{ eProvider?.phone_number }}</span>
        </button>
        <button v-if='eProvider?.mobile_number !== undefined'
                class='inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                type='button'>
          <img :src="'images/whatsapp.png'" class='h-7 w-auto'>
          <span>{{ eProvider?.mobile_number }}</span>
        </button>
        <a :href="eProvider.facebook" target="_blank" class='inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-600 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'>
          <img :src="'images/facebook.png'" class='h-7 w-auto'>
          <span>{{ eProvider.name.en }}</span>
        </a>
        <a :href="eProvider.twitter" target="_blank" class='inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-600 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'>
          <img :src="'images/twitter.png'" class='h-7 w-auto'>
          <span>{{ eProvider.name.en }}</span>
        </a>
        <a :href="eProvider.youtube" target="_blank" class='inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-600 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'>
          <img :src="'images/youtube.png'" class='h-7 w-auto'>
          <span>{{ eProvider.name.en }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from '../partial/loader.vue'
import { DeviceMobileIcon, PhoneIcon } from '@heroicons/vue/outline'

export default {
  name: 'Contact',
  components: {
    PhoneIcon, DeviceMobileIcon, Loader,
  },
  props: ['eProvider'],
}
</script>