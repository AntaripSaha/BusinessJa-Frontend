<template>
  <div class='max-w-7xl mx-auto space-y-8'>
    <BookingsLoader v-if='bookings.length === 0' />
    <div v-for='booking in reviews' :key='booking.id' class='bg-white border-t border-gray-50 shadow-lg sm:rounded-lg'>
     </div>
    <div v-if='bookings.length > 0' class='flex w-full py-8'>
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
import { createNamespacedHelpers } from 'vuex'
import BookingsLoader from './partial/bookings_loader.vue'

const { mapState, mapActions } = createNamespacedHelpers('booking')

export default {
  name: 'BookingsList',
  components: {
    BookingsLoader,
  },
  computed: {
    ...mapState(['bookings']),
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