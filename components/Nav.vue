<template>
  <nav class="flex items-center justify-between flex-wrap p-3 bg-blue-100">
    <div class="flex item-center flex-shrink-0 text-gray-800 mr-6">
      <svg class="fill-current h-10 w-10 " height="297mm" width="210mm" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 210 297">
       <g style="image-rendering:auto" transform="matrix(2.3183 0 0 2.3183 -290.09 -294.39)">
        <path d="m150.82 140.86a5.2917 5.2917 0 0 0 -5.2917 5.2917v18.858a5.2917 5.2917 0 0 0 5.2917 5.2917h11.055a3.287 3.287 0 0 0 3.2871 -3.2871v-3.3967a3.287 3.287 0 0 1 3.2871 -3.2871h6.7272v35.873a3.287 3.287 0 0 0 3.2871 3.2871h10.643a5.2917 5.2917 0 0 0 5.2917 -5.2917v-33.868h0.0424v-14.015a5.2917 5.2917 0 0 0 -5.2917 -5.2917h-24v-0.16382zm0.0424 39.408a5.2917 5.2917 0 0 0 -5.2917 5.2917v33.868h-0.0424v14.015a5.2917 5.2917 0 0 0 5.2917 5.2917h23.987v0.16381h14.342a5.2917 5.2917 0 0 0 5.2917 -5.2917v-18.858a5.2917 5.2917 0 0 0 -5.2917 -5.2917h-11.06a3.287 3.287 0 0 0 -3.2871 3.2871v3.3967a3.287 3.287 0 0 1 -3.2871 3.2871h-6.7272v-35.873a3.287 3.287 0 0 0 -3.2871 -3.2871z"/>
       </g>
      </svg>
      <span class="font-sans font-bold company text-2xl tracking-tight pt-2">Lobby</span>
    </div>
    <div>
        <button @click="invertIsSigninOpen" class="inline-block company font-semibold text-sm px-4 py-2 leading-none border rounded text-grey-800 border-gray-800 hover:border-transparent hover:text-blue-100 hover:bg-gray-800 mt-4 lg:mt-0">Sign in</button>
        <button @click="invertIsSignupOpen" class="inline-block company font-semibold text-sm px-4 py-2 leading-none border rounded text-grey-800 border-gray-800 hover:border-transparent hover:text-blue-100 hover:bg-gray-800 mt-4 lg:mt-0">Sign Up</button>
      
    </div>
  </nav>
</template>
<script>
export default {

  data: () => ({

  }),

  
  methods:{
    invertIsSignupOpen(){
          this.$store.commit('invertIsSignupOpen')
    },
    invertIsSigninOpen(){
          this.$store.commit('invertIsSigninOpen')
    }
  }
}
</script>
<style lang="scss" scoped>
.company {
  font-family: 'Montserrat', sans-serif;
}
</style>
