<template>
  <div class="detail">
    <p class="text-xl text-violet-800 font-bold text-left">
      My AI engine read 1,289 user’s reviews and this is the what they had to say:
    </p>

    <div class="flex justify-between">
      <div class=" pt-10 pl-4 text-left">
        <p class="text-xl text-violet-800 font-bold text-left mb-2">X score</p>
        <p>#3 in <span class="text-sky-500">Computer</span></p>
        <p>#1 in <span class="text-sky-500">Laptops</span></p>
      </div>
      <div>
        <circle-progress :percent="90" class="row-span-2 mt-3 mr-8" :fill-color="color" :size="100" :border-width="20"
          :border-bg-width="0" :show-percent="true" />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="pt-10 pl-4 text-xl text-violet-800 font-bold text-left mb-2">
        Category Comparison
      </div>
      <div>
        <img src="images/radar.png">
      </div>
    </div>

    <div class="flex justify-between">
      <div class="pt-10 pl-4 text-xl text-violet-800 font-bold text-left mb-2 w-3/5">
        Ask Anything
      </div>
      <div class="mb-6 md:w-full pt-9 mr-2">
        <input
          class="w-full h-10 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 border text-lg px-2 pr-10"
          type="search" name="search" id="search" placeholder="anyword of interest?">
        <div class="left-0 inset-y-0 pl-3 -mt-8 ml-44 flex my-2.5 relative float-right mr-3">
          <svg class="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="flex justify-between px-4 pt-4">
      <div>
        <p>Lowest Price</p>
        <p class="text-2xl font-bold">$1130</p>
      </div>
      <div class="w-3/5">
        <button class="bg-green-500 text-white px-4 py-2 rounded-lg w-full h-full">Buy Now</button>
      </div>
    </div>
    <div class="flex justify-between px-4 pt-4">
      <div class="flex justify-between px-4 w-1/2 bg-slate-100 py-2 px-4 rounded-lg m-1">
        <img src="images/amazon-icon.png" class="h-5" />
        <span class="float-right text-indigo-500 font-bold">$1100</span>
      </div>
      <div class="flex justify-between px-4 w-1/2 bg-slate-100 py-2 px-4 rounded-lg m-1">
        <img src="images/ebay-icon.png" class="h-5" />
        <span class="float-right text-slate-500 font-bold">$1120</span>
      </div>
      <div></div>
    </div>

    <div class="flex justify-between pt-4">
      <div class="text-left">
        <p class="text-indigo-400 font-bold text-lg">Reviews</p>
      </div>
      <div class="text-right">
        <p class="text-indigo-400 cursor-pointer">View All</p>
      </div>
    </div>
    <div class="mt-2 w-full grid sm:grid-cols-4 grid-cols-2">
      <div class="grid grid-rows-2 m-1 bg-slate-100 rounded p-2">
          <div class="flex justify-between">
            <div>
              <img src="images/avatar-2.png">
            </div>
            <div class="text-left">
              <p>Smith Smith</p>
              <img src="images/amazon-icon.png">
            </div>
          </div>
          <div>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
          </div>
        </div>
      <div class="grid grid-rows-2 m-1 bg-slate-100 rounded p-2">
          <div class="flex justify-between">
            <div>
              <img src="images/avatar-2.png">
            </div>
            <div class="text-left">
              <p>Smith Smith</p>
              <img src="images/amazon-icon.png">
            </div>
          </div>
          <div>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
          </div>
        </div>
    </div>
    <div class="flex justify-between pt-4">
      <div class="text-left">
        <p class="text-indigo-400 font-bold text-lg">Similar Products</p>
      </div>
      <div class="text-right">
        <p class="text-indigo-400 cursor-pointer">View All</p>
      </div>
    </div>
    <div class="mt-2 w-full grid sm:grid-cols-4 grid-cols-2">
      <div class="grid grid-cols-3 m-1 bg-slate-100 rounded p-2">
        <img src="images/avatar-2.png" class="m-1" />
        <img src="images/favorite-device-icon.png" class="m-1" />
        <img src="images/avatar-2.png" class="m-1" />
      </div>
      <div class="grid grid-cols-3 m-1 bg-slate-100 rounded p-2">
        <img src="images/avatar-2.png" class="m-1" />
        <img src="images/favorite-device-icon.png" class="m-1" />
        <img src="images/avatar-2.png" class="m-1" />
      </div>
    </div>
  </div>
</template>
    
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  data() {
    return {
      color: "#00BF04"
    }
  },
  name: "detail-com",
  props: { xray: {} },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  components: { CircleProgress }
};
</script>
<style>
.current-counter {
  font-size: 20px;
  font-weight: 600;
}
</style>