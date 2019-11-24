<template>
  <div class="feature-container">
    <h2>{{feature.name}}</h2>
    <img :src="require(`@/assets/${feature.imgSrc}`)">
    <div class="content-container" v-if="isDescription">
      <span>{{feature.description}}</span>
    </div>
    <div class="content-container sub-features-container" v-else>
      <div class="sub-feature-container" v-for="subFeature in feature.features" :key="subFeature.name">
        <b>{{subFeature.name}}: </b>
        <span>{{subFeature.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDescription() {
      return !this.feature.features;
    },
  },
};
</script>

<style scoped>
.feature-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  flex: 1;
  margin: 8px 16px;
  max-width: 320px;
  border: 1px gray solid;
  border-right: 0;
  border-left: 0;
}

.feature-container img {
  padding: 8px 0;
  min-width: 216px;
  max-width: 270px;
  box-sizing: content-box;
  width: 100%;
}

.feature-container h2 {
  text-align: center;
  text-transform: capitalize;
}

.content-container {
  margin-top: 8px;
}

.sub-features-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
