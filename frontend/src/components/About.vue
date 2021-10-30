<template>
  <section>
  <Header></Header>
Здесь будет размещена информация о сайте
  <Footer></Footer>
  </section>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "About",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>