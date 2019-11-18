<template>
  <div class="home-container">
    <div class="upper-container">
      <img class="home-logo" src="@/assets/twidere-logo.png" alt="twidere logo">
      <div class="title-container">
        <h1 class="title-text">Twidere</h1>
        <span>A twitter clone to easen the life of twitter superusers</span>
        <button @click="$router.push('/stats')" class="call-to-action">
          I want to know more!
        </button>
      </div>
    </div>
    <hr>
    <div class="index-container">
      <h2>Not your first time?</h2>
      <small>Click on the section you would like to read again</small>
      <div class="index-content">
        <router-link to="/stats" class="index-item">Stats</router-link>
        <router-link to="/design" class="index-item">Design</router-link>
        <router-link to="/features" class="index-item">Features</router-link>
        <router-link to="/connectivity" class="index-item">Connectivity</router-link>
        <router-link to="/performance" class="index-item">Performance</router-link>
        <router-link to="/static-analysis" class="index-item">Static analysis</router-link>
        <router-link to="/security" class="index-item">Security</router-link>
        <router-link to="/threading" class="index-item">Threading</router-link>
        <router-link to="/storage" class="index-item">Storage</router-link>
        <router-link to="/bugs" class="index-item">Bugs</router-link>
      </div>
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
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.upper-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  background-image: linear-gradient(10deg, #e2ba2aaa, #f08827aa);
  background-color: #f08827;
  margin-top: 16px;
  transition: background-color .24s ease;
}

.call-to-action:hover {
  background-color: #fbee31;
}

hr {
  width: 80%;
}

.index-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
}

.index-container small {
  font-size: 1;
  color: gray;
}

.index-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.index-item {
  width: fit-content;
  margin: 4px 8px;
}
</style>
