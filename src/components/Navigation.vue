<template>
  <div id="outer-nav-container" v-if="!isHome">
    <div id="nav-container">
      <router-link :to="`/${previousSection}`">{{previousSection}}</router-link> |
      <span class="current-section-text">{{currentSection}}</span> |
      <router-link :to="`/${nextSection}`">{{nextSection}}</router-link>

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
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 8px;
  background-color: rgb(64, 64, 64);
  z-index: 2;
}

#nav-container a{
  font-size: 1.24rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  margin: 2px 8px;
}

#nav-container a:visited {
  color: inherit;
}

.current-section-text {
  margin: 2px 8px;
  font-size: 1.48rem;
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
