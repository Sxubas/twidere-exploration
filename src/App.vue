<template>
  <div id="app-container" :class="{'no-scroll': hideAnimationScrolling}">
    <div id="content-container" :class="{small: !isNavRoute || hideAnimationScrolling}">
      <transition :name="transition" mode="out-in">
        <router-view/>
      </transition>
      <div class="whitespace"></div>
    </div>
    <navigation />
  </div>
</template>

<script>
import sectionOrder from '@/sectionOrder';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      transition: '',
      hideAnimationScrolling: true,
    };
  },
  mounted() {
    if (this.isNavRoute) {
      this.hideAnimationScrolling = false;
    }
  },
  computed: {
    isNavRoute() {
      return this.$route.name !== 'home';
    },
  },
  watch: {
    $route(to, from) {
      const toIndex = sectionOrder.indexOf(to.name);
      const fromIndex = sectionOrder.indexOf(from.name);

      this.transition = 'slide-right';
      if (toIndex > fromIndex) {
        this.transition = 'slide-left';
      }

      this.hideAnimationScrolling = true;
      setTimeout(() => { this.hideAnimationScrolling = false; }, 2 * 280);
    },
  },
};
</script>

<style>
html, body, #app-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c2c2c;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: calc(100vw - 18px);
  height: 100vh;
  margin: 0;
  padding: 0;
  user-select: none;
}

#content-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  height: fit-content;
}

#content-container.small {
  min-height: 100vh;
}

.whitespace {
  height: calc(100px + 2*8px);
}

h1, h2, h3, h4, h5 {
  font-family: 'Ubuntu Mono', monospace;
  margin: 0;
}

h1 {
  font-size: 3.2rem;
}

a {
  color: #06bbd6;
}

b, h1 {
  color: #06bbd6;
}

button {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1.08rem;
  border-radius: 8px;
  padding: 4px 8px;
  border: 0;
  background: linear-gradient(10deg, #7dd9e5, #7db3e5);
  cursor: pointer;
  transition: all .16s ease-in-out;
}

/* Animations */
.slide-left-enter-active, .slide-left-leave-active {
  transition: all .28s ease-in-out;
}
.slide-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.28s ease-in-out;
}
.slide-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.no-scroll {
  overflow: hidden;
}
</style>
