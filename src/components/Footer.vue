<template>
  <footer>
    Created by: <a href="https://yasio.pl" target="_blank">yasio.pl</a> as a
    part of
    <a href="https://hacktoberfest.digitalocean.com/" target="_blank"
      >Hacktoberfest</a
    >
    by
    <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a>
  </footer>
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
footer {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 100vw;
  font-size: 16px;
  background-color: rgb(26, 27, 27);
}
</style>
