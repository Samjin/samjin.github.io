<template>
  <div class="home">
    <Header msg="Shan(Sam) Jin's Portfolio"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Work from '@/components/Work.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Work,
    Footer
  }
}
</script>
