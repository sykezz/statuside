<template>
  <div class="flex flex-col my-4 p-2 rounded-md bg-white border border-gray-200 shadow">
    <div class="flex flex-row justify-between p-4" :class="{'border-b': i < (Object.keys(systems).length - 1)}" v-for="(system, i) in systems" :key="i">
      <span>{{ system.name }}</span>
      <status-level :status="system.status" class="h-5 w-5" />
    </div>
  </div>
</template>

<script>
import StatusLevel from './StatusLevel.vue'

export default {
  name: 'SystemsStatus',
  components: {
    StatusLevel,
  },
  props: {
  },
  data: function() {
    return {
      systems: [
        {
          "name": "Website",
          "status": 1
        },
        {
          "name": "API",
          "status": 3
        },
        {
          "name": "CDN",
          "status": 4
        },
      ]
    }
  },
}
</script>
