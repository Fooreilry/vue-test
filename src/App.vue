<template>
  <div class="app">
    <div class="app__conteiner">
      <navbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
@import url('@/assets/fonts/font.css');
body{
  font-size: 18px;
  font-style: italic;
  line-height: 32px;
  color: #ffffff;
  font-family: 'ABeeZee', sans-serif;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>