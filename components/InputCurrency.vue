<script setup lang="ts">
const model = defineModel<number | string>();

watch(model, () => {
  model.value = formatIDR(toNumber(model.value!) as number);
  // console.log("watch", formatIDR(toNumber(model.value!) as number));
});
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"];
const checkKey = (e: KeyboardEvent) => {
  if (numbers.indexOf(e.key) != -1) return;
  e.preventDefault();
  return false;
};
</script>

<template>
  <UInput v-model="model" @keydown="checkKey" />
</template>
