<template>
  <div class="">
    <div class="flex flex-col">
      <Nav />
      <div
        class="container min-h-screen flex justify-center items-center
        text-center mx-auto bg-blue-100"
      >
        <div>
          <logo />
          <h1 class="title mt-10">
            A PROPERTY MANAGEMENT TOOL
          </h1>
          <h2 class="subtitle">
            mkd92's hobby project
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Logo from '~/components/Logo.vue'
// eslint-disable-next-line
import Nav from '~/components/Nav'

export default {
  // data: function() {
  // return {
  //   isOpen: false,
  // }
  // },
  components: {
    Logo,
    Nav,
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
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
