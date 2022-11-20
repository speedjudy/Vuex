<template>
  <div class="sign-in py-16">
    <p class="text-center text-3xl">Sign In</p>
    <p class="text-center text-lg mt-3">Login in with your account</p>
    <div class="flex items-center w-full">
      <div class="w-full bg-white rounded p-2 sm:p-8 m-4 sm:max-w-md md:mx-auto">
        <form class="mb-4" action="/" method="post">
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-md text-left mb-1">Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg" type="email"
              name="email" id="email" placeholder="Username or Email">
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-md text-left mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-lg"
              type="password" name="password" id="password" placeholder="Password">
          </div>
          <button
            class="bg-green-500 hover:bg-green-700 text-white bg-sky-600 uppercase text-sm font-semibold px-4 py-3 rounded w-full" @click="gohome">Proceed</button>
        </form>
        <span class="text-neutral-600 text-center text-md mr-2" href="/login">Don't have an account?</span><button
          class="text-sky-600 text-lg" @click="signup">Sign Up</button>
        <div class="mt-8 p-3 w-full">
          <div class="bg-slate-100 rounded w-54 p-5 inline-block">
            Hi, I'm Mark! Let me <br /> be your nerdy review guy!
          </div>
        </div>
        <i toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></i>
        <img src="images/mark-img.png" class="float-right" />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'sign-in',
  methods: {
    signup: function () {
      this.$router.push('/signup');
    },
    gohome: function () {
      this.$router.push('/home');
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
  