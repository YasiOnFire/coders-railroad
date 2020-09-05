<template>
  <div class="home">
    <p>
      ------------------------------------------------------------<br />
      | Attach your cart by submitting a pull request on
      <a href="https://github.com/YasiOnFire/coders-railroad" target="_blank"
        >GitHub</a
      >. |<br />
      ------------------------------------------------------------<br />
      | <router-link to="/about" class="brn">Learn More</router-link> |
      <input
        v-model="search"
        type="search"
        class="search"
        placeholder="Search by name or text"
      />
      | # of carts: {{ formatCount(userCarts.length) }} |
      <br />
      ------------------------------------------------------------<br />
    </p>
    <p id="train" class="train-wrp">
      <span v-html="formatFixer(locomotive)"></span>
      <span
        v-for="(el, idx) in filteredData"
        :key="idx"
        class="cart"
        v-html="messageInject(formatFixer(carts[el.cart]), el)"
      ></span>
      <span v-html="formatFixer(end)"></span>
    </p>
  </div>
</template>

<script>
import data from "@/assets/data.json";
import { formatFixer, encodeHTML } from "@/assets/utils.js";
import { locomotive, end, carts } from "@/assets/constants.js";
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
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

    return {
      filteredData,
      formatCount,
      search,
      messageInject,
      userCarts,
      carts,
      end,
      formatFixer,
      locomotive
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
}
</style>
