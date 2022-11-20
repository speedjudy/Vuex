<template>
  <div class="spec grid grid-rows-3xl">
    <div class="specific grid grid-rows-6xl">
      <h1 class="text-purple-800 text-left font-bold text-lg m-2">Specifications</h1>
      <div class="p-1">
        <span class="float-left">Color</span>
        <span class="float-right">{{spec.spec.color}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Weight</span>
        <span class="float-right">{{spec.spec.weight}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Battery Capacity</span>
        <span class="float-right">{{spec.spec.battery}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Manipulators</span>
        <span class="float-right">{{spec.spec.manipulat}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Battery characteristics</span>
        <span class="float-right">{{spec.spec.bcharactor}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Dimensions (W x D x H)</span>
        <span class="float-right">{{spec.spec.dimess}}</span>
      </div>
    </div>
    <div class="screen grid grid-rows-4xl mt-6">
      <h1 class="text-purple-800 text-left font-bold text-lg m-2">Screen</h1>
      <div class="p-1">
        <span class="float-left">Screen diagonal</span>
        <span class="float-right">{{spec.screen.sdiagonal}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Screen type</span>
        <span class="float-right">{{spec.screen.stype}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Resolution</span>
        <span class="float-right">{{spec.screen.sresolution}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Screen refresh rate</span>
        <span class="float-right">{{spec.screen.srefresh}}</span>
      </div>
    </div>
    <div class="processor grid grid-rows-2xl mt-6">
      <h1 class="text-purple-800 text-left font-bold text-lg m-2">Processor</h1>
      <div class="p-1">
        <span class="float-left">Processor</span>
        <span class="float-right w-1/2">{{spec.processor.processor}}</span>
      </div>
      <div class="p-1">
        <span class="float-left">Operating System</span>
        <span class="float-right">{{spec.processor.os}}</span>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "spec-com",
  props: { spec: {} },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>