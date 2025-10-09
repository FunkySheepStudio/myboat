<template>
  <takePicture
    v-if="showTakePicture"
    :show="showTakePicture"
    @close-event="showTakePicture = false"
  />
  <v-card
    v-for="boat in store.DB.Boats.All"
  >
    <template v-slot:title>
      <v-text-field
            hint="Enter the name of your boat"
            label="Name of the boat"
            v-model="boat.name"
            @update:modelValue="AddBoat(boat)"
      />
    </template>
    <template v-slot:actions>
      <v-btn
        color="red"
        icon="mdi-delete"
        @click="DeleteBoat(boat.id)"
      />
      <v-btn
        color="blue"
        icon="mdi-camera"
        @click="showTakePicture = true"
      />
    </template>
  </v-card>
  <v-fab
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
    'takePicture': Vue.defineAsyncComponent( () => loadModule('./components/organisms/take_picture.vue', options)),
  },
  data() {
    return {
      store,
      showTakePicture: false
    }
  },
  methods: {
    AddBoat(boat)
    {
      store.DB.Boats.Add(boat)
    },
    DeleteBoat(id)
    {
      store.DB.Boats.Delete(id)
    }
  }
}
</script>