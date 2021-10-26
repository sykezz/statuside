<template>
  <global-system-status />
  <systems-status />
  <open-incidents />
  <timeline />
</template>

<script>
import GlobalSystemStatus from './components/GlobalSystemStatus.vue'
import OpenIncidents from './components/OpenIncidents.vue'
import SystemsStatus from './components/SystemsStatus.vue'
import Timeline from './components/Timeline.vue'

export default {
  name: 'Status',
  components: {
    GlobalSystemStatus,
    SystemsStatus,
    OpenIncidents,
    Timeline,
  }
}
</script>
