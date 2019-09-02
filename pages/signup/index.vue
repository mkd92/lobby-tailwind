<template>  
<div @click.self="homr" class="absolute pin-l pin-t h-screen w-full flex items-center justify-center bg-tran">
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <div>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        v-model="signupData.fullName" />
                        <p v-if="!nameIsValid">Name is not valid</p>
                    </div>

                    <div>
                        <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        v-model="signupData.email" />
                        <p v-if="!emailIsValid">E-mail is not valid</p>
                    </div>

                    <div>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        v-model="signupData.password"/>
                        <p v-if="!passwordIsValid">Password is not valid</p>
                    </div>
                    <div>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        v-model="signupData.confirmPassword"/>
                    </div>

                    
                    <button
                        @click="onSignup"
                        type="button"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>
                </div>
                </div>

            </div>
        </div>
</div> 
</template>

<script>

export default {
    data() {
        return {
            emailIsValid: 'true',
            passwordIsValid: 'true',
            formIsValid: 'true',
            nameIsValid: 'true',

            signupData:{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        onSignup(){            
            this.nameIsValid = this.signupData.fullName.length >= 6
            this.emailIsValid = this.signupData.email.includes("@") && this.signupData.email.includes(".","@")
            //TODO check .include because if returns true even if . is before @
            this.passwordIsValid = this.signupData.password === this.signupData.confirmPassword
            this.formIsValid = this.emailIsValid && this.passwordIsValid
            if(this.formIsValid){

                console.log('Form Submitted', this.signupData)
            }
            else {
                console.log('poda baadu')
            }
            // return fasle
        },
        homr(){
            this.$router.push({
                path:'/'
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.pop{
height: 400px;
}
.bg-tran{
    background-color: rgba(0, 0, 0, 0.6)
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