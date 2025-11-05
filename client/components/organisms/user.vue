<template>
  <div>
    <avatar/>
  </div>
</template>
<script>
module.exports = {
  components: {
    'avatar': Vue.defineAsyncComponent( () => loadModule('./components/organisms/avatar.vue', options))
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