<template>
  <div class="jastify-center w-full pl-3 p-8 text-left pt-12 border-0">
    <div class="w-full m-1 sm:mx-8">
      <button class=" text-violet-400 text-3xl sm:text-5xl font-bold">Your Favorites</button>
      <img src="images/about-img-2.png" class="float-right sm:mr-12">
    </div>
    <div class="sm:ml-8">
      <div v-for="p in products" v-bind:key="p.no" class="w-full sm:w-1/5 m-2 inline-block">
        <Card :product="p" />
      </div>
    </div>
  </div>
</template>
  
<script>
import Card from '../../components/Card.vue'
export default {
  name: 'favorite-page',
  components: {
    Card
  },
  data() {
    return {
      products: [
        {
          no: 1, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 2, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 3, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 4, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 5, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 6, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 7, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 8, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        },
        {
          no: 9, name: 'Iphone XS Max', recommend: false, filled: false, price: '$800', percent: 97
        }
      ]
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  