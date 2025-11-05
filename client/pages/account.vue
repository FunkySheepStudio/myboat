<template>
  <div>
    <v-text-field
      label="Enter your name"
    />
    <org-avatar
      editing="true"
    />
  </div>
</template>
<script>
module.exports = {
  components: {
    'org-avatar': Vue.defineAsyncComponent( () => loadModule('./components/organisms/avatar.vue', options))
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
</style>