<template>
  <div class="flex flex-column my-auto" :class="statusClass">
    <span v-if="text" class="inline-block mr-1">{{ statusMessage }}</span>
    <component :is="icon" :class="iconSize" />
  </div>
</template>

<script>
import { CheckCircleIcon, InformationCircleIcon, TrendingDownIcon, ExclamationIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
  name: 'StatusLevel',
  components: {
    CheckCircleIcon,
    InformationCircleIcon,
    TrendingDownIcon,
    ExclamationIcon,
    XCircleIcon,
  },
  props: {
    level: Number,
    text: {
      type: Boolean,
      default: true
    },
    pill: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      icon: '',
      iconSize: ['h-5', 'w-5'],
      statusClass: [],
      statusMessage: '',
    }
  },
  created() {
    switch (this.level) {
      case 1: this.icon = 'CheckCircleIcon'; this.statusMessage = 'Operational'; break;
      case 2: this.icon = 'InformationCircleIcon'; this.statusMessage = 'Under Maintenance'; break;
      case 3: this.icon = 'TrendingDownIcon'; this.statusMessage = 'Degraded Performance'; break;
      case 4: this.icon = 'ExclamationIcon'; this.statusMessage = 'Partial Outage'; break;
      case 5: this.icon = 'XCircleIcon'; this.statusMessage = 'Major Outage'; break;
    }

    if (this.pill) {
      this.statusClass.push('rounded-xl')
      this.statusClass.push('py-1')
      this.statusClass.push('px-2')
      this.statusClass.push('bg-s' + this.level)
      this.statusClass.push('text-white')
      this.statusClass.push('text-xs')
      this.iconSize = ['h-4', 'w-4']
    } else {
      this.statusClass.push('text-s' + this.level)
    }
  },
}
</script>
