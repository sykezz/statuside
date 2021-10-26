<template>
  <div class="flex flex-col my-4 p-2 rounded-md bg-white border border-gray-200 shadow">
    <div class="systems" v-for="(system, i) in systems" :key="i">
      <span>{{ system.name }}</span>
      <status-level :pill="false" :level="system.level" />
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
    systems: Object
  },
}
</script>
