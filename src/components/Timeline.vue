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
                <status-level :status="incident.status" class="h-5 w-5 mr-1" />
                <span>{{ incident.name }}</span>
              </span>
              <div>
                <span class="rounded-xl ml-2 py-1 px-2 bg-blue-500 text-white text-xs" v-for="(sys, i) in incident.systems" :key="i">{{ sys }}</span>
              </div>
            </div>
            <div class="pb-4 text-sm text-gray-600">
              <p class="mb-2" v-for="(activity, i ) in incident.activities" :key="i">
                <span class="font-bold">{{ activity.status }} - </span>
                <span>{{ activity.message }}</span>
              </p>
            </div>
          </div>
        </div>
        <span v-else>No incidents reported</span>
      </div>

    </div>
  </div>
</template>

<script>
import StatusLevel from './StatusLevel.vue'
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default {
  name: 'Timeline',
  components: {
    StatusLevel
  },
  props: {
  },
  data: function() {
    return {
      incidents: [
        {
            "id": "asdasdwewet23",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "status": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-17",
            "timestamp": 1634457744,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                }
            ]
        },
        {
            "id": "asdasdwewet24",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "status": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-17",
            "timestamp": 1634462849,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                }
            ]
        },
        {
            "id": "asdasdwewet26",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "status": 5,
            "systems": ["api", "dns"],
            "date": "2021-10-16",
            "timestamp": 1634389344,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                },
                {
                    "timestamp": "2021-10-09T17:04:27.260Z",
                    "status": "resolved",
                    "message": "we fixed it boys"
                }
            ]
        },
        {
            "id": "asdasdwewet27",
            "name": "testing",
            "open": false,
            "maintenance": false,
            "status": 4,
            "systems": ["api", "dns"],
            "date": "2021-10-14",
            "timestamp": 1634216544,
            "activities": [
                {
                    "timestamp": "2021-10-08T17:04:27.260Z",
                    "status": "investigating",
                    "message": "just found out"
                },
                {
                    "timestamp": "2021-10-09T17:04:27.260Z",
                    "status": "resolved",
                    "message": "we fixed it boys"
                }
            ]
        }
      ],
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
      // console.log(incidents)
      return incidents
    },
  }
}
</script>
