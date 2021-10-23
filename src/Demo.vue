<template>
  <global-system-status />
  <systems-status />
  <open-issues />
  <timeline />
</template>

<script>
import GlobalSystemStatus from './components/GlobalSystemStatus.vue'
import OpenIssues from './components/OpenIssues.vue'
import SystemsStatus from './components/SystemsStatus.vue'
import Timeline from './components/Timeline.vue'

export default {
  name: 'Demo',
  components: {
    GlobalSystemStatus,
    SystemsStatus,
    OpenIssues,
    Timeline,
  }
}
</script>
