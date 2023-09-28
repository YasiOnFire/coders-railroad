<template>
  <div class="home">
    <p>
      ----------------------------------------------------------------------------<br />
      | Attach your cart by submitting a pull request on
      <a href="https://github.com/YasiOnFire/coders-railroad" target="_blank"
        >GitHub</a
      >.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
      ----------------------------------------------------------------------------<br />
      | <router-link to="/about" class="brn">About</router-link> |
      <a
        href="#"
        class="brn"
        @click.prevent="toggleYear(2023)"
        title="Switch to Hacktoberfest 2023 Train"
        >2023</a
      >
      |
      <a
        href="#"
        class="brn"
        @click.prevent="toggleYear(2022)"
        title="Switch to Hacktoberfest 2022 Train"
        >2022</a
      >
      |
      <a
        href="#"
        class="brn"
        @click.prevent="toggleYear(2021)"
        title="Switch to Hacktoberfest 2021 Train"
        >2021</a
      >
      |
      <a
        href="#"
        class="brn"
        @click.prevent="toggleYear(2020)"
        title="Switch to Hacktoberfest 2020 Train"
        >2020</a
      >
      |
      <input
        v-model="search"
        type="search"
        class="search"
        placeholder="Search by name or text"
      />
      | COUNT: {{ formatCount(userCarts.length) }} |
      <br />
      ----------------------------------------------------------------------------<br />
    </p>
    <p id="train" class="train-wrp">
      <span v-html="formatFixer(locomotive(year))"></span>
      <span
        v-for="(el, idx) in filteredData"
        :key="idx"
        class="cart"
        :title="el.name"
        :data-name="`Cart by: ${el.name}`"
        v-html="messageInject(formatFixer(carts[el.cart]), el)"
      ></span>
      <span v-html="formatFixer(end)"></span>
    </p>
  </div>
</template>

<script>
import { carts, end, locomotive } from "@/assets/constants.js";
import data from "@/assets/data.json";
import data2020 from "@/assets/data2020.json";
import data2021 from "@/assets/data2021.json";
import data2022 from "@/assets/data2022.json";
import { encodeHTML, formatFixer } from "@/assets/utils.js";
import { computed, ref } from "vue";

export default {
  name: "Home",
  setup() {
    const year = ref(2022);

    const messageInject = (val, data) => {
      return (val += `<span><a href="https://github.com/${
        data.name
      }" target="_blank">${encodeHTML(data.text)}</a></span>`);
    };

    const formatCount = val => {
      return val.toString().padStart(6, "0");
    };

    const search = ref("");
    const userCarts = ref([]);
    userCarts.value = data;

    const filteredData = computed(() => {
      return search.value?.trim() !== ""
        ? userCarts.value.filter(
            el =>
              el.text.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ||
              el.name.toLowerCase().indexOf(search.value.toLowerCase()) > -1
          )
        : userCarts.value;
    });

    const toggleYear = y => {
      year.value = y;
      userCarts.value =
        year.value === 2021
          ? data2021
          : year.value === 2020
          ? data2020
          : year.value === 2022
          ? data2022
          : data;
    };

    return {
      filteredData,
      formatCount,
      search,
      messageInject,
      userCarts,
      carts,
      end,
      formatFixer,
      locomotive,
      toggleYear,
      year
    };
  }
};
</script>

<style lang="scss">
@import "../assets/_mixins.scss";

.train-wrp {
  display: inline-flex;
  width: calc(100vw - 40px);
  overflow-x: auto;
  overflow-y: hidden;
  background-color: rgb(26, 27, 27);
  padding: 20px 20px 20px 0;
}
.search {
  background-color: transparent;
  font-family: "Fira Code", monospace;
  border: none;
  border-bottom: solid 3px var(--text-color);
  color: rgb(218, 233, 226);
  @include fluid-font-size(20px, 28px, $vp-small, $vp-large);
  @include fluid-line-height(24px, 32px, $vp-small, $vp-large);
}
pre {
  font-family: "Fira Code", monospace;
}
.cart {
  position: relative;
  span {
    position: absolute;
    @include fluid-bottom(64px, 72px, $vp-small, $vp-large);
    left: calc(50% - 7px);
    transform: translateX(-50%);
    white-space: nowrap;
  }
  &:after {
    content: attr(data-name);
    position: absolute;
    @include fluid-bottom(60px, 68px, $vp-small, $vp-large);
    width: 100%;
    height: 10px;
    left: 0;
    color: #fff;
    font-size: 10px;
    display: flex;
    z-index: 9;
    justify-content: center;
    opacity: 0.6;
  }
}
</style>
