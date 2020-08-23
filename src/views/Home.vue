<template>
  <div class="home">
    <p>
      ------------------------------------------------------------<br />
      | Attach your cart by submitting a pull request on
      <a href="#">GitHub</a>. |<br />
      ------------------------------------------------------------<br />
      | <router-link to="/about" class="brn">Learn More</router-link> |
      <input
        type="search"
        class="search"
        placeholder="Search cart by name"
        @input="search"
      />
      | # of carts: {{ data.length }} |
      <br />
      ------------------------------------------------------------<br />
    </p>
    <p id="train" class="train-wrp">
      <span v-html="formatFixer(locomotive)"></span>
      <span
        v-for="(el, idx) in data"
        :key="idx"
        class="cart"
        v-html="messageInject(formatFixer(carts[el.cart]), el)"
      ></span>
      <span v-html="formatFixer(end)"></span>
    </p>
  </div>
</template>

<script>
import { data } from "@/assets/data.js";
import { formatFixer } from "@/assets/utils.js";
import { locomotive, end, carts } from "@/assets/constants.js";

export default {
  name: "Home",
  setup() {
    const messageInject = (val, data) => {
      return (val += `<span><a href="https://github.com/${data.name}" target="_blank">${data.text}</a></span>`);
    };
    const search = event => {
      console.log(event);
    };
    return {
      search,
      messageInject,
      data,
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
