<template>
    <avatar/>
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
  mounted () {
  }
}
</script>
<style>
</style>