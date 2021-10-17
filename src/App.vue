<template>
  <div class="container mx-auto px-4 md:w-2/3">
    <!-- <header /> -->
    <section class="container">
      <global-system-status />
      <systems-status />
      <open-issues />
      <timeline />
    </section>
    <!-- <footer /> -->
  </div>
</template>

<script>
import GlobalSystemStatus from './components/GlobalSystemStatus.vue'
import OpenIssues from './components/OpenIssues.vue'
import SystemsStatus from './components/SystemsStatus.vue'
import Timeline from './components/Timeline.vue'

export default {
  name: 'App',
  components: {
    GlobalSystemStatus,
    SystemsStatus,
    OpenIssues,
    Timeline,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
