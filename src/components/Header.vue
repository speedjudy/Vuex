<template>
  <div class="w-full mx-auto p-2 px-8 grid-rows-2 rounded text-center top-0 grid grid-cols-3 pt-2">
    <div class="text-left cursor-pointer" :class="openSidebar? 'hidden': 'block'"  @click="$emit('toggleSidebar')"><img src="images/burgur.png" /></div>
    <div class="inline-block text-center">
      <img src="images/header-icon.png" class="w-auto inline-block"/>
    </div>
    <div class="inline-block text-right">
      <img src="images/header-upload-icon.png" class="w-auto inline-block"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-com',
  props: {
    openSidebar: Boolean,
  },
}
</script>
<style>
</style>