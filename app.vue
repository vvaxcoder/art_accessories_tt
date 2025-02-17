<script setup lang="ts">
import { mainModuleStore } from "@/store/main";

const main = mainModuleStore();

main.fetchPosts();
</script>

<template>
<div class="flex justify-center w-full h-full">
  <NuxtPage />
</div>
</template>
