<template>
  <CheckCircleIcon class="my-auto text-s1" v-if="status == 1"/>
  <InformationCircleIcon class="my-auto text-s2" v-else-if="status == 2"/>
  <TrendingDownIcon class="my-auto text-s3" v-else-if="status == 3"/>
  <ExclamationIcon class="my-auto text-s4" v-else-if="status == 4"/>
  <XCircleIcon class="my-auto text-s5" v-else />
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
    status
  },
}
</script>
