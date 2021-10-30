<template>
  <div class="home">
    <Authorization></Authorization>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from "../components/Footer";
import MainPage from "../components/MainPage";
import Authorization from "../components/Authorization";

export default {
  name: 'Home',
  components: {
    Authorization,
    MainPage,
    Footer,
    Header
  }
}
</script>