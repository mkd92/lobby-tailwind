<template>   
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign in</h1>
                    

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign in</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing in, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                <div class="text-grey-dark mt-6">
                    Don't have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Sign up
                    </a>
                </div>
                <div class="text-grey-dark mt-2">
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Forgot Password?
                    </a>
                </div>
                </div>

            </div>
        </div>
</template>

<style lang="scss" scoped>
.pop{
height: 400px;
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