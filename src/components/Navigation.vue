<template>
  <div id="outer-nav-container" v-if="!isHome">
    <div id="nav-container">
      <div class="adjacent-section-container">
        <router-link class="adjacent-section-link" :to="`/${previousSection}`">
          <i class="material-icons left">navigate_before</i>
          {{previousSection}}
        </router-link>
        <span class="adjacent-section-tooltip">Previous section</span>
      </div> |
      <span class="current-section-text">{{currentSection}}</span>
      <template v-if="nextSection">
        |
        <div class="adjacent-section-container">
          <router-link class="adjacent-section-link" :to="`/${nextSection}`">
            {{nextSection}}
            <i class="material-icons right">navigate_next</i>
          </router-link>
          <span class="adjacent-section-tooltip">Next section</span>
        </div>
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
  align-items: baseline;
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

.adjacent-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex: 1;
}

.adjacent-section-link{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.24rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  text-align: center;
  text-transform: capitalize;
  position: relative;
  transition: all 0.16s ease-in-out;
}

.adjacent-section-link:hover {
  text-shadow: 0 0 8px #06bbd6aa;
}

.adjacent-section-link:active {
  color: #a4a4a4;
  text-shadow: 0 0 8px #78c7d3aa;
}

.adjacent-section-link i {
  padding-top: 2px;
  font-size: 1.625rem;
  position: absolute;
  transition: all 0.16s ease-in-out;
}

.adjacent-section-link:hover i {
  text-shadow: 0 0 8px #06bbd6aa;
}

.adjacent-section-link:active i {
  color: #a4a4a4;
  text-shadow: 0 0 8px #78c7d3aa;
}

.adjacent-section-link i.left {
  left: -1.64rem;
}

.adjacent-section-link i.right {
  right: -1.64rem;
}

.adjacent-section-link:visited {
  color: inherit;
}

.current-section-text {
  flex: 1;
  margin: 2px 8px;
  font-size: 2.32rem;
  color: #06bbd6;
  text-align: center;
  text-transform: capitalize;
}

.adjacent-section-tooltip {
  font-size: 0.76rem;
  color: lightgray;
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
