<template>
  <div id="app">
    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-20"></div>
        <div
          class="w-full sm:w-1/2 px-8 fixed bottom-48 sm:bottom-28 sm:inline-block mx-auto my-auto rounded-xl h-80 z-20 shadow-lg">
          <div class="p-4 px-8 bg-white rounded w-2/3 rounded-lg mb-4 msg-box text-left">
            Hi, I'm Mark! Let me
            be your nerdy review guy!
          </div>
          <img src="images/wizard-over-img.png" class="float-right h-48 cursor-pointer" />
        </div>
      </div>
    </transition>
  </div>
  <div class="wizard-page p-2 sm:px-32 py-16">
    <div class="flex justify-between">
      <span class="w-1/2 inline-block w-3/4 text-2xl sm:text text-left text-violet-400  font-bold"> Looking for a new
        laptop? I'll help you</span>
      <img src="images/not-found-img.png" class="h-20 sm:h-28" />
    </div>
    <p class="text-2xl my-12 text-violet-400 font-bold">Which type of user?</p>
    <Slider v-model="value1" />
    <div class="grid grid-cols-4">
      <span>Beginner</span>
      <span>Amateur</span>
      <span>Advanced</span>
      <span>Professional</span>
    </div>
    <p class="text-2xl my-12 text-violet-400 font-bold">What is your budget?</p>
    <Slider v-model="value2" tooltips="false" />
    <div class="grid grid-cols-3">
      <span>As low as possible</span>
      <span>Standard</span>
      <span>Whatever it takes</span>
    </div>
    <div class="text-left my-4">
      <input type="checkbox" /> <span class="text-lg">I'm flexible</span>
    </div>
    <button
      class="bg-green-500 hover:bg-green-700 text-white my-28 bg-sky-600 uppercase text-sm font-semibold px-4 py-3 rounded w-full text-base"
      @click="gocategory">
      Proceed
      <!-- <font-awesome-icon :icon="['fas', 'play']" /> -->
    </button>
    <div>
    </div>
  </div>
</template>
    
<script>
import Slider from '@vueform/slider'
export default {
  name: 'wizard-page',
  props: {
    msg: String
  },
  components: {
    Slider,
  },
  data() {
    return {
      isOpen: true,
      value1: 20,
      value2: 30
    }
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    gocategory() {
      this.$router.push('/category');
    }
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/slider/themes/default.css" >

</style>
    
