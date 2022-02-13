<script setup lang="ts">
import router from "../../router";

const myRouter = (dist: string) => router.push(dist);
</script>

<template>
  <nav>
    <div id="logo">
      <router-link to="/Home">قرآن فراوین </router-link>
    </div>
    <div>
      <button @click="myRouter('/setting')">تنظیمات</button>
    </div>
    <div>
      <button @click="myRouter('/Quran/1')">متن قرآن</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 10vw;
  width: auto;
  background: rgb(12, 231, 67);
}
button {
  display: inline;
  float: right;
  margin: 5px;
}
#id {
  display: inline;
  float: left;
}
</style>
