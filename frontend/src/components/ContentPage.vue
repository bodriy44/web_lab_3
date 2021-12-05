<template>
<section class="content">
<Header></Header>
  <main class ="container" v-if = "product">
    <div class="product-title">
      <h1>{{ product.title }}</h1>
    </div>

    <div class = "info">
      <div class="product-image">
        <img :src="require(`../assets/images/books/${product.id}.jpg`)"  class="book-img-cover" alt="">
      </div>

      <div class ="product-description">
        <div id="age_dopusk" title="Рекомендуемый возраст">{{product.age}}+ </div>
        <div class="authors">Автор: {{ product.author }}</div>
        <div class="genre">Жанр: {{ product.genre }}</div>

        <div class = "buying">
          <div class = "buying-price">
            <div class="buying-pricenew-text">Цена: </div>
            <div class="buying-pricenew-val">
              <span class="buying-price-val-number">{{product.price}}</span>
              <span class="buying-pricenew-val-currency">р.</span>
            </div>
          </div>
          <button  class="btn" @click = "addToCart(product)"><span class="text">Добавить <span>в корзину</span></span></button>

        </div>
      </div>
      <hr></hr>


      <div class = "product-about">
        <h4>Аннотация к книге {{product.author}}: "{{ product.title }}"</h4>
        <div class = "annotation">
          <p>
           {{product.description}}
          </p>
        </div>
      </div>
    </div>

  </main>
  <Footer></Footer>
</section>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

export default {
  name: "ContentPage",
  components: {
    Footer,
    Header,
    Product
  },
    methods: {
      addToCart(product){
          //тут добавление в бд корзины пользователя сделать
          const params = {
              id: product.id, count: 1
          }
          this.$http.post('/cart', params)
          //.then(response => product.inCart = response.data.inCart)
      }
    },
  data() {
    return {
      product: null
    }
  },
  created() {
    const id = this.$route.params.id
    this.$http.get('/products/' + id)
      .then(response => this.product = response.data)
  }
}
</script>

<style scoped src="../assets/styles/content-style.css">

</style>
