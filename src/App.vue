<template>
  <div class="container mx-auto px-4 pt-4 md:w-2/3">
    <Header />
    <section>
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>
