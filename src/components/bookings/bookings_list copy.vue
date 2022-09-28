<template>
  <div class='max-w-7xl mx-auto space-y-8'>
    <BookingsLoader v-if='reviews.length === 0' />
    <div v-for='booking in reviews' :key='booking.id' class='bg-white border-t border-gray-50 shadow-lg sm:rounded-lg'>
     <div class='flex-1 px-6 py-8 bg-white border-t border-gray-50 shadow-lg sm:rounded-lg'>
        <div class='w-48 h-6 bg-gray-50 rounded text-center text-black text-base font-bold'> Business ID: {{booking.e_provider_id}}</div>
        <div class='my-8 h-px bg-gray-50 w-full'></div>
        <div class='flex my-5 space-x-4 rtl:space-x-reverse'>
          <div class='w-20 h-20 bg-gray-50 rounded'></div>
          <div class='flex-1 space-y-3'>
            <div class='w-3/5 h-7 bg-gray-50 rounded text-lg font-medium '>{{booking.e_provider_name}}</div>
            <div class='w-1/2 h-4 bg-gray-50 rounded'>
              <div class='flex items-center mt-1'>
              <StarIcon v-for='rating in [0, 1, 2, 3, 4]' :key='rating'
                  :class="[booking.rate > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden='true' />
            </div>
            </div>
            <div class='w-full h-auto bg-gray-50 rounded text-sm font-normal text-left tracking-wide leading-relaxed'>{{booking.review}} shadow-sm text-base font-medium rounded-md text-gray-700 bg-white text-base font-medium rounded-md text-gray-700 bg-white text-base font-medium rounded-md text-gray-700 bg-white</div>
          </div>
        </div>
        <div class='flex justify-between'>
          <!-- <div>{{booking.e_provider_id}}</div>
          <div class='w-20 h-4 bg-gray-50 rounded'>
            <router-link :to='{name:"EProvider", params:{ id:booking.e_provider_id}}'
             >
              View
          </router-link>
            
          </div> -->
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