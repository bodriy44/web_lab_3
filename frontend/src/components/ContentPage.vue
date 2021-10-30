<template>
<div class="content">

<Header></Header>
  <main class ="container">
    <div class="product-title">
      <h1>Рэйчел Хартман: Тесс с дороги.</h1>
    </div>

    <div class = "info">
      <div class="product-image">
        <img src="../assets/images/books/1.jpg"  class="book-img-cover" alt="" title="Рэйчел Хартман: Тесс с дороги">
      </div>

      <div class ="product-description">
        <div id="age_dopusk" title="Рекомендуемый возраст">16+ </div>
        <div class="authors">Автор: Рэйчел Хартман</div>
        <div class="genre">Жанр: Современная зарубежная проза, Фантастический зарубежный боевик</div>

        <div class = "buying">
          <div class = "buying-price">
            <div class="buying-pricenew-text">Цена: </div>
            <div class="buying-pricenew-val">
              <span class="buying-price-val-number">799</span>
              <span class="buying-pricenew-val-currency">р.</span>
            </div>
          </div>
          <a href="#" class="btn"><span class="text">Добавить <span>в корзину</span></span></a>

        </div>
      </div>
      <hr></hr>


      <div class = "product-about">
        <h4>Аннотация к книге Рэйчел Хартман: "Тесс с дороги"</h4>
        <div class = "annotation">
          <p>
            Главный герой рассказа Тэсс с дороги Тесс Домбег. Тесс - младший брат Серафины, главного героя предыдущих книг Рэйчел Хартман,
            вместе со своей сестрой-близнецом Жанной. Она (предположительно) младший близнец, и поэтому ее роль в жизни - помочь сестре
            найти хорошего мужа и жить нормальной жизнью. Тесс часто становится козлом отпущения в семье,
            а мать часто винит ее во всем, что идет не так. Тесс помогла своей сестре выйти замуж за лорда Ричарда Пфанцлига,
            и сестра пригласила ее остаться с ней в качестве няни. Брат лорда Ричарда, Брат Джакомо, ненавидит Тесс по причинам,
            о которых она не знала вначале, хотя становится ясно, что он ненавидит ее, потому что он является последователем Святого Витта,
            который проклинает добрачный секс, и у Тесс был внебрачный сын. Мать Тесс также является последовательницей Святого Витта,
            и по этой причине она так ненавидит Тесс. Во время брачной ночи Жанны Тесс напилась и ударила брата Джакомо по носу.
            Затем ее отправили жить с Серафиной на несколько дней, пока они решали, что с ней делать. В это время выясняется,
            что Серафина была беременна...
          </p>
        </div>
      </div>
    </div>

  </main>
  <Footer></Footer>

</div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";

export default {
  name: "ContentPage",
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped src="../assets/styles/content-style.css">

</style>