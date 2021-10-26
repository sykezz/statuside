<template>
  <div>
    <h2 class="text-2xl mt-6 mb-3">Recent Incidents</h2>
    <div class="flex flex-col">

      <div class="incidents-timeline" v-for="(day, i) in days" :key="i">
        <h3 class="text-xl mb-4">{{ day.string }}</h3>
        <div class="flex flex-col p-4 rounded-md bg-white border border-gray-200 shadow" v-if="day.incidents.length !== 0">
          <div class="incident" v-for="(incident, i) in day.incidents" :key="i">
            <div class="flex justify-between">
              <span class="flex text-lg mb-2 font-medium">
                <span class="mr-1">{{ incident.name }}</span>
                <case-status class="mr-1" :open="incident.open" />
                <status-level :level="incident.level" />
              </span>
              <div>
                <span class="rounded-xl ml-1 py-1 px-2 bg-blue-500 text-white text-xs" v-for="(sys, i) in incident.systems" :key="i">{{ sys }}</span>
              </div>
            </div>
            <div class="pb-4 text-sm text-gray-600">
              <div class="pb-2" v-for="(activity, i ) in incident.activities" :key="i">
                <span class="font-bold">{{ activity.status }} - </span>
                <span>{{ activity.message }}</span>
                <div class="text-xs text-gray-500">{{ parseDate(activity.timestamp) }} UTC</div>
              </div>
            </div>
          </div>
        </div>
        <span class="text-gray-600" v-else>No incidents reported</span>
      </div>

    </div>
  </div>
</template>

<script>
import StatusLevel from './StatusLevel.vue'
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import CaseStatus from './CaseStatus.vue'

dayjs.extend(utc)

export default {
  name: 'Timeline',
  components: {
    StatusLevel,
    CaseStatus
  },
  props: {
    incidents: Object,
  },
  data: function() {
    return {
      days: [],
    }
  },
  created() {
    let date = dayjs().utc()

    for (let i = 0; i < 15; i++) {
      let d = date.subtract(i, 'day')
      let day = d.format('YYYY-MM-DD')
      this.days = [].concat(this.days, {
        date: day,
        string: d.format('MMM D, YYYY'),
        incidents: this.getDayIncidents(day)})
    }
  },
  methods: {
    getDayIncidents(date) {
      let incidents = this.incidents.filter(item => item.date.indexOf(date) !== -1)
      return incidents
    },
    parseDate(date) {
      return dayjs(date).utc().format('MMM D, HH:MM')
    },
  }
}
</script>
