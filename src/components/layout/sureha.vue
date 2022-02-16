<script setup lang="ts">
import router from "../../router";
import { surehData, quranPages } from "../../assets/quranMetadata";

const quranPagesIndex = quranPages.map((page) => {
  return +surehData[page[0]][0] + page[1] - 1;
});
///////////////////////// going to each sureh function

function gotoSura(i: number) {
  console.log(surehData[i][0]);
  console.log(quranPagesIndex[1]);
  for (let j = 0; j < quranPagesIndex.length; j++) {
    if (quranPagesIndex[j] > +surehData[i][0]) {
      router.push(`/Quran/${j}`);
      break;
    }
  }
}
</script>

<template>
  <section>
    <div v-for="(item, i) in surehData" class="sureha" @click="gotoSura(i)">
      <span>{{ item[4] }}</span>
      <span>{{ item[6] }}</span>
      <span>{{ item[7] }}</span>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
div {
  width: 100px;
  border: 5px solid green;
  padding: 15px;
  margin: 20px;
}

.sureha {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
