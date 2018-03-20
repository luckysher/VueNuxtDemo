<template>
  <section class="container">
    <!-- Page header with NavBar-->

    <header>
      <Navbar></Navbar>
    </header>

   <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#demoModal">Open Modal</button>

    <Modal></Modal>

  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Navbar,
    Modal
  }
}
</script>
