<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps([
  "title",
  "id",
  "value",
  "type",
  "placeholder",
  "cssProp",
  "type",
]);

const input = ref();

function change() {
  const root = document.querySelector("html");
  root.style.setProperty("--hs-" + props.cssProp, input.value.value);
}

onMounted(() => {
  const root = document.querySelector("html");
  let hsDuration = getComputedStyle(root).getPropertyValue(
    "--hs-" + props.cssProp
  );

  hsDuration = hsDuration.replace(" ", "");
  input.value.value = hsDuration;
});
</script>

<template>
  <label>
    <span class="mb-1 flex text-slate-400 text-sm">{{ title }}</span>
    <input
      ref="input"
      :type="type"
      class="w-full rounded-md border border-slate-700 text-slate-50 bg-slate-900 p-2 outline-none focus:border-slate-500 transition-colors duration-300"
      @change="change"
    />
  </label>
</template>
