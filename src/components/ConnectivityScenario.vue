<template>
  <div class="conn-scenario-container">
    <div class="conn-scenario-content">
      <h2>
        Scenario: {{ scenario.name }}
      </h2>
      <div class="conn-content">
        <b>Response: </b><span>{{ scenario.response }}</span>
      </div>
      <div class="conn-content">
        <b>Good practice: </b><span>{{ scenario.goodPractice }}</span>
      </div>
      <div class="conn-content" v-if="scenario.antiPattern">
        <b>Related Anti-Pattern: </b><span>{{ scenario.antiPattern }}</span>
      </div>
      <div class="conn-content">
        <b>Comments: </b><span>{{ scenario.comments }}</span>
      </div>
    </div>
    <div class="conn-scenario-video">
      <small>Click on the video to play/pause it</small>
      <video :src="require(`@/assets/videos/${scenario.demoSrc}`)" controls :alt="`${scenario.name} video`"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scenario: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.conn-scenario-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.conn-scenario-content h2 {
  font-size: 2.16rem;
  margin-bottom: 8px;
}

.conn-content {
  margin: 16px 0;
}

.conn-scenario-video {
  margin-left: 8px;
  margin-top: 4px;
}

.conn-scenario-video small {
  color: lightgray;
}

.conn-scenario-video video{
  height: 440px;
  max-width: 380px;
  margin-top: 4px;
}
</style>
