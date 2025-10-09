<template>
    <v-bottom-navigation>
      <v-btn value="boats">
          <v-icon>mdi-sail-boat</v-icon>

          <span>Boats</span>
      </v-btn>

      <v-btn value="maneuvers">
          <v-icon>mdi-ship-wheel</v-icon>

          <span>Maneuvers</span>
      </v-btn>
      <v-btn value="friends">
          <v-icon>mdi-crowd</v-icon>
          <span>Friends</span>
      </v-btn>
      <v-btn value="maintenance">
          <v-icon>mdi-pier-crane</v-icon>
          <span>Maintenance</span>
      </v-btn>
    </v-bottom-navigation>
</template>
<script>
module.exports = {
  components: {
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