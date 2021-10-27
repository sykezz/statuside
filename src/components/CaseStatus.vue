<template>
  <div class="flex flex-column my-auto rounded-xl py-1 px-2 text-white text-xs" :class="statusClass">
    <span v-if="text" class="inline-block mr-1">{{ message }}</span>
    <component :is="icon" :class="iconSize" />
  </div>
</template>

<script>
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
  name: 'CaseStatus',
  components: {
    CheckCircleIcon,
    XCircleIcon,
  },
  props: {
    open: Boolean,
    text: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      icon: '',
      iconSize: ['h-4', 'w-4'],
      statusClass: [],
      message: '',
    }
  },
  created() {
    if (this.open) {
      this.icon = 'CheckCircleIcon'
      this.message = 'Open'
      this.statusClass = ['bg-green2']
    } else {
      this.icon = 'XCircleIcon'
      this.message = 'Resolved'
      this.statusClass = ['bg-gray-500']
    }
  },
}
</script>
