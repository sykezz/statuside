<template>
  <div class="flex text-xl text-white my-4 p-4 rounded-md shadow" :class="statusClass">
    <span>{{ statusMessage }}</span>
    <component :is="icon" class="h-5 w-5 ml-2 my-auto" />
  </div>
</template>

<script>
import { CheckCircleIcon, InformationCircleIcon, TrendingDownIcon, ExclamationIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
  name: 'GlobalSystemStatus',
  components: {
    CheckCircleIcon,
    InformationCircleIcon,
    TrendingDownIcon,
    ExclamationIcon,
    XCircleIcon,
  },
  props: {
    systems: Object,
  },
  data: function() {
    return {
      icon: '',
      statusMessage: '',
      statusClass: [],
    }
  },
  created() {
    let level = Math.max.apply(Math, this.systems.map(incident => incident.level))

    switch (level) {
      case 1: this.icon = 'CheckCircleIcon'; this.statusMessage = 'All Systems Operational'; break;
      case 2: this.icon = 'InformationCircleIcon'; this.statusMessage = 'Under Maintenance'; break;
      case 3: this.icon = 'TrendingDownIcon'; this.statusMessage = 'Degraded Performance'; break;
      case 4: this.icon = 'ExclamationIcon'; this.statusMessage = 'Partial Outage'; break;
      case 5: this.icon = 'XCircleIcon'; this.statusMessage = 'Major Outage'; break;
    }

    this.statusClass = ['bg-s' + level]
    
  }
}
</script>
