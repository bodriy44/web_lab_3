<template>
  <section class = "authorization_vue">
    <div class="login-box">
      <div class="row">
        <img
            src="../assets/images/logo.png" alt="picture not found!"
        />
      </div>
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label><i class="Username"></i>
            Username
          </label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label><i class="Unlock"></i>
            Password
          </label>
        </div>
      </form>
      <form action="main_page.html" >
        <button type="submit" class = "submit-button">Вход</button>
      </form>
    </div>
  </section>
</template>


<script>
export default {

  name: "Authorization",
  beforeCreate: function() {
    document.body.className = 'auth';
  }
}
</script>

<style scoped src="../assets/styles/style.css">


</style>