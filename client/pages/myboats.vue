<template>
  <v-container>
    <takePicture
      v-if="showTakePicture"
      :show="showTakePicture"
      @close-event="showTakePicture = false"
      @add-img="AddImg"
    />
    <v-row no-gutters justify="center">
      <v-col
          v-for="(boat, i) in store.DB.Boats.All"
          :key="i"
          cols="12"
          lg="6"
          md="6"
        >
          <v-card
            class="ma-2 pa-2"
          >
            <template v-slot:title>
              <v-text-field
                    hint="Enter the name of your boat"
                    label="Name of the boat"
                    v-model="boat.name"
                    @update:modelValue="AddBoat(boat)"
                    density="compact"
              />
            </template>
            <v-carousel
              v-model="boat.selectedImg"
              transition-duration="700"
              crossfade
              height="60vmin"
            >
              <v-carousel-item
                v-for="(img, i) in boat.imgs"
                :key="i"
              >
                  <v-img
                    :src="img"
                  ></v-img>
              </v-carousel-item>
            </v-carousel>
            <template v-slot:actions>
              <v-btn
                color="blue"
                icon="mdi-camera"
                @click="ShowPictureModal(boat.id)"
              />
                <v-btn
                color="red"
                icon="mdi-delete"
                @click="DeleteBoat(boat.id)"
              />
            </template>
          </v-card>
      </v-col>
    </v-row>
    <v-fab
      app="true"
      color="blue"
      location="bottom right"
      text="Add a boat"
      @click="AddBoat()"
      icon="mdi-plus"
    />
  </v-container>
</template>
<script>
module.exports = {
  components: {
    'takePicture': Vue.defineAsyncComponent( () => loadModule('./components/organisms/take_picture.vue', options)),
  },
  data() {
    return {
      store,
      showTakePicture: false,
      currentBoat: 0
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
    },
    AddImg(event)
    {
      store.DB.Boats.AddImg(this.currentBoat, event)
    },
    ShowPictureModal(boatId)
    {
      this.currentBoat=boatId
      this.showTakePicture = true
    }
  }
}
</script>