<template>
  <div class="conn-scenario-container">
    <div class="conn-scenario-content">
      <h2>
        Scenario: {{ name }}
      </h2>
      <div>
        <b>Response: </b><span>{{ response }}</span>
      </div>
      <div>
        <b>Good practice: </b><span>{{ goodPractice }}</span>
      </div>
    </div>
    <div class="conn-scenario-video">
      <img src="@/assets/twidere-screenshot.png" alt="screenshot">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    goodPractice: {
      type: String,
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

.conn-scenario-video img{
  height: 400px;
  margin-top: 8px;
}
</style>
