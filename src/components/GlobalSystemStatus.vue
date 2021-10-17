<template>
  <div class="flex bg-s1 text-xl text-white my-4 p-4 rounded-md shadow">
    <span>All Systems Operational</span>
    <CheckCircleIcon class="h-5 w-5 ml-2 my-auto"/>
  </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid'

export default {
  name: 'GlobalSystemStatus',
  components: {
    CheckCircleIcon,
  },
  props: {
  }
}
</script>
