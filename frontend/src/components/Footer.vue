<template>
  <footer class="footer">
    <div class="footer-text">
      © 2021 Бадрединов Эльдар. All Rights Reserved.
    </div>

    <div class="footer-content-right">

      <a href="https://vk.com"><img src="../assets/images/vk.png" class="icon-style" alt="vk icon"></a>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
html, body{
  height: 100%;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #000000;
}

.footer-text {

  color: white;
  font-size: 15px;
  padding-left: 40px;
  margin-top:20px;
  float: left;
  word-spacing: 10px;
}

.footer-content-right {

  padding-right:40px;
  margin-top:10px;
  float:right;
}

.icon-style {

  height:30px;
  margin-left:20px;
  margin-top:5px;

}

.icon-style:hover {

  height:40px;
}

</style>