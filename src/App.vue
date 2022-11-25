<template>
  <div class="app">
    <div class="app__conteiner">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@1&display=swap');
body{
  background-color: #F1F9FF;
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
.app__conteiner{
  padding: 32px 32px 0;
}
</style>