<template>
  <div class="home">
    <Header></Header>
    <MainPage></MainPage>
    <Footer></Footer>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";

export default {
  name: 'Home',
  components: {
    MainPage,
    Footer,
    Header
  }
}
</script>