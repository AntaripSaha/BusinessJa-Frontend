<template>
    <section>
    <div v-if='getUser !== null' class='overflow-hidden p-8 bg-white rounded-lg shadow-lg'>
        <h2 class='text-xl font-bold text-second-color-600'>{{ $t('Add Reviews') }}</h2>
            <div class='mt-2 divide-y divide-gray-100'>
                <h1>{{getUser.name}}</h1>
                <h1>{{getUser.email}}</h1>
                <div class="form newtopic">
                    <vue3-star-ratings v-model="posts.rate" inactiveColor="#D1D5D9" controlBg="#ffff" />
                    <textarea name="review" v-model="posts.review" id="" cols="30" rows="5" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-main-color-500 focus:border-main-color-500 sm:text-sm"></textarea>
                    <button
                        class='mt-3 flex justify-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500' @click="saveRate">
                        {{ $t('Save') }}
                    </button>
                </div>
            </div>
        </div>
    <div v-else class='overflow-hidden p-8 bg-white rounded-lg shadow-lg'>
        <router-link :to='{ name: "Login" }'>
            <button
                class='mt-3 flex justify-center px-4 py-2 text-sm font-medium text-white rounded-md border border-transparent shadow-sm bg-main-color-600 hover:bg-main-color-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-color-500'
                type='button'>
                Login to give Review
            </button>
        </router-link>
        
        
    </div>
    </section>
  </template>
 
  <script> 

  import axios from 'axios'
  import { createNamespacedHelpers } from 'vuex'
  import vue3StarRatings from "vue3-star-ratings";
 
 
 
  const { mapState, mapGetters } = createNamespacedHelpers('user')
  export default {
    name: 'Review',
    components: {
       vue3StarRatings, 
    },
    data() {
        return{
            posts:{
                rate:null,
                review:null,
            }
        }
    },
    mounted() {
    //   this.getEProviderReviews(this.$route.params.id)
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters(['getUser']),
    },
    
    methods: {
      
      saveRate(){
        this.posts.api_token = this.getUser.api_token,
        this.posts.user_id = this.getUser.id,
        this.posts.e_provider_id = this.$route.params.id,
        axios.post('http://192.168.88.181:8000/api/e_provider_reviews', this.posts).then(res => {
            console.log(res)
        })
        
      }
    }
  
  }
  </script>
  
  