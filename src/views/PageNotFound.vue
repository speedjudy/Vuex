<template>
  <div class="mb-6 md:w-full px-4">
    <div class="absolute left-0 inset-y-0 pl-3 flex my-2.5 mt-20 ml-4">
      <svg class="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" /></svg>
    </div>
    <input class="w-full h-12 mt-1 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg pl-12" type="search"
      name="search" id="search" placeholder="Search">
  </div>
  <br />
  <div class="mt-8 p-3 w-full inline-block mt-16 -ml-16 sm:-ml-32">
    <div class="bg-slate-100 rounded w-54 p-5 px-10 inline-block my-8">
      Hi, I'm Mark! Let me <br /> be your nerdy review guy!
    </div>
  </div>
  <img src="images/not-found-img.png" class="inline-block" />
  <p class="text-base text-slate-600 mt-8">The page you are looking for doesn`t exist or an other error occurred</p>
</template>
  
<script>
export default {
  name: 'page-not-found',
  props: {
    msg: String
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
  