<template>
<section>
    <GoogleMap api-key="AIzaSyAqyCV9gH5jiSpMJ_oon28uKDq_ZftLmKg" style="width: 100%; height: 450px" :center="center" :zoom="15" >
        <Marker :options="{position: center}" />
    </GoogleMap>
    getLngLat{{center}}
 
   
</section>
</template>

<script>
import {
    createNamespacedHelpers
} from 'vuex'
import axios from 'axios'
import {
    GoogleMap,
    Marker
} from "vue3-google-map";
const {
    mapState,
    mapActions
} = createNamespacedHelpers('eProvider')
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
    // setup() {
    //     const center = {
    //         lat: 18.0192352,
    //         lng:-76.7935443
    //     };
    //     return {
    //         center
    //     };
    // },
    mounted() {
        this.getEProvider(this.$route.params.id);
        this.mapcall()
    },
    computed: {
        ...mapState(['eProvider']),
        getLngLat() {
            return this.center
        }
    },
    methods: {
        ...mapActions(['getEProvider']),
       
        
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
                this.center.lat = Number(lat)
                this.center.lng = Number(lng)
                console.log('this.center ', this.center)
                vm.$forceUpdate();
                //or in file components
                this.$forceUpdate();
                // return {lat, lng}
            })

        },
    }
}
</script>
