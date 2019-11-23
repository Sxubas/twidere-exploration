<template>
  <div class="library-container">
    <div class="title-container" @click="showContent = !showContent">
      <h3>{{library.name}}</h3>
      <i :class="['material-icons', showContent && 'expanded']">expand_more</i>
    </div>
    <transition name="grow">
      <div class="content-container" v-if="showContent">
        <span>{{library.description}}</span>
        <h4>Code snippets</h4>
        <div class="content-image-container" v-for="image in library.images" :key="image.src">
          <img :src="require(`@/assets/${image.src}`)">
          <span class="file-path">{{image.filePath}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    library: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style scoped>
.library-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  z-index: 2;
  background-color: #2c2c2c;
  background-clip: content-box;
  transition: all 0.32s ease-in-out;
}

.title-container:hover {
  background-color: #365968;
}

.title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.32s ease-in-out;
  cursor: pointer;
  z-index: 2;
  background-color: #2c2c2c;
  background-clip: content-box;
}

.title-container h3 {
  font-size: 2rem;
  margin: 8px 0;
}

.title-container i {
  font-size: 2.4rem;
  transition: all 0.32s ease-in-out;
}

.title-container i.expanded {
  transform: rotate(-180deg)
}

.content-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  padding-bottom: 16px;
  transition: all 0.32s ease-in-out;
  z-index: 0;
}

.content-container h4 {
  margin-top: 8px;
  font-size: 1.48rem;
}

.content-image-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 16px;
}

.file-path {
  font-size: 1rem;
  margin-top: 8px;
  font-family: monospace;
}

/* Animations */

.grow-enter-active, .grow-leave-active {
  height: 400px;
}
.grow-enter, .grow-leave-to {
  height: 0;
  opacity: 0;
}
</style>
