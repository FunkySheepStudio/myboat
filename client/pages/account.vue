<template>
  <div>
    <v-text-field
      label="Enter your name"
    />
    <avatar/>
  </div>
</template>
<script>
module.exports = {
  components: {
    'avatar': Vue.defineAsyncComponent( () => loadModule('./components/molecules/avatar.vue', options))
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