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

export default {
  name: 'Status',
  components: {
    GlobalSystemStatus,
    SystemsStatus,
    OpenIncidents,
    Timeline,
  },
  data: function() {
    return {
      workerUrl: process.env.VUE_APP_WORKER_URL,
      systems: [],
      incidents: [],
    }
  },
  created() {
    this.getSystems()
    this.getIncidents()
  },
  methods: {
    getSystems() {
      fetch(this.workerUrl + '/system')
      .then(response => response.json())
      .then(data => {
        this.systems = data
      })
      .catch(function() {

      })
    },
    getIncidents() {
      fetch(this.workerUrl + '/incident')
      .then(response => response.json())
      .then(data => {
        this.incidents = data
      })
      .catch(function() {

      })
    }
  }
}
</script>
