<template>
  <section>
  <Header v-on:searchChanged = "updateSearch"></Header>
    <main class="container">
    <div>
      <h1>
        Главные хиты 2021
      </h1>
    </div>
    <section class="products">
      <div  class="v-for" v-for="product in products">
        <Product :product="product"></Product>
      </div>
    </section>
    </main>
  <Footer></Footer>
  </section>
</template>

<script>
import Product from "./Product";
import Header from "./Header";
import Footer from "./Footer";
import {forEach} from "core-js/internals/array-iteration";

export default {
  name: "MainPage",
  components: {
    Footer,
    Header,
    Product
  },
  beforeCreate: function() {
    document.body.className = 'main';
  },
  data(){
    return{
      products: [],
      searched: "",
      allProducts: []
    }
  },
    created() {
        this.$http.get('/products')
            .then(response => this.searchFilter(response.data))
    },
    methods: {
      searchFilter(data){
              this.allProducts = data
              this.products = []
              data.forEach((element) => {
                  if (element.title.includes(this.searched)) {
                      this.products.push(element)
                  }
              })
      },

      updateSearch(e){
          this.searched = e
          this.searchFilter(this.allProducts)
      }
    }
}
</script>

<style scoped src="../assets/styles/main_style.css">

</style>

/*
Продукты
{
id: 1,
title: 'Тесс с дороги.',
author: 'Рэйчел Хартман',
description: 'В средневековом королевстве Горедд женщины должны быть леди, мужчины - их защитниками, а драконы могут быть кем хотят. Тесс, упрямо, является нарушительницей спокойствия. Вы не можете устроить сцену на свадьбе своей сестры и сломать нос родственнику одним ударом (каким бы напыщенным он ни был) и не пострадать от последствий. Поскольку ее семья планирует отправить ее в монастырь, Тесс натягивает сапоги и отправляется в путешествие по Южным землям, одна и притворяясь мальчиком.',
price: 799,
image:  require('../assets/images/books/1.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 2,
title: 'Дети капитана Гранта.',
author: 'Жюль Верн',
description: 'Описание...',
price: 599,
image:  require('../assets/images/books/2.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 3,
title: 'Простые Смертные.',
author: 'Дэвид Митчелл',
description: 'Описание...',
price: 359,
image:  require('../assets/images/books/3.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 4,
title: 'Хранители Предела.',
author: 'Александра Ситникова',
description: 'Описание...',
price: 839,
image:  require('../assets/images/books/4.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 5,
title: 'Мост в Терабитию.',
author: 'Кэтрин Патерсон',
description: 'Описание...',
price: 1299,
image:  require('../assets/images/books/5.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 6,
title: 'Обнажение тайны.',
author: 'Джулия Кеннер',
description: 'Описание...',
price: 499,
image:  require('../assets/images/books/6.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 7,
title: 'Случайный турист.',
author: 'Энн Тайлер',
description: 'Описание...',
price: 679,
image:  require('../assets/images/books/7.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
},
{
id: 8,
title: 'Там, где кончается волшебство',
author: 'Грэм Джойс',
description: 'Описание...',
price: 999,
image:  require('../assets/images/books/8.jpg'),
age: 16,
genre: 'Современная зарубежная проза, Фантастический зарубежный боевик'
}
*/
