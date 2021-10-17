<template>
  <h2 class="text-2xl mt-6 mb-3">Scheduled Maintenance</h2>
  <div class="flex flex-col rounded-md bg-white border border-gray-200 shadow">
    <div class="flex flex-col p-4" :class="{'border-b': i < (Object.keys(incidents).length - 1)}" v-for="(incident, i) in incidents" :key="i">
      <div class="flex justify-between">
        <div class="flex justify-between">
          <span class="flex text-lg font-medium">
            <status-level :status="incident.level" class="h-5 w-5 mr-1" />
            <span>{{ incident.name }}</span>
          </span>
          <div>
            <span class="rounded-xl ml-2 py-1 px-2 bg-blue-500 text-white text-xs" v-for="(sys, i) in incident.systems" :key="i">{{ sys }}</span>
          </div>
        </div>
        <div class="text-xs text-gray-500">{{ incident.timestamp }} - {{ incident.timestamp2 }}</div>
      </div>
      <div class="mt-4 text-sm text-gray-600">{{ incident.activities[0].message }}</div>
    </div>
  </div>
</template>

<script>
import StatusLevel from './StatusLevel.vue'

export default {
  name: 'OpenIssues',
  components: 
  {
    StatusLevel,
  },
  props: {
  },
  data: function() {
    return {
      incidents: [
        {
          "id": "asdasdwewet21",
          "name": "Scheduled Maintenance: Migrate API Servers",
          "open": false,
          "maintenance": true,
          "level": 4,
          "systems": ["API"],
          "timestamp": 1633878986,
          "timestamp2": 1633879986,
          "activities": [
              {
                  "timestamp": "2021-12-08T17:04:27.260Z",
                  "status": "scheduled",
                  "message": "We'll be migrating our old API servers to new and faster servers!"
              },
          ]
        },
        {
          "id": "asdasdwewet22",
          "name": "Scheduled Maintenance: Deployment",
          "open": false,
          "maintenance": true,
          "level": 4,
          "systems": ["API"],
          "timestamp": 1633712768,
          "timestamp2": 1633812768,
          "activities": [
              {
                  "timestamp": "2021-12-07T17:04:27.260Z",
                  "status": "scheduled",
                  "message": "Deploying new API version. There'll be a small downtime during the maintenance as we deploy the new version."
              },
          ]
        },
      ]
    }
  },
}
</script>
