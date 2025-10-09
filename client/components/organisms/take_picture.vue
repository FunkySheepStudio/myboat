<template>
  <v-dialog
      v-model="isActive"
      width="auto"
    >
    <v-card>
      <video ref="myVideo" :srcObject="stream" autoplay></video>
      <canvas
        ref="myCanvas"
        :width="width"
        :height="height"
      />
      <template v-slot:actions>
        <v-btn
            color="#373CF5"
            icon="mdi-camera"
            @click='TakePicture()'
        />
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
    import { onMounted, ref } from 'vue'
  module.exports = {
    components: {
    },
    props: {
      show: {
        type: Boolean,
        default() {
          return false
            }
        }
    },
    setup() {
        const myCanvas = ref(null);
        const myVideo = ref(null);
        let myContext = ref(null)
        let stream = ref(null)

        onMounted(async () => {
            let constraints = {
                audio: false,
                video: {
                    width: { min: 1024, ideal: 1280, max: 1920 },
                    height: { min: 576, ideal: 720, max: 1080 },
                    facingMode: 'environment',
                },
            }
            stream.value = await navigator.mediaDevices.getUserMedia(constraints)
            myContext.value = myCanvas.value.getContext('2d');
        })

        return {
            myCanvas,
            myVideo,
            myContext,
            stream
        }
    },
    /*data() {
      return {
        stream: null
      }
    },
    mounted () {
    },*/
    computed: {
      isActive: {
        get: function() {
          return this.show
        },
        set: function(newValue) {
          this.$emit('close-event')
        }
      }
    },
    methods: {
        TakePicture() {
            this.myContext.drawImage(this.myVideo, 0, 0, 100, 100);
        }
    }
  }
</script>