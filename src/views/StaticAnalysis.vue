<template>
  <div class="static-analysis-container">
    <h1>Static analysis</h1>
    <span>If you cant see the chart, please </span>
    <button @click="refresh">Refresh</button>
    <div class="vis-container" ref="tableauContainer"></div>
  </div>
</template>

<script>
import TableauVue from 'vue-tableau/src/components/Tableau.vue';
import Vue from 'vue';

export default {
  methods: {
    refresh() {
      window.location.reload();
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const Tableau = Vue.extend(TableauVue);
    const instance = new Tableau({
      propsData: {
        url: 'https://public.tableau.com/views/issues-vis/Patternshistory?:display_count=y&publish=yes&:origin=viz_share_link',
        height: 600,
        width: '100%',
      },
    });
    instance.$mount();
    this.$refs.tableauContainer.appendChild(instance.$el);
    /* console.log('mount', instance); */
  },
};
</script>

<style scoped>
.static-analysis-container {
  width: 100%;
}

.vis-container {
  /* height: 900px; */
}
</style>
