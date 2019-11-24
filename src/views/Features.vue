<template>
  <div id="features-container">
    <h1>Features</h1>
    <span>Twidere offers a set of similar functionalities like normal twitter, but with a big plus to superusers. It allows you to:</span>
    <div class="feature-list-container">
      <feature v-for="feature in features" :feature="feature" :key="feature.name"/>
    </div>
  </div>
</template>

<script>
import Feature from '@/components/Feature.vue';
import features from '@/assets/data/features';

export default {
  components: {
    Feature,
  },
  data() {
    return {
      features,
    };
  },
};
</script>

<style scoped>
#features-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}

.feature-list-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
}
</style>
