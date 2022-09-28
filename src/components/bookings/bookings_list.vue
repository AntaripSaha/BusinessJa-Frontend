<template>
  <div class='max-w-7xl mx-auto space-y-8'>
    <BookingsLoader v-if='reviews.length === 0' />
    <!-- <div v-for='review in reviews' :key='review.id' class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" v-if="review.has_media === true" :src='review.media' alt=''>
          <img class="h-48 w-full object-cover md:h-full md:w-48" v-else alt=''>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{review.e_provider_name}}</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Phone: {{review.e_provider_phone}}</a>
          <div class='w-1/2 h-4 bg-gray-50 rounded'>
              <div class='flex items-center mt-1'>
              <StarIcon v-for='rating in [0, 1, 2, 3, 4]' :key='rating'
                        :class="[review.rate > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden='true' />
            </div>
            </div>
          <p class="mt-2 text-slate-500">{{review.review}}</p>
        </div>
      </div>
    </div> -->

    <div v-for='review in reviews' :key='review.id' class='bg-white border-t border-gray-50 shadow-lg sm:rounded-lg'>
     <div class='flex-1 px-6 py-5 bg-white border-t border-gray-50 shadow-lg sm:rounded-lg '>
        <div class='w-72 h-8 bg-gray-50 rounded text-left text-black text-lg font-bold mobile-provider'>{{review.e_provider_name}}</div>
        <!-- <div class='my-8 h-px bg-gray-50 w-full'></div> -->
        <div class='flex my-5 space-x-4 rtl:space-x-reverse'>
          <div class='w-20 h-20 bg-gray-50 rounded'>
            <img v-if="review.has_media === true" :src='review.media' alt='' class='object-cover rounded' style="height:5rem;width:5rem;" />
            <img v-else alt='' class='object-cover rounded' style="height:5rem;width: 5rem;" />
          </div>
          <div class='flex-1 space-y-3'>
            <div class='w-3/5 h-7 bg-gray-50 rounded text-lg font-medium mobile-phone'>Phone: {{review.e_provider_phone}}</div>
            <div class='w-1/2 h-4 bg-gray-50 rounded'>
              <div class='flex items-center mt-1'>
              <StarIcon v-for='rating in [0, 1, 2, 3, 4]' :key='rating'
                        :class="[review.rate > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden='true' />
            </div>
            </div>
            <div class='w-full h-auto bg-gray-50 rounded text-sm font-normal text-left tracking-wide leading-relaxed'>{{review.review}}</div>
          </div>
        </div>
        <div class='flex justify-between'>
          <div> </div>
          <div class='rounded'>
            <router-link :to='{name:"EProvider", params:{ id:review.e_provider_id}}'
            class='inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
            >
            View
          </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if='reviews.length > 0' class='flex w-full py-8'>
      <button
        class='relative mx-auto px-6 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none'
        type='button'
        @click='this.loadMoreBookings()'>
        {{ $t('Load More...') }}
      </button>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'
import { createNamespacedHelpers } from 'vuex'
import BookingsLoader from './partial/bookings_loader.vue'

const { mapState, mapActions } = createNamespacedHelpers('booking')

export default {
  name: 'BookingsList',
  components: {
    BookingsLoader,
    StarIcon,
  },
  computed: {
    ...mapState(['reviews']),
  },

  methods: {
    ...mapActions(['getBookingsAction', 'incrementPage']),

    loadMoreBookings() {
      this.incrementPage()
      this.getBookingsAction()
    },
  },
}
</script>
<style>
 @media screen and (max-width: 600px) and (min-width: 200px){
    .mobile-phone{
      font-size: 14px !important;
      font-weight: 600 !important;
      width: auto !important;
    }
    .mobile-provider{
      font-size: 16px !important;
      text-align: center;
      font-weight: 700 !important;
    }
  }
</style>