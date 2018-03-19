<template>
  <div class="home">
    <div class="container">
      <Header msg="Shan(Sam) Jin's Portfolio"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Works from '@/components/Works.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Works,
    Footer
  }
}
</script>
