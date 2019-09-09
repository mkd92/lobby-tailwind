<template>
  <!-- eslint-disable -->
  <div
    class="absolute pin-l pin-t h-screen w-full flex items-center justify-center bg-tran"
    @click.self="homr"
  >
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <form
          class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          @submit.prevent="onSignup"
        >
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <div>
            <input
              v-model="signupData.fullName"
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <p v-if="!nameIsValid">Name is not valid</p>
          </div>

          <div>
            <input
              v-model="signupData.email"
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <p v-if="!emailIsValid">E-mail is not valid</p>
          </div>

          <div>
            <input
              v-model="signupData.password"
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <p v-if="!passwordIsValid">Password is not valid</p>
          </div>
          <div>
            <input
              v-model="signupData.confirmPassword"
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500
            text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
              >Terms of Service</a
            >
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
              >Privacy Policy</a
            >
          </div>
          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
              >Log in</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  data() {
    return {
      emailIsValid: 'true',
      passwordIsValid: 'true',
      formIsValid: 'true',
      nameIsValid: 'true',

      signupData: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
    onSignup() {
      this.nameIsValid = this.signupData.fullName.length >= 6
      this.emailIsValid =
        this.signupData.email.includes('@') &&
        this.signupData.email.includes('.', '@')
      // TODO check .include because if returns true even if . is before @
      this.passwordIsValid =
        this.signupData.password === this.signupData.confirmPassword &&
        this.signupData.password.length >= 8
      this.formIsValid = this.emailIsValid && this.passwordIsValid
      if (this.formIsValid) {
        this.$store.dispatch('signup/signUserUp', {
          email: this.signupData.email,
          password: this.signupData.password
        })
      } else {
        console.log('error')
      }
      // TODO divide this into methods and computed property
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
