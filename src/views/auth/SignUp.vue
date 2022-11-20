<template>
  <div class="sign-in py-16">
    <p class="text-center text-4xl">Sign Up</p>
    <p class="text-center text-xl mt-3">Make your account</p>
    <div class="flex items-center w-full">
      <div class="w-full bg-white rounded p-2 sm:p-8 m-4 sm:max-w-md md:mx-auto">
        <div class="mb-4">
          <div class="mb-4 md:w-full">
            <label for="username" class="block text-md text-left mb-1">Username</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg" type="text"
              name="username" id="username" placeholder="Username">
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-md text-left mb-1">Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg" type="email"
              name="email" id="email" placeholder="Email">
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-md text-left mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg" type="password"
              name="password" id="password" placeholder="Password">
          </div>
          <div class="mb-6 md:w-full">
            <label for="phone" class="block text-md text-left mb-1">Phone number</label>
            <select class="w-1/4 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 py-2.5 border-r-0 text-sm">
              <!--Supplement an id here instead of using 'name'-->
              <option value="value1">+1</option>
              <option value="value1">+91</option>
              <option value="value1">+88</option>
              <option value="value1">+65</option>
              <option value="value2" selected>+380</option>
              <option value="value3">+44</option>
            </select>
            <input class="w-3/4 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg" type="text"
              name="phnoenumber" id="phnoenumber" placeholder="Phone Number">
          </div>
          <button
            class="bg-green-500 hover:bg-green-700 text-white bg-sky-600 uppercase text-sm font-semibold px-4 py-3 rounded w-full text-base">Proceed</button>
        </div>
        <span class="text-neutral-600 text-center text-md mr-2" href="/login">Already have an account?</span><button
          class="text-sky-600 text-lg" @click="signin">Sign In</button>
        <img src="images/mark-img-2.png" class="float-right mt-8" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'sign-up',
  methods: {
    signin: function () {
      this.$router.push('/');
    }
  },
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
  