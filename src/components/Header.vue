<template>
    <div class="flex justify-between mb-3 mr-2">
      <router-link to="/">
        <h1 class="text-3xl">Statuside</h1>
      </router-link>
      <div class="flex gap-2">
        <button @click="toggleTheme">
          <MoonIcon class="w-5 h-5" v-if="darkmode" />
          <SunIcon class="w-5 h-5" v-else />
        </button>
        <!-- <router-link to="/demo" class="p-2 px-5 bg-blue-500 text-gray-100 rounded-lg">Demo</router-link> -->
        <!-- <router-link to="/login" class="p-2 px-5 text-blue-500 rounded-lg border-blue-300 border border-blue-500">Login</router-link> -->
      </div>
    </div>
</template>

<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/solid'

export default {
  name: 'Header',
  components: {
    SunIcon,
    MoonIcon,
  },
  data: function() {
    return {
      darkmode: true
    }
  },
  created() {
    let userTheme = localStorage.getItem('darkmode')

    if (userTheme === null) {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (hasDarkPreference) {
        this.setTheme(true)
      } else {
        this.setTheme(false)
      }
    } else {
      userTheme = parseInt(userTheme)
      if (userTheme === 'true') {
        this.setTheme(true)
        
      } else {
        this.setTheme(false)
      }
    }
  },
  methods: {
    setTheme(v) {
      this.darkmode = v
      if (v) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    toggleTheme() {
      this.setTheme(!this.darkmode)
      localStorage.setItem('darkmode', this.darkmode) 
    }
  }
}
</script>
