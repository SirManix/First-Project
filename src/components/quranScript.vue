<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { quranPages, surehData } from "../assets/quranMetadata";
import { quranArray } from "../assets/search";
/////////////////// get pages from quranpages array
let pageNumber: number = 1;
const selectPage = function (pageNumber: number) {
  const start = quranPages[pageNumber];
  let end: number[] = [];
  if (pageNumber !== quranPages.length) {
    end = quranPages[pageNumber + 1];
  }
  //TODO - implement else for the last page
  return { start, end };
};
/////////////// get index of each page from quranArray
const getIndexOfPage = function (start: number[], end: number[]) {
  const startIndex = +surehData[start[0]][0] + start[1] - 1;
  const endIndex = +surehData[end[0]][0] + end[1] - 1;
  return { startIndex, endIndex };
};
//////slice the main array
const getEachPageAyeh = function (startIndex: number, endIndex: number) {
  return quranArray.slice(startIndex, endIndex);
};
/////////////// get each page ayeh
const quranByPages: string[][] = [[]];
const converToPages = function (pageNumber: number) {
  const page = selectPage(pageNumber);
  const indexes = getIndexOfPage(page.start, page.end);
  const ayeh = getEachPageAyeh(indexes.startIndex, indexes.endIndex);
  quranByPages.push(ayeh);
};
for (let i = 0; i < quranPages.length - 1; i++) {
  converToPages(i);
}
console.log(quranByPages);
/////////////////////////////////////////////// params
const route = useRoute();
const router = useRouter();
console.log(route);
console.log(router);
if (+route.params.id < quranPages.length && +route.params.id > 0) {
  router.push(`/Quran/${+route.params.id}`);
} else {
  router.replace("/notFound");
}
//////////////////////////////////////////// change page btns
const nextPage = function () {
  if (+route.params.id < 605) {
    router.push(`/Quran/${+route.params.id + 1}`);
  } else {
    router.replace("/notFound");
  }
};
const priviousPage = function () {
  if (+route.params.id < 605) {
    router.push(`/Quran/${+route.params.id - 1}`);
  } else {
    router.replace("/notFound");
  }
};
///////////search page
let searchedPage: number = 0;
const searchPage = function (searchedPage: number) {
  if (searchedPage < quranPages.length && searchedPage > 0) {
    router.push(`/Quran/${searchedPage}`);
  } else {
    router.replace("/notFound");
  }
};
//////////////////////////////////////////////////////////////
</script>

<template>
  <div>page : {{ $route.params.id }}</div>
  <ul>
    <li v-for="page in quranByPages[+$route.params.id]">{{ page }}</li>
  </ul>
  <div>
    <button v-if="+$route.params.id > 1" @click="priviousPage">صفحه قبل</button>
    <input
      type="text"
      v-model="searchedPage"
      placeholder="صفحه مورد نظر را وارد کنید"
    />
    <button @click="searchPage(searchedPage)">جستجو</button>
    <button v-if="+$route.params.id < 604" @click="nextPage">صفحه بعد</button>
  </div>
</template>
