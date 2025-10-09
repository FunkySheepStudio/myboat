<template>
  <v-card
    v-for="boat in store.DB.Boats.All"
  >
    {{ boat }}
  </v-card>
  <v-fab
    absolute="true"
    app="true"
    color="blue"
    location="bottom right"
    text="Add a boat"
    @click="AddBoat()"
    icon="mdi-plus"
  />
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
  methods: {
    AddBoat()
    {
      store.DB.Boats.Add()
    }
  }
}
</script>