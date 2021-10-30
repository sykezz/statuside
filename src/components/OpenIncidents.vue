<template>
  <h2 class="text-2xl mt-6 mb-3">Scheduled Maintenance</h2>
  <div class="flex flex-col rounded-md bg-white border border-gray-200 shadow" v-if="openIncidents.length !== 0">
    <div class="open-incidents" v-for="(incident, i) in openIncidents" :key="i">
      <div class="flex justify-between">
        <div class="flex flex-row">
          <span class="mr-2 text-lg font-medium">{{ incident.name }}</span>
          <status-level :level="incident.level" />
        </div>
        <div>
          <span class="rounded-xl ml-1 py-1 px-2 bg-blue-500 text-white text-xs" v-for="(sys, i) in incident.systems" :key="i">{{ sys }}</span>
        </div>
      </div>
      <div class="mt-1 text-xs text-gray-500">{{ parseDate(incident.timestamp) }} - {{ parseDate(incident.timestamp2) }} UTC</div>
      <div class="mt-3 text-sm text-gray-600">{{ incident.activities[0].message }}</div>
    </div>
  </div>
  <span class="text-gray-600" v-else>No upcoming maintenance scheduled.</span>
</template>

<script>
import StatusLevel from './StatusLevel.vue'
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default {
  name: 'OpenIncidents',
  components: 
  {
    StatusLevel,
  },
  props: {
    incidents: Object,
  },
  data: function() {
    return {
      openIncidents: [],
    }
  },
  watch: {
    incidents() {
      this.openIncidents = this.incidents.filter(item => item.maintenance == true && item.open == true)
    }
  },
  created() {
    this.openIncidents = this.incidents.filter(item => item.maintenance == true && item.open == true)
  },
  methods: {
    parseDate(date) {
      return dayjs.unix(date).utc().format('MMM D, HH:MM')
    },
  }
}
</script>
