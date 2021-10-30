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

</style>
