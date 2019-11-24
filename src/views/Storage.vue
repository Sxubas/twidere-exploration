<template>
  <div class="storage-container">
    <h1>Storage</h1>
    <span>
      In this section we will detail the methods the app uses to store data locally in the phone.
      Inspecting the code manually, we discovered that the app uses two methods for local storage:
      <b>SQLite</b> & <b>LRU Cache</b>
    </span>
    <div class="storage-methods-container">
      <div class="storage-method-external-container" v-for="storageMethod in storage" :key="storageMethod.name">
        <library :library="storageMethod"/>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import storage from '@/assets/data/storage';
import Library from '@/components/Library.vue';

export default {
  components: {
    Library,
  },
  data() {
    return {
      storage,
    };
  },
};
</script>

<style scoped>
.storage-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 16px;
}

.storage-methods-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.storage-method-external-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: #2c2c2c;
  background-clip: content-box;
}

.storage-method-external-container hr {
  width: 100%;
  margin: 0px 0;
  z-index: 2;
  background-color: #2c2c2c;
  background-clip: content-box;
}

-container {

}
</style>
