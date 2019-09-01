<template>
  <div class="">

  <div class="flex flex-col">
    <Nav />
    <div class="container bg-blue-100">
      <div>
        <logo />
        <h1 class="title mt-10">
          A PROPERTY MANAGEMENT TOOL
        </h1>
        <h2 class="subtitle">
          mkd92's hobby project
        </h2>
        <a href="#" @click="isOpen = !isOpen" class="inline-block company font-semibold text-sm px-4 py-2 leading-none border rounded text-grey-800 border-gray-800 hover:border-transparent hover:text-blue-100 hover:bg-gray-800 mt-4 lg:mt-0">Sign Up</a>
      </div>
    </div>
    <div v-if="isOpen" @click.self="isOpen = false" class="overlay absolute pin-l pin-t h-screen w-full flex items-center justify-center">
      <div class="bg-white rounded w-1/3">
        <h2>hello</h2>
        <p>hi</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from "~/components/Nav"
export default {
  data: function() {
    return {
      isOpen: false,
    }
  },
  components: {

    Logo,
    Nav
  }
}
</script>


<style lang="scss" scoped>

.overlay{
background-color: rgba(0, 0, 0, .6);
}

.bg-pop{
  background-color: rgba(0, 0, 0, .6);
}

.pop{
height: 400px;
}

.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
