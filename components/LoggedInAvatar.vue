<template>
  <div class="relative">
    <button type="button" @click.prevent="show = !show">
      <svg
        class="h-10 w-10 ml-2 fill-current  text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3
      0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"
        />
      </svg>
    </button>
    <div
      v-show="show"
      class="bg-white rounded z10 mask box-shadow"
      style="position: absolute;
      right: 0;
      width: 16rem"
    >
      <div class="px-4 py-2 border rounded-t no-select">
        <button @click="signout" type="button" name="button">Signout</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  data: () => ({
    show: false
  }),
  computed: {
    ...mapState({
      user: (state) => state.signup.user.uid
    })
  },
  watch: {
    user(value) {
      if (value === null && value === undefined) this.$router.push('/')
    }
  },
  methods: {
    signout() {
      this.$store.dispatch('signup/signUserOut')
    }
  }
}
</script>
<style lang="scss" scoped></style>
