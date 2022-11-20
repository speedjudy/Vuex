<template>
  <div v-if="openAddreview" class="add-review absolute sm:p-20 p-2 sm:w-full">
    <div class="grid grid-cols-2">
      <button class="text-2xl font-bold" @click="openAddreview=!openAddreview">Reviews</button>
      <div class="text-right"><img src="images/about-img-2.png" class="float-right" /></div>
    </div>
    <div>
      <h1 class="w-full text-3xl">Write Review</h1>
      <img src="images/rate.png" class="w-auto m-4" />
      <input class="p-2 bg-slate-100 rounded w-full my-3" placeholder="Smith" />
      <textarea placeholder="Add a component" class="p-4 bg-slate-100 rounded w-full my-2 h-48"></textarea>
    </div>
    <button class="p-4 text-white text-lg bg-sky-600 rounded w-full mt-32">Proceed</button>
  </div>
  <div v-else class="p-4 sm:px-24">
    <div class="absolute w-full sm:w-1/2 sm:right-0 sm:mt-8 mr-4">
      <img src="images/percent.png" class="inline-block float-left" />
      <img src="images/about-img-2.png" class="inline-block float-right" />
    </div>
    <div class="grid sm:grid-cols-2 mt-24">
      <div class="slider">
        <img src="images/product-pc-icon.png" />
      </div>
      <div class="grid grid-rows-2xl sm:mt-36 mt-2">
        <p class="sm:p-24 p-2">
          Screen 15.6" IPS (1920x1080) Full HD, matte / AMD Ryzen 5 5500U (2.1 — 4.0 GHz) / RAM 8 GB / SSD 512 GB /
          nVidia
          GeForce GTX 1650, 4 GB / without OD / LAN / Wi-Fi / Bluetooth / webcam / without OS / 2.15 kg / black
        </p>
        <div class="price grid grid-cols-3 h-12 mt-2">
          <div class="grid-rows-2 ">
            <p>Lowest Price</p>
            <strong class="font-bold text-lg">$1130</strong>
          </div>
          <div class="bg-slate-100 pt-3 rounded"><img src="images/amazon-icon.png"
              class="inline-block mr-2"><span>$1140</span></div>
          <div class="bg-slate-100 pt-3 rounded"><img src="images/ebay-icon.png"
              class="inline-block mr-2"><span>$1130</span></div>
        </div>
      </div>
    </div>

    <div class="text-left m-3">
      <input type="checkbox" class="left-0 mr-4" /><span>Notify me on price drop of this product</span>
    </div>
    <div class="tab flex flex-wrap mt-2">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap flex-row rounded">
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 1, 'text-white bg-indigo-800': openTab === 1}">
              Details
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 2, 'text-white bg-indigo-800': openTab === 2}">
              Spec
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              v-on:click="toggleTabs(3)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 3, 'text-white bg-indigo-800': openTab === 3}">
              Reviews
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="sm:px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <Detail />
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <Spec :spec="specs" />
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <button class="w-full rounded py-2 px-4 bg-sky-600 text-white" @click="openAddreview=!openAddreview">Add
                  Review</button>
                <div v-for="item in reviews" v-bind:key="item.id">
                  <Review :review="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Review from '../../components/Review.vue'
import Spec from '../../components/Spec.vue'
import Detail from '../../components/Detail.vue'
export default {
  name: 'product-page',
  components: {
    Review,
    Spec,
    Detail
  },
  props: {
    msg: String
  },
  data() {
    return {
      openTab: 1,
      openAddreview: false,
      reviews: [
        {
          id: 1, username: "Smith Smith", date: "July 13, 2022", reviewcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          id: 2, username: "Smith Smith", date: "July 13, 2022", reviewcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          id: 3, username: "Smith Smith", date: "July 13, 2022", reviewcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          id: 4, username: "Smith Smith", date: "July 13, 2022", reviewcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      ],
      specs:
      {
        spec: {
          color: 'Black', weight: '2.15kg', battery: '48 W*h', manipulat: 'Touchpad', bcharactor: '3-cell, 48 W*h', dimess: '363.4 x 254.5 x 22.9 мм'
        },
        screen: { sdiagonal: '15.6" (1920x1080) Full HD', stype: 'IPS', resoltuion: '1920x1080', srefresh: '60Hz' },
        processor: { processor: 'Hexa-core AMD Ryzen 5 5500U (2.1 - 4.0 GHz)', os: 'Without OS' },
      },
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>
  