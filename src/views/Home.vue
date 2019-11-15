<template>
  <div id="home-container">
    <img class="home-logo" src="@/assets/twidere-logo.png" alt="twidere logo">
    <div class="title-container">
      <h1 class="title-text">Twidere</h1>
      <span>A twitter clone to easen the life of twitter superusers</span>
      <button @click="$router.push('/design')" class="call-to-action">
        I want to know more!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped>
#home-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.home-logo {
  height: 40%;
  min-height: 320px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.title-text {
  font-size: 7.2rem;
  margin-left: -4px;
}

.call-to-action {
  background: linear-gradient(10deg, #e2ba2a, #f08827);
  margin-top: 16px;
}
</style>
