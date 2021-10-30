<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
body {
  margin:0;
  padding:0;
  font-family:sans-serif;
}
html{
  height: 100%;
  width: 100%;
}

body.auth{
  width: 100%;
  height: 100%;
  margin:0;
  padding:0;
  font-family:sans-serif;
  background: linear-gradient(to top right, black, white);
  color: #fff;
}

body.main{
  margin:0;
  padding:0;
  font-family:sans-serif;
  background: white;
  color:black;
}

.footer[data-v-40ab164b]{
  position: absolute;
  bottom: 0;
}

</style>
<script>
import ContentPage from "./components/ContentPage";
export default {
  components: {ContentPage}
}
</script>