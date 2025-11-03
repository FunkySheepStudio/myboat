<template>
    <svg
        viewBox='0 0 360 360'
    >
        <hairs-back
            :selected="hairsList[hairsIndex].back"
            :color = "hairsColor"
            @click="NextHairs"
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
            :selected="hairsList[hairsIndex].front"
            :color = "hairsColor"
            @click="NextHairs"
        />
    </svg>
    <v-select
        label="Select"
        :items="['Hairs', 'Eyes', 'Eyebrows', 'Glasses', 'Mouth', 'FacialHairs', 'Accessories',]"
        density="compact"
    ></v-select>
    <v-slider
        v-model="hairsIndex"
        :max="hairsList.length - 1"
        :min="0"
        :step="1"
    />
    <v-btn></v-btn>
    <v-color-picker
        hide-header
        hide-inputs
        mode="rgb"
        style="background-color: #66666666; position: absolute; left: 50%; bottom: 5vh; transform: translate(-50%, 0%);"
    />
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
        hairsIndex: 0,
        hairsList : [
            {
                back: 0,
                front: 0
            },
            {
                back: 0,
                front: 1
            },
            {
                back: 0,
                front: 6
            },
            {
                back: 0,
                front: 7
            },
            {
                back: 0,
                front: 9
            },
            {
                back: 0,
                front: 10
            },
            {
                back: 1,
                front: 0
            },
            {
                back: 1,
                front: 1
            },
            {
                back: 1,
                front: 3
            },
            {
                back: 1,
                front: 4
            },
            {
                back: 1,
                front: 6
            },
            {
                back: 1,
                front: 7
            },
            {
                back: 1,
                front: 9
            },
            {
                back: 1,
                front: 10
            },
            {
                back: 1,
                front: 16
            },
            {
                back: 2,
                front: 0
            },
            {
                back: 2,
                front: 1
            },
            {
                back: 2,
                front: 3
            },
            {
                back: 2,
                front: 4
            },
            {
                back: 2,
                front: 6
            },
            {
                back: 2,
                front: 7
            },
            {
                back: 2,
                front: 9
            },
            {
                back: 2,
                front: 10
            },
            {
                back: 2,
                front: 16
            },
            {
                back: 3,
                front: 3
            },
            {
                back: 3,
                front: 4
            },
            {
                back: 3,
                front: 6
            },
            {
                back: 3,
                front: 7
            },
            {
                back: 3,
                front: 9
            },
            {
                back: 3,
                front: 10
            },
            {
                back: 4,
                front: 3
            },
            {
                back: 4,
                front: 4
            },
            {
                back: 4,
                front: 6
            },
            {
                back: 4,
                front: 7
            },
            {
                back: 4,
                front: 9
            },
            {
                back: 4,
                front: 10
            },
            {
                back: 5,
                front: 3
            },
            {
                back: 5,
                front: 4
            },
            {
                back: 5,
                front: 6
            },
            {
                back: 5,
                front: 9
            },
            {
                back: 5,
                front: 10
            },
            {
                back: 6,
                front: 3
            },
            {
                back: 6,
                front: 6
            },
            {
                back: 6,
                front: 9
            },
            {
                back: 6,
                front: 10
            },
            {
                back: 7,
                front: 3
            },
            {
                back: 7,
                front: 6
            },
            {
                back: 7,
                front: 9
            },
            {
                back: 7,
                front: 10
            },
            {
                back: 8,
                front: 0
            },
            {
                back: 8,
                front: 1
            },
            {
                back: 8,
                front: 2
            },
            {
                back: 8,
                front: 3
            },
            {
                back: 8,
                front: 4
            },
            {
                back: 8,
                front: 5
            },
            {
                back: 8,
                front: 6
            },
            {
                back: 8,
                front: 7
            },
            {
                back: 8,
                front: 8
            },
            {
                back: 8,
                front: 9
            },
            {
                back: 8,
                front: 10
            },
            {
                back: 8,
                front: 11
            },
            {
                back: 8,
                front: 12
            },
            {
                back: 8,
                front: 13
            },
            {
                back: 8,
                front: 14
            },
            {
                back: 8,
                front: 15
            },
            {
                back: 8,
                front: 16
            },
            {
                back: 8,
                front: 17
            },
            {
                back: 8,
                front: 18
            },
            {
                back: 8,
                front: 19
            }
        ]
    }
  },
  mounted () {
  },
  methods: {
    NextHairs()
    {
        this.hairsIndex = (this.hairsIndex + 1) % this.hairsList.length
    },
  }
}
</script>
<style>
</style>