<template>
  <router-link :to="{ name: 'Category', params: { id: category.id }}" class='relative group bg-white rounded-lg hover:shadow-lg'>
    <div>
        <!-- <span :style="'background-color:'+category.color" class='rounded-lg inline-flex p-2 ring-4 ring-white'>
          <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)' aria-hidden='true' class='h-12 w-12 opacity-70'>
        </span> -->
        
        <img :alt='$filters.transString(category.name)' :src='$filters.getFirstMediaUrl(category)' aria-hidden='true' class='object-contain img-custom'>
    </div>
    <div class='mt-8'>
      <h3 class='text-md text-second-color-500 font-bold p-3 name'>
        {{ $filters.transString(category.name) }}
      </h3>
      <!-- <p class='mt-2 text-sm text-second-color-400'>
        {{ $filters.stripHtml($filters.transString(category.description)) }}
      </p> -->
    </div>
  </router-link>
</template>
<style>
  .name{
    margin-top: -20%;
    font-size: 12px;
    text-align: center;
  }
  .img-custom{
    height: 50px;
    width: auto;
    margin-left: 39%;
    padding-top: 4%;
    padding-bottom: 4%;
  }
</style>
<script>
export default {
  name: 'CategoryItem',
  props: ['category'],
}
</script>