<template>
  <div class="max-w-2xl mx-auto bg-slate-100 p-4 px-8 grid-rows-2 rounded">
    <div class="grid grid-rows-3 grid-flow-col gap-2">
      <div class="row-span-3"><img src="images/favorite-device-icon.png" /></div>
      <div class="col-span-5"><span class="text-sm">{{product.name}}</span> <span class="float-right">1</span><span
          class="float-right">2</span></div>
      <div class="col-span-5"><span class="text-sm text-slate-400">Minimal price</span> <span
          class="float-right text-slate-400">Brand</span></div>
      <div class="col-span-5 flex justify-between"><span>{{product.price}}</span><span>Apple</span></div>
    </div>
    <div class="grid grid-rows-2 grid-flow-col gap-2">
      <circle-progress :percent="90" class="row-span-2 mt-3" :size="45" :border-width="4" :border-bg-width="0" :show-percent="true" />
      <div class="col-span-5 py-1 bg-white text-center"><img src="images/amazon-icon.png" class="max-w-xl inline-block"></div>
      <div class="col-span-5 py-1 bg-white text-center"><img src="images/ebay-icon.png" class="max-w-xl inline-block"></div>
    </div>
  </div>
  <div>
  </div>
</template>
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  name: 'card-com',
  props: { product: {} },
  components: { CircleProgress }
}
</script>
<style>
/* .current-counter{
  margin-top: 15px;
} */
</style>