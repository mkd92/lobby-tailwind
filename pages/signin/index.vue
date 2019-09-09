<template>
  <div
    @click.self="homr"
    class="absolute pin-l pin-t h-screen w-full flex items-center justify-center bg-tran"
  >
    <div class="bg-grey-lighter min-h-screen flex flex-col ">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <form
          @submit.prevent="onSignin"
          class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 class="mb-8 text-3xl text-center">Sign in</h1>

          <input
            v-model="signinData.email"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            v-model="signinData.password"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500
            text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Sign in
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing in, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <div class="text-grey-dark mt-6">
            Don't have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Sign up
            </a>
          </div>
          <div class="text-grey-dark mt-2">
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as firebase from 'firebase'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      emailIsValid: 'true',
      formIsValid: 'true',
      signinData: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.signup.user.uid
    })
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) this.$router.push('/')
    }
  },
  methods: {
    onSignin() {
      this.emailIsValid =
        this.signinData.email.includes('@') &&
        this.signinData.email.includes('.', '@')
      this.formIsValid = this.emailIsValid
      if (this.formIsValid) {
        this.$store.dispatch('signup/signUserIn', {
          email: this.signinData.email,
          password: this.signinData.password
        })
      } else {
        console.log('error')
      }
    },
    homr() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pop {
  height: 400px;
}
.bg-tran {
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
</style>
