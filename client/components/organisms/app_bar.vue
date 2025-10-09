<template>
  <v-app-bar
    density="compact"
  >
    <template v-slot:append>
      <v-icon
        v-show="!store.Server.online"
        color="red"
      >
        mdi-wifi-alert
      </v-icon>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
module.exports = {
  components: {
  },
  data() {
    return {
      store
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>