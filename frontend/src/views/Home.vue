<template>
  <div class="home">
    <Header></Header>
    <div class = "test">
      Продукты
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from "../components/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
</script>