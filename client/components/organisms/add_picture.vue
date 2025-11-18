<template>
    <div>
        <video
            hidden
            ref="myVideo" :srcObject="stream"
            autoplay>
        </video>
        <canvas
            ref="myCanvas"
            width="800"
            height="600"
        >
        </canvas>
        <v-btn
            v-show="stream"
            color="green"
            icon="mdi-camera"
            @click='Save()'
        />
    </div>
</template>
<script>
    import { onMounted, ref } from 'vue'
  module.exports = {
    components: {
    },
    props: {
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
                    width: { min: 800 },
                    height: { min: 600 },
                    facingMode: 'environment',
                },
            }
            myContext.value = myCanvas.value.getContext('2d');

            myContext.value.filter = 'contrast(1.3) saturate(1.2)'
            myContext.value.fillStyle = "black";
            myContext.value.fillRect(0, 0, 800, 600);
            function updateCanvas() {

              var ratio = Math.min(800 / myVideo.value.videoWidth, 600 / myVideo.value.videoHeight);
              let pictureWidth = myVideo.value.videoWidth * ratio
              let pictureHeight = myVideo.value.videoHeight * ratio

              myContext.value.drawImage(
                myVideo.value,
                (800 - pictureWidth) / 2 ,
                (600 - pictureHeight) / 2,
                pictureWidth,
                pictureHeight
              );
              window.requestAnimationFrame(updateCanvas);
            }
              
            window.requestAnimationFrame(updateCanvas);

            navigator.mediaDevices.enumerateDevices()
            .then(devices => {
              devices.forEach(device => {
                if (device.kind === "videoinput")
                {
                  console.log(device.getCapabilities()) 
                }
              });
            })

            navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
              stream.value = mediaStream
            })
            .catch(function (err) {
              console.log(err)
            });
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
    },
    methods: 
    {
      Save()
      {
        this.myCanvas.toBlob((blob) => {
            this.$emit('picture-added', blob)
        })
      }
    }
  }
</script>