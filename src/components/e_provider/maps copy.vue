<template>
  <section>
      <!-- <h1 onclick="address()">Map</h1> -->
      <PlaceSearch
        v-bind:ready="ready"
        placeholder="Enter a location"
        loading="Map is loading"
        style='width:50rem; height: 20rem;'
        v-bind:fallbackProcedure="fallbackProcedure"
        v-bind:zoom='17'
        v-bind:geolocation='this.address'
        v-bind:gps_timeout="3000"
        v-bind:address="this.address"
        @changed='mapcall'
        >
    </PlaceSearch>
  </section>
</template>

<script>
import Loader from '../partial/loader.vue'
import { createNamespacedHelpers } from 'vuex'
import axios from 'axios'

const { mapState, mapActions } = createNamespacedHelpers('eProvider')
export default {
  name: 'Maps',
  
  components: {
   },
   data() {
        return{
            maps:{
                rate:null,
                review:null,
            }
        }
    },
  mounted() {
    this.getEProvider(this.$route.params.id)
   },
  computed: {
    ...mapState(['eProvider']),
  },
  methods: {
    ...mapActions(['getEProvider']),

    mapcall(){
        let response = ''
        let queryParameters = {
                'with': 'addresses',
            }
        let id = this.$route.params.id
         response =  axios.get(`https://admin.yellowpageja.com/api/e_providers/${id}`, { params: queryParameters }).then(response => {
            console.log('Map response ', response )
          return response
        }) 
      },
      address(){
       var value = this.mapcall()
       var address = value.data.addresses[0].addresses
       return address
      //  var latitude = value.data.addresses[0].latitude
      //  var longitude = value.data.addresses[0].longitude
      }
  }
 
}
</script>