<template>
<section>
    <GoogleMap api-key="AIzaSyAqyCV9gH5jiSpMJ_oon28uKDq_ZftLmKg" style="width: 100%; height: 450px" :center="mapInitial()" :zoom="15" >
        <Marker :options="{position: mapInitial()}" />
    </GoogleMap>
 
   
</section>
</template>

<script>
import axios from 'axios'
import maps from '../../plugins/maps';
import {
    GoogleMap,
    Marker
} from "vue3-google-map";
export default {
    name: 'Maps',
    components: {
        GoogleMap,
        Marker,
    },
    data() {
        return {
             center: {
                lat: 0,
                lng: 0
            }
        }
    },
    mounted() {
      this.mapcall();   
    },
    methods: {
        mapcall() {
            let response = ''
            let queryParameters = {
                'with': 'addresses',
            }
            let id = this.$route.params.id
            response = axios.get(`https://admin.yellowpageja.com/api/e_providers/${id}`, {
                params: queryParameters
            }).then(response => {
                console.log('Map response ', response)
                var lat = response.data.data.addresses[0].latitude;
                var lng = response.data.data.addresses[0].longitude;
                this.center.lat = Number(lat);
                this.center.lng = Number(lng);             
            })
        },
        mapInitial() {
          return {
            lat: this.center.lat,
            lng: this.center.lng
          }
        },
    }
}
</script>
