<template>
  <div>
    <h1>Performance</h1>
    <div class="images-container">
      <img src="@/assets/images/twidere-dist.png" alt="">
      <img src="@/assets/images/twitter-dist.png" alt="">
      <img src="@/assets/images/materialistic-dist.png" alt="">
      <img src="@/assets/images/profiling-startup.png" alt="profiling-start">
      <img src="@/assets/images/profiling-valley.png" alt="profiling-valley">
      <span>
        Hi, please check the report! We still have left some things pending to add to the frontend, but they are on the
        <a target="_blank" href="https://docs.google.com/document/d/1V9LABFb94B_cZapVF7_dKoF5BH4kwRNRuzIBQC-V5ps/edit?usp=sharing">report</a>
      </span>
    </div>
    <div class="whitespace"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.images-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

img {
  height: 300px;
  width: auto;
}
</style>
