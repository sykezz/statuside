<template>
  <global-system-status :systems="systems" />
  <systems-status :systems="systems" />
  <open-incidents :incidents="incidents" />
  <timeline :incidents="incidents" />
</template>

<script>
import GlobalSystemStatus from './components/GlobalSystemStatus.vue'
import OpenIncidents from './components/OpenIncidents.vue'
import SystemsStatus from './components/SystemsStatus.vue'
import Timeline from './components/Timeline.vue'
import demo_data from './demo'

export default {
  name: 'Demo',
  components: {
    GlobalSystemStatus,
    SystemsStatus,
    OpenIncidents,
    Timeline,
  },
  data: function() {
    return {
      systems: demo_data.demo_systems,
      incidents: demo_data.demo_incidents,
    }
  },
  created() {
    //
  },
  methods: {
    //
  }
}
</script>
