<template>
  <!-- <div v-if="footerClicked" class="my-4 fixed bottom-8 w-full bg-white rounded-lg h-64">
    Hello Footer
  </div> -->
  <div id="app">
    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div class="w-full px-8 fixed bottom-0 mx-auto my-auto rounded-xl shadow-lg bg-white">
          <div class="justify-center w-full">
            <div v-for="c of items" :key="c.title">
              <div class="title bg-slate-50 mt-3 p-3 text-black text-left" @click="c.active = !c.active">
                <span class="w-1/2 ">{{ c.title }}</span>
                <svg v-if="c.active"
                  class="text-black w-3 transition-all duration-200 transform rotate-180 float-right inline-block pt-2"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"
                  aria-hidden="true">
                  <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else
                  class="text-black w-3 transition-all duration-200 transform rotate-0 float-right inline-block pt-2"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"
                  aria-hidden="true">
                  <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="description p-4 bg-slate-50 text-sm text-left" v-if="c.active">
                <div v-if="c.title !== 'Price Range'">
                  <button v-for="item of c.content" v-bind:key="item" @click="select(c.ino, item.cno)"
                    class="border-indigo-300 border rounded-lg px-4 sm:px-8 m-1 py-2 inline-block"
                    :class="item.actived ? 'bg-violet-800 text-white' : 'bg-white text-indigo-300'">{{item.name}}</button>
                </div>
                <div v-else>
                  <div class="flex justify-between">
                    <span>X-Score</span>
                    <input type="checkbox">
                  </div>
                  <div class="flex justify-between mt-4">
                    <span class="pt-2">From</span>
                    <input type="text" placeholder="500" class="p-2 bg-slate-100 w-1/4 border rounded">
                    <span class="pt-2">To</span>
                    <input type="text" placeholder="12 897" class="p-2 bg-slate-100 w-1/4 border rounded">
                    <span class="pt-2">$</span>
                  </div>
                  <div class="text-center">
                    <button
                      class="mb-4 mt-4 md:mb-4 bg-blue-500 border w-full sm:w-1/2 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="mb-4 md:mb-4 sm:w-1/2 bg-blue-500 border w-full px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600" @click="onToggle">
              Show Results
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <footer class='fixed w-1/3 bg-slate-800 rounded h-2 bottom-1 inline-block left-1/3' @click="onToggle">
  </footer>
</template>
<script>
export default {
  name: 'footer-page',
  data: function () {
    return {
      footerClicked: false,
      isOpen: false,
      items: [
        {
          ino: 0, title: 'Subcategories', content: [
            { cno: 0, name: 'Laptops', actived: false },
            { cno: 1, name: 'Monitors', actived: false },
            { cno: 2, name: 'Nettops, Monoblocks', actived: false },
            { cno: 3, name: 'Gaming', actived: false },
            { cno: 4, name: 'Tablets', actived: false },
            { cno: 5, name: 'Adapters', actived: false },
            { cno: 6, name: 'Computer Components', actived: false },
            { cno: 7, name: 'Network Equipment', actived: false },
            { cno: 8, name: 'Microphones', actived: false },
            { cno: 9, name: 'Office Equipment', actived: false }], active: false
        },
        {
          ino: 1, title: 'Brand', content: [
            { cno: 0, name: 'ASUS', actived: false },
            { cno: 1, name: 'Acer', actived: false },
            { cno: 2, name: 'Dell', actived: false },
            { cno: 3, name: 'Honor', actived: false },
            { cno: 4, name: 'HP', actived: false },
            { cno: 5, name: 'Huawei', actived: false },
            { cno: 6, name: 'Apple', actived: false },
            { cno: 7, name: 'Lenovo', actived: false },
            { cno: 8, name: 'Microsoft', actived: false },
            { cno: 9, name: 'Razer', actived: false },
          ], active: false
        },
        {
          ino: 3, title: 'Price Range'
        },
        {
          ino: 3, title: 'Processor', content: [
            { cno: 0, name: 'AMD Ryzen 3', actived: false },
            { cno: 1, name: 'AMD Ryzen 5', actived: false },
            { cno: 2, name: 'AMD Ryzen 7', actived: false },
            { cno: 3, name: 'AMD Ryzen 9', actived: false },
            { cno: 4, name: 'Apple M', actived: false },
            { cno: 5, name: 'Intel Xeon', actived: false },
            { cno: 6, name: 'Intel Core 3', actived: false },
            { cno: 7, name: 'Intel Core 5', actived: false },
            { cno: 8, name: 'AMD C', actived: false },
            { cno: 9, name: 'Intel Pentium', actived: false },
            { cno: 10, name: 'AMD A', actived: false },
            { cno: 11, name: 'AMD Athlon', actived: false },
            { cno: 12, name: 'AMD Atom', actived: false },
            { cno: 13, name: 'Intel Celeron', actived: false },
            { cno: 14, name: 'Intel Core M', actived: false },
          ], active: false
        },
        {
          ino: 4, title: 'Screen Diagonal', content: [
            { cno: 0, name: '13”', actived: false },
            { cno: 1, name: '14”', actived: false },
            { cno: 2, name: '15”', actived: false },
            { cno: 3, name: '16”- 17”', actived: false },
            { cno: 4, name: '18”- 20”', actived: false },
            { cno: 5, name: '|”- 12.5”', actived: false },
          ], active: false
        }
      ]
    };
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    select(ino, cno) {
      this.items[ino].content[cno].actived = !this.items[ino].content[cno].actived;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>