<template>
  <div class="auth-layout border-b">
    <div class="mx-auto  max-w-7xl px-6 lg:px-8  px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img class="h-8 w-auto" src="@/assets/svg/logo.svg" alt="JobCrafters logo" /> 
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 capitalize">
          </div>
        </div>
        <div class="pt-2">
          <router-link to="/login">
            <button type="button"
              class="rounded-lg  p-3 mr-2 font-semibold text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Log in</button>
          </router-link>
          <router-link to="/signup">
            <button type="button" @click="setLoginTrue"
              class="rounded-lg bg-blue-600 p-3  font-semibold text-white  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              in</button>
          </router-link>
        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <slot />

  </div>
</template>
  
<script>
export default {
  name: 'AuthLayout',
}
</script>
  