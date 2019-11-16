<template>
  <div id="outer-nav-container" v-if="!isHome">
    <div id="nav-container">
      <router-link class="adjacent-section-link" :to="`/${previousSection}`">{{previousSection}}</router-link> |
      <span class="current-section-text">{{currentSection}}</span>
      <template v-if="nextSection">
        | <router-link class="adjacent-section-link" :to="`/${nextSection}`">{{nextSection}}</router-link>
      </template>
    </div>

    <!-- fixed buttons -->
    <div class="nav-arrow left" @click="previous">
      <img src="@/assets/nav-arrow-gray.png" alt="arrow">
    </div>
    <div class="nav-arrow right" @click="next">
      <img src="@/assets/nav-arrow-gray.png" alt="arrow">
    </div>
  </div>
</template>

<script>
import sectionOrder from '@/sectionOrder';

export default {
  methods: {
    next() {
      this.$router.push(this.nextSection);
    },
    previous() {
      this.$router.push(this.previousSection);
    },
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
    previousSection() {
      const currentIndex = sectionOrder.indexOf(this.$route.name);
      return sectionOrder[currentIndex - 1];
    },
    currentSection() {
      const currentIndex = sectionOrder.indexOf(this.$route.name);
      return sectionOrder[currentIndex];
    },
    nextSection() {
      const currentIndex = sectionOrder.indexOf(this.$route.name);
      return sectionOrder[currentIndex + 1];
    },
  },
};
</script>

<style scoped>
#nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 8px 256px;
  box-sizing: border-box;
  background-color: rgb(64, 64, 64);
  z-index: 2;
}

.adjacent-section-link{
  flex: 1;
  font-size: 1.24rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  margin: 2px 8px;
  text-align: center;
  text-transform: capitalize;
}

.adjacent-section-link:visited {
  color: inherit;
}

.current-section-text {
  flex: 1;
  margin: 2px 8px;
  font-size: 2.48rem;
  color: #06bbd6;
  text-align: center;
  text-transform: capitalize;
}

.nav-arrow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100%;
  width: auto;
  transition: all 166ms ease-out;
  padding: 8px;
  cursor: pointer;
}

.nav-arrow img {
  height: 10%;
  width: auto;
}

.nav-arrow:hover {
  background: rgba(245, 245, 245, 0.24);
  /* filter: brightness(200%); */
}

.nav-arrow.left {
  left: 0;
}

.nav-arrow.left img {
  transform: rotate(180deg);
}

.nav-arrow.right {
  right: 0;
}

</style>
