<template>
    <div class="flex justify-between mt-6 mb-3 mr-2">
      <router-link to="/">
        <h1 class="text-3xl">Statusly</h1>
      </router-link>
      <div class="flex gap-2">
        <router-link to="/demo" class="p-2 px-5 bg-blue-500 text-gray-100 rounded-lg">Demo</router-link>
        <!-- <router-link to="/login" class="p-2 px-5 text-blue-500 rounded-lg border-blue-300 border border-blue-500">Login</router-link> -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
