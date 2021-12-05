<template>
  <section class = "authorization_vue">
    <div class="login-box">
      <div class="row">
        <img
            src="../assets/images/logo.png" alt="Logo"
        />
      </div>
      <h2>{{this.info}}</h2>
      <form>
        <div class="user-box">
          <input type="text"  v-model="username"  name="" required="" class="username"/>
          <label><i class="Username"></i>
            Username
          </label>
        </div>
        <div class="user-box">
          <input type="password"  v-model="password" name="" required="" class="password"/>
          <label><i class="Unlock"></i>
            Password
          </label>
        </div>
      </form>
        <button type="submit" class = "submit-button" @click = "authorization()" >Вход</button>
    </div>
  </section>
</template>


<script>
export default {

  name: "Authorization",
  beforeCreate: function() {
    document.body.className = 'auth';
  },
    data() {
        return {
            userId: null,
            username: null,
            password: null,
            info: 'Введите данные',
            correct: false
        }
    },
    methods: {
        authorization(){
            //тут добавление в бд корзины пользователя сделать
            const params = {
                username: this.username, password: this.password
            }
            this.$http.post('/user', params)
            .then(response => this.checkCorrect(response.data.userId))

        },
        checkCorrect(data){
            if(data !== -1)
            {
                this.userId = data
                this.correct = true
                this.$router.push('MainPage')
                this.info = "Успешный вход"
            }
            else
            {
                this.info = "Неверные данные, повторите попытку"
            }
            console.log(this.correct)
        }
    },
}
</script>

<style scoped src="../assets/styles/style.css">
</style>
