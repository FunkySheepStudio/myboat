<template>
    <svg
        viewBox='0 0 360 360'
    >
        <hairs-back
            :selected="hairsList[hairs].back"
            :color = "hairsColor"
        />
        <skin
            :color = "skinColor"
        />
        <eyes
            :selected="eyes"
            :color="eyesColor"
        />
        <eyebrows
            :selected="eyebrows"
            :color="eyebrowsColor"
        />
        <accessories
            :selected="accessories"
            :color="accessoriesColor"
        />
        <mouth
            :selected="mouth"
            :color="mouthColor"
        />
        <clothes
            :selected="clothes"
            :color="clothesColor"
        />
        <facialHairs
            :selected="facialHairs"
            :color="facialHairsColor"
        />
        <glasses
            :selected="glasses"
            :color="glassesColor"
        />
        <hairs-front
            :selected="hairsList[hairs].front"
            :color = "hairsColor"
        />
    </svg>
</template>
<script>
import Clothes from '../atoms/avatar/clothes.vue'
import FacialHairs from '../atoms/avatar/facialHairs.vue'

module.exports = {
  components: {
    'hairs-back': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/hairs-back.vue', options)),
    'hairs-front': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/hairs-front.vue', options)),
    'skin': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/skin.vue', options)),
    'accessories': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/accessories.vue', options)),
    'eyes': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/eyes.vue', options)),
    'eyebrows': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/eyebrows.vue', options)),
    'mouth': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/mouth.vue', options)),
    'clothes': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/clothes.vue', options)),
    'facialHairs': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/facialHairs.vue', options)),
    'glasses': Vue.defineAsyncComponent( () => loadModule('./components/atoms/avatar/glasses.vue', options))
  },
  props: {
        skinColor: {
            type: String,
            default() {
                return "#DEBDC4"
            }
        },
        hairs: {
            type: Number,
            default() {
                return 0
            }
        },
        hairsColor: {
            type: String,
            default() {
                return "#5E3F3F"
            }
        },
        accessories: {
            type: Number,
            default() {
                return 2
            }
        },
        accessoriesColor: {
            type: String,
            default() {
                return "#DBA423"
            }
        },
        eyes: {
            type: Number,
            default() {
                return 8
            }
        },
        eyesColor: {
            type: String,
            default() {
                return "#6EDBEB"
            }
        },
        mouth: {
            type: Number,
            default() {
                return 0
            }
        },
        mouthColor: {
            type: String,
            default() {
                return "#A80843"
            }
        },
        clothes: {
            type: Number,
            default() {
                return 0
            }
        },
        clothesColor: {
            type: String,
            default() {
                return "#A80843"
            }
        },
        facialHairs: {
            type: Number,
            default() {
                return 1
            }
        },
        facialHairsColor: {
            type: String,
            default() {
                return "#BFBBBB"
            }
        },
        glasses: {
            type: Number,
            default() {
                return 1
            }
        },
        glassesColor: {
            type: String,
            default() {
                return "#1F0707"
            }
        }
  },
  data() {
    return {
        hairsList : [
            {
                back: 0,
                front: 0
            }
        ]
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>