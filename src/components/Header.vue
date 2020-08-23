<template>
  <header>
    <span v-html="formatFixer(logo)"></span><small>v.0.0.1</small>
    <span class="caret">
      &block;
    </span>
  </header>
</template>

<script>
import { logo } from "@/assets/constants.js";
import { formatFixer } from "@/assets/utils.js";
/* eslint-disable no-useless-escape */
export default {
  name: "Header",
  setup() {
    return {
      formatFixer,
      logo
    };
  }
};
</script>

<style lang="scss">
// header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   background-color: rgb(26, 27, 27);
// }
</style>
