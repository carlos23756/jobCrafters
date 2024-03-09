<template>
  <div class="flex min-h-full flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-[580px]">
      <div class="bg-white px-6 py-10  sm:rounded-lg sm:px-14">
        <div class="pb-8 pt-2">
          <img class="h-9 w-auto" src="/src/assets/svg/logo.svg" alt="JobCrafters logo">
          <div class="font-semibold text-xl pt-4 "></div> 
          <span class="text-sm text-gray-500">
            Sign in to VistaPrint, VistaCreate, or 99designs by Vista and we’ll sync your accounts.

          </span>
        </div>
        <div>
          <div class="mt-1 grid grid-cols-1 pb-4 gap-4">
            <button href="#"
              class="flex w-full items-center justify-center  hover:bg-gray-100 gap-3 rounded-md p-4 text-sm font-semibold text-gray-900  bg-gray-50 focus-visible:ring-transparent">
            <img src="../../assets/svg/Google.svg" alt="Google logo" class="h-5 w-5" />

              <span class="text-sm font-semibold leading-6">Login with Google</span>
            </button>

            <button href="#"
              class="flex w-full items-center hover:bg-gray-100 justify-center gap-3 rounded-md p-4 text-sm font-semibold text-gray-900 bg-gray-50 focus-visible:ring-transparent">
            <img src="../../assets/svg/Linkindeln.svg" alt="Facebook logo" class="h-5 w-5" />
              
              <span class="text-sm font-semibold leading-6">Login with LinkedIn</span>
            </button>
          </div>
        </div>
        <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center text-sm font-medium leading-6">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>
       <div>
        <form class="space-y-4" action="#" method="POST">
          <div>
           
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
              placeholder="Email Adress"
                class="block w-full rounded-lg focus:outline-none border border-gray-150  placeholder:text-gray-500  placeholder:text-sm p-5" />
            </div>
          </div>

          <div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
              placeholder="Password"
                class="block w-full focus:outline-none rounded-lg p-5  border border-gray-150  placeholder:text-gray-500  placeholder:text-sm " />
            </div>
          </div>

          <div class="flex items-center justify-between">

            <div class="text-sm leading-6">
            
              <span class="text-gray-400 text-xs">
                By signing in, you have read and agree to our Vista <u>General Terms and Conditions</u> . For more details .
              </span>
            </div>
          </div>

          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-blue-600 p-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              in</button>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <div class="text-sm leading-6">
                <a href="#" class="font-semibold text-blue-600 hover:text-blue-500">Forgot your password?</a>
              </div>
            </div>
          </div>
        </form>
       </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "LoginForm",
  
};
</script>
