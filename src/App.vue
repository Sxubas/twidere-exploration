<template>
  <div id="app-container">
    <div id="content-container">
      <router-view/>
    </div>
    <navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {

    };
  },
};
</script>

<style>
html, body, #app-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c2c2c;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: calc(100vw - 18px);
  height: 100vh;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  font-family: 'Ubuntu Mono', monospace;
  margin: 0;
}

h1 {
  font-size: 3.2rem;
}

#content-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  height: fit-content;
  padding-bottom: calc(100px + 2*8px);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1.08rem;
  border-radius: 8px;
  padding: 4px 8px;
  border: 0;
  background: linear-gradient(10deg, #7dd9e5, #7db3e5);
  cursor: pointer;
}
</style>
