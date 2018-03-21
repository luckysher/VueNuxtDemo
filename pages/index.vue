<template>
  <div>
    <!-- Page header with NavBar-->
    <!-- Page Header end -->
    <header>
      <Navbar></Navbar>
    </header>
    <!-- Page Header end -->

    <!-- Page body Start -->
    <div class="container">
      <DemoForm></DemoForm>
      <Modal></Modal>
    </div>
    <!-- Page body end -->
    <!-- Page footer Start -->
    <footer>
      <Footer/>
    </footer>
    <!-- Page footer End -->
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import DemoForm from '~/components/forms/DemoForm.vue'
import Modal from '~/components/Modal.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Modal,
    DemoForm,
    Footer
  }
}
</script>
