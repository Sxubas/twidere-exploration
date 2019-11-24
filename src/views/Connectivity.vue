<template>
  <div class="connectivity-container">
    <h1>Connectivity</h1>
    <span>
      We tested eventual connectivity by creating a set of scenarios that use the main features of the app.
      For each scenario we will describe the <b>app's response</b>, <b>good-practices</b>, the related <b>anti-pattern</b> and some <b>comments</b> on how it could be better.
    </span>
    <div class="scenarios-container">
      <div v-for="scenario in scenarios" :key="scenario.name">
        <hr>
        <scenario :scenario="scenario"/>
      </div>
    </div>
  </div>
</template>

<script>
import Scenario from '@/components/ConnectivityScenario.vue';
import scenarios from '@/assets/data/connectivityScenarios';

export default {
  components: {
    Scenario,
  },
  data() {
    return {
      scenarios,
    };
  },
};
</script>

<style scoped>
.connectivity-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}

.scenarios-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 4px;
}

hr {
  width: 100%;
}
</style>
