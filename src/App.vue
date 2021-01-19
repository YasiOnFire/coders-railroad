<template>
  <div>
    <div class="lines"></div>
    <Header />
    <transition name="fade" appear>
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted } from "vue";
export default {
  components: {
    Header,
    Footer
  },
  setup() {
    onMounted(() => {
      document.body.addEventListener("wheel", event => {
        document.getElementById("train").scrollLeft += event.deltaY * 2;
      });
    });
  }
};
</script>

<style lang="scss">
@import "assets/_mixins.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
:root {
  --text-color: rgb(0, 255, 98);
}

::selection {
  color: rgb(26, 27, 27);
  background-color: var(--text-color);
}

::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border: 1px solid #333;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #474545;
}
::-webkit-scrollbar-thumb:active {
  background: #474545;
}
::-webkit-scrollbar-track {
  background: rgb(26, 27, 27);
  border: 0px none #ffffff;
  border-radius: 53px;
}
::-webkit-scrollbar-track:hover {
  background: rgb(44, 46, 46);
}
::-webkit-scrollbar-track:active {
  background: rgb(44, 46, 46);
}
::-webkit-scrollbar-corner {
  background: transparent;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

html {
  padding: 10px;
  @include fluid-font-size(20px, 28px, $vp-small, $vp-large);
  @include fluid-line-height(24px, 32px, $vp-small, $vp-large);
}

.btn-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}

body {
  background-color: rgb(26, 27, 27);
  color: var(--text-color);
  text-shadow: 0 0 5px var(--text-color);
  animation-name: textshadow;
  animation-duration: 0.1s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-iteration-count: infinite;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  font-family: "Fira Code", monospace;
  // overflow-x: auto;
  overflow-x: hidden;
  // overflow-y: hidden;
  width: 100vw;
  // padding-top: 9vw;
  padding-bottom: 100px;
}

a {
  color: rgb(218, 233, 226);
}

.lines {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
  opacity: 0.4;
  will-change: opacity;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
    background-size: 100% 4px;
  }
}

.caret {
  opacity: 1;
  transition: all 0.3s linear;
  animation-name: opacity;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes textshadow {
  0% {
    text-shadow: 0 0 5px var(--text-color);
  }
  40% {
    text-shadow: 0 0 5.5px var(--text-color);
  }
  70% {
    text-shadow: 0 0 4px var(--text-color);
  }
  100% {
    text-shadow: 0 0 5px var(--text-color);
  }
}
</style>
