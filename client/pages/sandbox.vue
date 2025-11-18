<template>
  <div>
    <add-picture
        v-show="!blob"
        @picture-added="EditPicture"
    />
    <edit-picture
        v-if="blob"
        :blob
    />
  </div>
</template>
<script>
module.exports = {
    components: {
        'add-picture': Vue.defineAsyncComponent( () => loadModule('./components/organisms/add_picture.vue', options)),
        'edit-picture': Vue.defineAsyncComponent( () => loadModule('./components/organisms/edit_picture.vue', options))
    },
    data() {
        return {
            blob: null
        }
    },
    mounted () {
    },
    methods: {
      EditPicture(blob) {
        this.blob = blob
      }
  }
}
</script>
<style>
</style>