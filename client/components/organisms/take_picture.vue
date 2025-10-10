<template>
  <v-dialog
      v-model="isActive"
      width="auto"
    >
    <v-card>
      <v-file-input
        label="Import a picture"
        accept="image/*"
        v-model="file"
        @change="Upload"
      />
      <video
        v-show="stream"
        ref="myVideo" :srcObject="stream"
        autoplay>
      </video>
      <canvas
        hidden
        ref="myCanvas"
        width="800"
        height="450"
      />
      <template v-slot:actions>
        <v-btn
            v-show="stream"
            color="green"
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
            navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
              stream.value = mediaStream
            })
            .catch(function (err) {
              console.log("No media, file selector only")
            });

            myContext.value = myCanvas.value.getContext('2d');
        })

        return {
            myCanvas,
            myVideo,
            myContext,
            stream
        }
    },
    data() {
      return {
        file: null
      }
    },
    mounted () {
    },
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
    methods: 
    {
      TakePicture() {
        this.myContext.drawImage(this.myVideo, 0, 0, 800, 450);
        this.Save()
      },
      Upload()
      {
        var reader = new FileReader();
        reader.addEventListener("load",
        () => {
          const blob = reader.result ;
          const image = new Image() ;
          image.src = blob ;
          image.addEventListener('load', async  () => {
            this.myContext.drawImage(image, 0,0, 800, 450);
            this.Save()
          });
        }, false)
        reader.readAsDataURL(this.file);
      },
      Save()
      {
        this.myCanvas.toBlob((img) => {
          var reader = new FileReader();
            reader.onload = (event) => {
              var data = event.target.result;

              this.$emit('add-img', data)
          };
          // Convert Blob into DataURL string
          reader.readAsDataURL(img);
        })
      }
    }
  }
</script>