<template>
  <section class="container">
    <!-- Page header with NavBar-->

    <header>
      <Navbar></Navbar>
    </header>
  <button type="button" class="btn btn-link">Link</button>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
