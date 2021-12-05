<template>
  <div id="wrap">
    <header class = main-header>

      <div class="header-text">
        <h1>Книжная лавка</h1>
      </div>

      <img src = "../assets/images/logo.png" alt ="Упс" />

      <form class="search" onsubmit="return false;">
        <input v-model="searchInfo" type="search" name="" placeholder="поиск" class="input" />
        <input type="submit" name="" value="" class="submit" @click = "search()" />
      </form>

      <nav>
        <router-link :to="{name: 'About'}">
          <h2 class = "about-header">О нас</h2>
        </router-link>
        <a href="#"><h2 class = "about-header">Личный кабинет</h2></a>
        <a href="#"><h2 class = "about-header">Корзина</h2></a>
      </nav>

    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
      return{
          searchInfo: null
      }
  },
  methods: {
      search(){
          console.log(this.searchInfo)
      }
  }
}
</script>

<style  src="../assets/styles/header_style.css">
</style>
