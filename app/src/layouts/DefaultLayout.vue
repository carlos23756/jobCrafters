<template>
  <div>
    <NavbarVue />
    <slot />
    <FooterVue />
  </div>
</template>
  
<script>
import NavbarVue from '../components/Navigation/Navbar.vue'
import FooterVue from '../components/Navigation/Footer.vue'

export default {
  components: {
    NavbarVue,
    FooterVue

  },
}
</script>
  