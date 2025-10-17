<template>
    <div
        class="d-flex"
        style="margin-bottom: 5px; max-height: 75px;"
    >
            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart= { name: 'back', type: back }"
                :style="'background-color: ' + avatar.back">

                <rect 
                    v-if="editedPart.name === 'back'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:5; stroke: black;' 
                />
            </svg>
            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart= { name: 'skin', type: skins }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <rect 
                    v-if="editedPart.name === 'skin'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke: #373CF5;' 
                />
            </svg>
            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart= { name: 'hairs', type: hairs }">
                <path
                    v-for="(path, i) in hairs[1].pathsBack"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in hairs[1].pathsFront"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'hairs'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet'  v-on:click="editedPart = { name: 'eyes', type: eyes }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in eyes[6].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'eyes'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart = { name: 'eyebrows', type: eyebrows }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in eyebrows[0].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'eyebrows'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart = { name: 'mouths', type: mouths }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in mouths[3].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'mouths'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart = { name: 'clothes', type: clothes }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in clothes[0].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'clothes'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet'  v-on:click="editedPart = { name: 'facialHairs', type: facialHairs }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in facialHairs[3].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'facialHairs'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart = { name: 'glasses', type: glasses }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in glasses[1].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'glasses'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>

            <svg viewBox='0 0 360 360' E='xMidYMid meet' v-on:click="editedPart = { name: 'accessories', type: accessories }">
                <path
                    v-for="(path, i) in avatar.skin.paths"
                    class='tinted'
                    :fill='avatar.skin.color'
                    :d="path.d"
                />
                <path
                    v-for="(path, i) in accessories[2].paths"
                    class='tinted'
                    fill='#000000'
                    :d="path.d"
                    :fill-opacity="path.fillOpacity"
                />
                <rect 
                    v-if="editedPart.name === 'accessories'"
                    width="100%"
                    height="100%"
                    style='fill: none; stroke-width:20; stroke:#373CF5;' 
                />
            </svg>
    </div>
    <div
        style="margin-bottom: 5px;"
    >
                <div
                    class="d-flex justify-center"
                >
                    <svg            
                        width='40vh'
                        height='40vh'
                        viewBox='0 0 360 360'
                        E='xMidYMid meet'
                        id="avatarId"
                        :style="'background-color: ' + avatar.back"
                    >
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                                <path
                                    v-for="(path, i) in avatar.hairs.pathsBack"
                                    class='tinted'
                                    :fill='avatar.hairs.color'
                                    :d="path.d"
                                />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'
                            >
                                <path
                                    v-for="(path, i) in avatar.skin.paths"
                                    class='tinted'
                                    :fill='avatar.skin.color'
                                    :d="path.d"
                                />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'
                            >
                                <path
                                    v-for="(path, i) in avatar.accessories.paths"
                                    class='tinted'
                                    :fill='avatar.accessories.color'
                                    :d="path.d"
                                    :fill-rule="path.fillRule"
                                />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'
                            >
                                <path
                                    v-for="(path, i) in avatar.eyes.paths"
                                    class='tinted'
                                    :fill='path.fill ? path.fill : avatar.eyes.color'
                                    :d="path.d"
                                    :fill-opacity="path.fillOpacity"
                                />
                                <circle
                                    v-for="(circle, i) in avatar.eyes.circles"
                                    class='tinted'
                                    :cx="circle.cx"
                                    :cy="circle.cy"
                                    :r="circle.r"
                                    :fill='circle.fill ? circle.fill : avatar.eyes.color'
                                    :fill-opacity="circle.fillOpacity"
                                />
                                <polygon
                                    v-for="(polygon, i) in avatar.eyes.polygons"
                                    class='tinted'
                                    :fill='avatar.eyes.color'
                                    :points="polygon.points"
                                    :stroke-width="polygon.strokeWidth"
                                    :fill-opacity="polygon.fillOpacity"
                                />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'
                            >
                                <path
                                    v-for="(path, i) in avatar.eyebrows.paths"
                                    class='tinted'
                                    :fill='path.fill ? path.fill : avatar.eyebrows.color'
                                    :d="path.d"
                                    :fill-opacity="path.fillOpacity"
                                />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                            <circle
                                v-for="(circle, i) in avatar.mouths.circles"
                                class='tinted'
                                :cx="circle.cx"
                                :cy="circle.cy"
                                :r="circle.r"
                                :fill='circle.fill ? circle.fill : avatar.mouths.color'
                                :fill-opacity="circle.fillOpacity"
                            />
                            <path
                                v-for="(path, i) in avatar.mouths.paths"
                                class='tinted'
                                :fill='path.fill ? path.fill : avatar.mouths.color'
                                :d="path.d"
                                :fill-opacity="path.fillOpacity"
                            />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                            <path
                                v-for="(path, i) in avatar.clothes.paths"
                                class='tinted'
                                :fill='path.fill ? path.fill : avatar.clothes.color'
                                :d="path.d"
                                :fill-opacity="path.fillOpacity"
                            />
                            <circle
                                v-for="(circle, i) in avatar.clothes.circles"
                                class='tinted'
                                :cx="circle.cx"
                                :cy="circle.cy"
                                :r="circle.r"
                                :fill='circle.fill ? circle.fill : avatar.clothes.color'
                                :fill-opacity="circle.fillOpacity"
                            />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                            <path
                                v-for="(path, i) in avatar.hairs.pathsFront"
                                class='tinted'
                                :fill='path.fill ? path.fill : avatar.hairs.color'
                                :d="path.d"
                                :fill-opacity="path.fillOpacity"
                            />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                            <path
                                v-for="(path, i) in avatar.facialHairs.paths"
                                class='tinted'
                                :fill='path.fill ? path.fill : avatar.facialHairs.color'
                                :d="path.d"
                                :fill-opacity="path.fillOpacity"
                            />
                        </svg>
                        <svg width='360px' height='360px' viewBox='0 0 360 360' E='xMidYMid meet'>
                            <path
                                v-for="(path, i) in avatar.glasses.paths"
                                class='tinted'
                                :fill='path.fill ? path.fill : avatar.glasses.color'
                                :d="path.d"
                                :fill-opacity="path.fillOpacity"
                            />
                        </svg>
                    </svg>
                </div>
                <div
                    class="d-flex flex-wrap"
                    style="min-height: 10vh;"
                >
                    <svg 
                        style="width: 10vw; height: 10vw;"
                        viewBox='0 0 360 360' E='xMidYMid meet'
                        v-for="(part) in editedPart.type"
                        v-on:click="SetPart(editedPart.name, part)"
                    >
                        <path
                            v-for="(path) in part.pathsBack"
                            class='tinted'
                            fill='#000000'
                            :d="path.d"
                        />
                        <path
                            v-for="(path) in avatar.skin.paths"
                            class='tinted'
                            :fill='avatar.skin.color'
                            :d="path.d"
                        />
                        <path
                            v-for="(path) in part.pathsFront"
                            class='tinted'
                            fill='#000000'
                            :d="path.d"
                        />
                        <path
                            v-if="editedPart.name !== 'skin'"
                            v-for="(path) in part.paths"
                            class='tinted'
                            :fill="path.fill ? path.fill : '#000000'"
                            :d="path.d"
                        />
                        <circle
                            v-for="(circle) in part.circles"
                            class='tinted'
                            :cx="circle.cx"
                            :cy="circle.cy"
                            :r="circle.r"
                            :fill="circle.fill ? circle.fill : '#000000'"
                            :fill-opacity="circle.fillOpacity"
                        />
                        <polygon
                            v-for="(polygon) in part.polygons"
                            class='tinted'
                            :fill="polygon.fill ? polygon.fill : '#000000'"
                            :points="polygon.points"
                            :stroke-width="polygon.strokeWidth"
                            :fill-opacity="polygon.fillOpacity"
                        />
                        <rect 
                            v-if="part.name === avatar[editedPart.name].name"
                            width="100%"
                            height="100%"
                            style='fill: none; stroke-width:20; stroke :#373CF5;' 
                        />
                    </svg>
                </div>
                <div
                    class="d-flex justify-center"
                >
                    <v-color-picker
                        v-model="EditColor"
                        mode="hex"
                        hide-inputs
                    />
                </div>
                    <!--<div
                        style="position: absolute; bottom: 30px; right: 30px;"
                    >
                        <v-btn
                            color="#373CF5"
                            variant="outlined"
                            @click="Save()"
                        >
                            Valider
                        </v-btn>
                </div>-->
        </div>
</template>
<script>
module.exports = {
    props: {
        show: {
            type: Boolean,
            default() {
                return false
                }
            },
            userId: {
            type: String,
            default() {
                return ''
                }
        }
    },
    data() {
        return {
            parts: [],
            hairs : [
                {
                    name: 'empty',
                    pathsBack: [],
                    pathsFront: []
                },
                {
                    name: 'longhair',
                    pathsBack: [
                        {
                            d: 'M71 174c3,-11 -13,-62 3,-94 17,-35 36,-48 83,-51 34,-3 68,-2 99,16 13,7 21,22 28,35 5,11 8,24 9,36 0,13 -6,24 -6,43 -1,32 39,33 39,62 0,40 -29,40 -28,56 1,20 28,25 28,55 0,11 -10,22 -18,28 -87,0 -174,0 -260,0 -14,-11 -15,-23 -14,-36 3,-18 25,-31 25,-49 0,-11 -25,-20 -25,-54 1,-29 37,-41 37,-47zm126 -85l-1 0c0,0 0,0 0,0l1 0z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M71 174c2,-11 -13,-62 3,-94 17,-35 36,-48 83,-51 34,-3 68,-2 99,16 13,7 21,22 28,35 5,11 8,24 9,36 0,13 -6,24 -6,43 0,2 0,3 0,5l-2 -1c-8,-3 -17,-7 -25,-12 -10,-6 -20,-13 -29,-20 -11,-9 -25,-21 -34,-33 -5,7 -13,13 -20,17 -6,4 -13,7 -19,9 -8,3 -15,6 -23,9 -8,3 -16,6 -24,10 -12,7 -17,7 -40,31zm126 -85l-1 0c0,0 0,0 0,0l1 0z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M71 174c3,-11 -13,-62 3,-94 17,-35 36,-48 83,-51 34,-3 68,-2 99,16 13,7 21,22 28,35 5,11 8,24 9,36 0,13 -6,24 -6,43 -25,-9 -74,-43 -91,-70 -6,17 -31,28 -62,40 -25,8 -46,14 -63,45z',
                        }
                    ]
                },
                {
                    name: 'longhairbob',
                    pathsBack: [
                        {
                            d: 'M114 60c20,-23 60,-22 65,-22 5,0 45,-1 65,22 20,22 38,69 45,102 8,33 4,64 -6,84 -9,19 -17,20 -32,17 -16,-3 -22,-11 -72,-10 -50,-1 -56,7 -72,10 -15,3 -23,2 -32,-17 -10,-20 -14,-51 -6,-84 7,-33 25,-80 45,-102z'
                        }
                    ],
                    pathsFront: [
                    {
                            d: 'M111 136c13,-4 18,-9 36,-29 2,-3 4,-6 5,-9 24,24 56,38 88,45l-6 -10c2,1 22,10 26,10 0,-14 -11,2 -11,-15 0,-38 -31,-69 -69,-69l0 0c-44,0 -69,35 -69,77z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M70 156l0 0c0,1 -1,3 -1,4l3 -3c17,7 84,-59 77,-72 10,16 55,44 80,49 -4,-7 -9,-10 -13,-17 16,11 53,33 72,38 -8,-32 -25,-73 -44,-95 -20,-22 -60,-22 -65,-22 -5,0 -45,-1 -65,22 -18,20 -34,61 -43,93 -1,1 -1,2 -1,3z',
                        }
                    ]
                },
                {
                    name: 'hairbun',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M204 46c28,11 48,41 48,75 0,5 -1,10 -1,14l-2 0c-3,-40 -33,-64 -69,-64 -36,0 -66,24 -69,64l-2 0c0,-4 -1,-9 -1,-14 0,-34 20,-64 48,-75 -3,-3 -5,-7 -5,-12 0,-12 13,-22 29,-22 16,0 29,10 29,22 0,5 -2,9 -5,12z'
                        }
                    ]
                },
                {
                    name: 'longhaircurly',
                    pathsBack: [
                        {
                            d: 'M180 269c-23,0 -44,-7 -56,-18 -4,1 -8,1 -12,1 -38,0 -68,-27 -68,-60 0,-18 8,-34 22,-45 -12,-10 -15,-31 -7,-52 9,-20 27,-34 42,-33 2,-13 13,-25 29,-32 19,-8 38,-6 50,3 12,-9 31,-11 50,-3 16,7 27,19 29,32 15,-1 33,13 42,33 8,21 5,42 -7,52 14,11 22,27 22,45 0,33 -30,60 -68,60 -4,0 -8,0 -12,-1 -12,11 -33,18 -56,18zm-69 -137c0,0 0,0 0,0l0 -1 0 1zm138 -1l0 1c0,0 0,0 0,0l0 -1z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M97 143c2,-1 4,-3 6,-5 5,-5 17,-11 22,-19 10,-16 12,-23 16,-22 13,4 20,3 39,3 19,0 26,1 39,-3 4,-1 7,6 16,22 4,7 13,11 22,19 2,2 4,3 6,5 -11,-6 -24,-13 -31,-22 -3,-5 -6,-10 -9,-15 -1,-1 -2,-4 -4,-5 -4,1 -8,2 -12,2 -4,1 -8,1 -12,1 -5,0 -10,0 -15,0 -5,0 -10,0 -15,0 -4,0 -8,0 -12,-1 -4,0 -8,-1 -12,-2 -2,1 -3,4 -4,5 -3,5 -6,10 -9,15 -13,14 -26,16 -31,22z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M59 95c9,-20 27,-34 42,-33 2,-13 13,-25 29,-32 19,-8 38,-6 50,3 12,-9 31,-11 50,-3 16,7 27,19 29,32 15,-1 33,13 42,33 13,33 -4,80 -44,43 -5,-5 -17,-11 -22,-19 -10,-16 -12,-23 -16,-22 -13,4 -20,3 -39,3 -19,0 -26,1 -39,-3 -4,-1 -6,6 -16,22 -5,8 -17,14 -22,19 -8,7 -14,19 -30,13 -18,-7 -24,-32 -14,-56z',
                        }
                    ]
                },
                {
                    name: 'longhaircurvy',
                    pathsBack: [
                        {
                            d: 'M183 34c50,0 67,23 80,68 4,14 13,31 20,43 5,12 0,17 0,25 8,2 23,10 30,27 4,10 -4,31 -15,38 -3,3 0,24 -6,37 -7,14 -13,13 -23,19 -7,4 23,38 4,63 -12,-22 -36,0 -51,-10 -18,-10 -18,-27 -18,-38 0,-8 5,-27 14,-44l-93 0c-6,12 -22,21 -22,28 0,6 0,19 23,21 -6,7 -23,3 -27,1 0,5 1,5 4,10 -10,-3 -15,-11 -16,-15 -6,7 -2,14 -5,24 -22,-10 -25,-31 -26,-36 -2,-33 11,-36 9,-45 -4,-17 -19,-20 -19,-37 0,-19 23,-41 28,-47 5,-6 -1,-20 0,-30 3,-18 18,-35 19,-35 31,-44 27,-67 90,-67z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M112 121c8,-7 21,-11 38,-13l1 -7 1 7c6,-1 12,-2 18,-2l2 -11 2 11c12,-1 24,0 34,1l1 -6 1 7c18,2 32,7 39,15l0 5c-6,-9 -28,-15 -39,-17l-1 0 -1 0c-11,-2 -22,-2 -34,-2l-2 0 -2 0c-5,1 -11,1 -17,2l-1 0 -1 0c-11,2 -30,6 -39,13l0 -3z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M183 34c50,0 67,23 80,68 4,14 13,31 20,43 5,12 0,17 0,25 8,2 23,10 30,27 4,10 -4,31 -15,38 -3,3 0,24 -6,37 -7,14 -13,13 -23,19 -7,4 23,38 4,63 -12,-22 -36,0 -51,-10 -18,-10 -18,-27 -18,-38 0,-11 10,-46 29,-65 -2,-16 18,-47 17,-60l-1 -58c-7,-8 -21,-13 -39,-15l-1 -7 -1 6c-10,-1 -22,-2 -34,-1l-2 -11 -2 11c-6,0 -12,1 -18,2l-1 -7 -1 7c-17,2 -30,6 -38,13 0,27 -1,64 0,68 2,11 19,33 17,63 -1,16 -26,29 -26,38 0,6 0,19 23,21 -6,7 -23,3 -27,1 0,5 1,5 4,10 -10,-3 -15,-11 -16,-15 -6,7 -2,14 -5,24 -22,-10 -25,-31 -26,-36 -2,-33 11,-36 9,-45 -4,-17 -19,-20 -19,-37 0,-19 23,-41 28,-47 5,-6 -1,-20 0,-30 3,-18 18,-35 19,-35 31,-44 27,-67 90,-67z',
                        }
                    ]
                },
                {
                    name: 'longhairdread',
                    pathsBack: [
                        {
                            d: 'M233 262l-91 0c1,3 1,6 2,10 1,7 0,14 -1,21 0,8 -1,16 1,22 1,6 5,11 10,16 2,3 5,6 7,9 2,4 1,8 -2,10 -3,2 -7,1 -10,-2 -1,-3 -4,-5 -6,-8 -4,-4 -7,-9 -10,-14 0,7 2,13 5,19 1,4 0,8 -4,9 -4,2 -8,0 -9,-3 -4,-9 -6,-19 -6,-29 -4,8 -7,16 -9,27 -1,4 -4,6 -8,6 -4,-1 -6,-5 -6,-8 1,-2 1,-4 1,-6 -2,6 -5,11 -11,17 -3,3 -8,3 -10,0 -3,-3 -3,-7 0,-10 9,-9 11,-19 10,-29 -1,8 -4,15 -10,22 -2,3 -6,3 -9,1 -3,-3 -4,-7 -2,-10 6,-7 9,-16 9,-26 0,-4 -1,-7 -1,-11 -3,6 -7,12 -12,18 -2,3 -6,3 -9,1 -3,-3 -4,-7 -1,-10 10,-14 14,-25 13,-35 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-6 -4,-11 -7,-16 -2,1 -3,3 -4,4 -2,2 -4,5 -5,6 0,0 1,2 2,3 1,2 2,3 3,5 1,4 -1,8 -5,9 -3,2 -7,0 -9,-4 0,-1 0,-2 -1,-3 -2,-4 -5,-8 -3,-14 2,-4 4,-8 7,-11 2,-2 4,-5 5,-7 1,-5 0,-11 0,-17 -1,-7 -2,-15 0,-23 2,-7 6,-14 10,-21 2,-3 3,-5 5,-7 1,-4 1,-14 0,-24 0,-8 0,-15 1,-19 2,-5 10,-20 17,-33 7,-12 14,-23 16,-24 1,-1 2,-2 4,-2 3,-3 9,-6 12,-9 0,-1 -1,-2 -1,-3 0,-5 0,-10 5,-14 5,-3 9,-3 14,-2 2,0 3,1 4,0 0,0 0,-1 1,-2 2,-4 4,-8 10,-10l0 0c6,0 10,2 14,4 2,1 4,2 5,2 4,0 7,-1 10,-2 5,-1 10,-3 17,-2l0 0c6,1 8,5 11,8 1,2 3,3 3,4 1,0 4,-1 6,-2 6,-2 11,-4 17,-2 7,3 11,8 14,14 2,2 3,4 5,6 4,5 10,9 16,13 3,2 5,4 8,6 0,1 2,2 3,3 6,4 11,8 14,16 3,10 4,22 5,33 0,4 1,8 1,11 1,7 2,12 3,17 2,5 4,9 7,15 1,3 4,7 6,10 2,3 4,5 6,6 4,3 4,7 2,10 -2,3 -7,4 -10,2 0,0 0,-1 0,-1 0,9 6,19 11,29 5,9 11,19 13,29 1,3 -1,7 -5,8 -1,0 -2,0 -2,0 1,5 2,11 3,16 1,4 -2,8 -5,8 -2,1 -4,0 -6,-1 1,4 1,7 2,11 1,5 2,12 4,17 1,4 -2,8 -5,9 -4,1 -8,-2 -9,-5 -2,-8 -3,-13 -4,-19 -2,-9 -3,-18 -7,-27 1,3 2,6 2,10 2,6 3,12 4,18 1,3 -1,7 -5,8 -3,1 -6,-1 -8,-3l1 3c2,8 4,15 5,22 1,4 -2,8 -6,9 -3,0 -7,-2 -8,-6 -1,-7 -3,-14 -4,-22 -2,-7 -4,-14 -5,-21 -2,12 -3,24 0,39 0,3 -2,7 -6,8 -4,1 -7,-2 -8,-6 -2,-11 -2,-20 -2,-29 -2,10 -3,22 -2,34 1,4 -2,7 -6,8 -4,0 -7,-3 -8,-7 -1,-10 -1,-21 1,-30 -3,3 -4,6 -5,10 -3,7 -2,16 1,26 1,3 -2,7 -5,8 -4,1 -8,-1 -9,-5 -3,-12 -4,-23 -1,-33 1,-1 1,-2 1,-3 -4,8 -7,17 -9,28 0,4 -4,6 -8,6 -3,-1 -6,-5 -5,-8 2,-12 5,-22 9,-30 -2,2 -3,3 -5,5 -2,3 -7,3 -10,1 -3,-3 -3,-7 -1,-10 2,-1 4,-5 8,-9 8,-10 21,-24 29,-35z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M220 103c-6,-4 -15,-7 -22,-9 -7,-2 -16,-4 -22,-9 -8,5 -16,8 -25,11 -20,6 -26,10 -32,26 1,-4 2,-7 3,-10 1,-4 4,-7 7,-11 6,-4 13,-7 21,-9 8,-3 17,-5 26,-11 6,4 14,7 23,9 8,3 17,5 23,9 5,4 9,8 13,13 2,3 4,7 5,10 -5,-7 -11,-13 -20,-19z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M138 345c1,4 0,8 -4,9 -4,2 -8,0 -9,-3 -4,-9 -6,-19 -6,-29 -4,8 -7,16 -9,27 -1,4 -4,6 -8,6 -4,-1 -6,-5 -6,-8 1,-2 1,-4 1,-6 -2,6 -5,11 -11,17 -3,3 -8,3 -10,0 -3,-3 -3,-7 0,-10 9,-9 11,-19 10,-29 -1,8 -4,15 -10,22 -2,3 -6,3 -9,1 -3,-3 -4,-7 -2,-10 6,-7 9,-16 9,-26 0,-4 -1,-7 -1,-11 -3,6 -7,12 -12,18 -2,3 -6,3 -9,1 -3,-3 -4,-7 -1,-10 10,-14 14,-25 13,-35 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-6 -4,-11 -7,-16 -2,1 -3,3 -4,4 -2,2 -4,5 -5,6 0,0 1,2 2,3 1,2 2,3 3,5 1,4 -1,8 -5,9 -3,2 -7,0 -9,-4 0,-1 0,-2 -1,-3 -2,-4 -5,-8 -3,-14 2,-4 4,-8 7,-11 2,-2 4,-5 5,-7 1,-5 0,-11 0,-17 -1,-7 -2,-15 0,-23 2,-7 6,-14 10,-21 2,-3 3,-5 5,-7 1,-4 1,-14 0,-24 0,-8 0,-15 1,-19 2,-5 10,-20 17,-33 7,-12 14,-23 16,-24 1,-1 2,-2 4,-2 3,-3 9,-6 12,-9 0,-1 -1,-2 -1,-3 0,-5 0,-10 5,-14 5,-3 9,-3 14,-2 2,0 3,1 4,0 0,0 0,-1 1,-2 2,-4 4,-8 10,-10l0 0c6,0 10,2 14,4 2,1 4,2 5,2 4,0 7,-1 10,-2 5,-1 10,-3 17,-2l0 0c6,1 8,5 11,8 1,2 3,3 3,4 1,0 4,-1 6,-2 6,-2 11,-4 17,-2 7,3 11,8 14,14 2,2 3,4 5,6 4,5 10,9 16,13 3,2 5,4 8,6 0,1 2,2 3,3 6,4 11,8 14,16 3,10 4,22 5,33 0,4 1,8 1,11 1,7 2,12 3,17 2,5 4,9 7,15 1,3 4,7 6,10 2,3 4,5 6,6 4,3 4,7 2,10 -2,3 -7,4 -10,2 0,0 0,-1 0,-1 0,9 6,19 11,29 5,9 11,19 13,29 1,3 -1,7 -5,8 -1,0 -2,0 -2,0 1,5 2,11 3,16 1,4 -2,8 -5,8 -2,1 -4,0 -6,-1 1,4 1,7 2,11 1,5 2,12 4,17 1,4 -2,8 -5,9 -4,1 -8,-2 -9,-5 -2,-8 -3,-13 -4,-19 -2,-9 -3,-18 -7,-27 1,3 2,6 2,10 2,6 3,12 4,18 1,3 -1,7 -5,8 -3,1 -6,-1 -8,-3l1 3c2,8 4,15 5,22 1,4 -2,8 -6,9 -3,0 -7,-2 -8,-6 -1,-7 -3,-14 -4,-22 -2,-7 -4,-14 -5,-21 -2,12 -3,24 0,39 0,3 -2,7 -6,8 -4,1 -7,-2 -8,-6 -2,-11 -2,-20 -2,-29 -2,10 -3,22 -2,34 1,4 -2,7 -6,8 -4,0 -7,-3 -8,-7 -1,-10 -1,-21 1,-30 -3,3 -4,6 -5,10 -3,7 -2,16 1,26 1,3 -2,7 -5,8 -4,1 -8,-1 -9,-5 -3,-12 -4,-23 -1,-33 1,-1 1,-2 1,-3 -4,8 -7,17 -9,28 0,4 -4,6 -8,6 -3,-1 -6,-5 -5,-8 2,-12 5,-22 9,-30 -2,2 -3,3 -5,5 -2,3 -7,3 -10,1 -3,-3 -3,-7 -1,-10 2,-1 4,-5 8,-9 13,-15 35,-41 37,-47 2,-8 1,-21 -1,-33 0,-7 -1,-14 -1,-20 0,-9 1,-18 1,-27 2,-16 3,-31 0,-45 -1,-5 -3,-9 -5,-13 -4,-5 -8,-9 -13,-13 -6,-4 -15,-6 -23,-9 -9,-2 -17,-5 -23,-9 -9,6 -18,8 -26,11 -8,2 -15,5 -21,9 -3,4 -6,7 -7,11 -2,4 -3,9 -4,15 -1,13 -3,26 -3,39 -1,12 0,25 1,38 1,6 5,13 9,19 3,5 6,10 8,15 2,4 0,0 1,3 4,10 8,20 10,31 1,7 0,14 -1,21 0,8 -1,16 1,22 1,6 5,11 10,16 2,3 5,6 7,9 2,4 1,8 -2,10 -3,2 -7,1 -10,-2 -1,-3 -4,-5 -6,-8 -4,-4 -7,-9 -10,-14 0,7 2,13 5,19z',
                            fillRule: "nonzero"
                        }
                    ]
                },
                {
                    name: 'nottoolong',
                    pathsBack: [
                        {
                            d: 'M272 146l0 -3 0 0 0 -15c0,-51 -42,-93 -93,-93l0 0c-44,0 -82,32 -90,75 0,0 -1,0 -1,0 -7,0 -13,7 -13,16 0,7 4,15 12,16l0 100c0,4 3,8 8,8l68 0 13 0 58 0c21,0 38,-17 38,-38l0 -66z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M261 146c-1,-2 -2,-3 -3,-5 -21,-8 -40,-22 -54,-54 -6,14 -18,26 -34,31 7,-7 13,-15 14,-25 -28,25 -55,40 -80,46 -2,2 -3,3 -4,5 28,-6 54,-21 76,-39 -3,4 -5,7 -9,10l-11 11 15 -5c14,-4 25,-14 33,-26 7,14 16,26 28,36 9,7 19,12 29,15z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M272 146c0,-6 0,-12 0,-18 0,-51 -42,-93 -93,-93l0 0c-44,0 -82,32 -90,75 0,0 -1,0 -1,0 -7,0 -13,7 -13,16 0,7 4,15 12,16 31,-2 63,-19 97,-49 -1,10 -7,18 -14,25 16,-5 28,-17 34,-31 16,39 42,51 68,59z',
                        }
                    ]
                },
                {
                    name: 'miawallace',
                    pathsBack: [
                        {
                            d: 'M92 256c25,-4 58,-9 87,-9 29,0 61,5 86,9 45,-50 26,-79 8,-134 -21,-60 -30,-83 -94,-83 -64,0 -74,23 -94,83 -19,55 -37,84 7,134z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M249 130l0 -2c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 1c10,-3 21,-3 34,-3l3 0 2 -11 2 11 3 0c8,0 16,0 24,0 8,0 16,0 24,0 7,0 14,0 21,0 8,0 17,1 25,4z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M179 39c-64,0 -74,23 -94,83 -4,12 -8,23 -12,33l0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c19,-29 38,-33 72,-33l5 -24 5 24c7,0 15,1 24,1 55,0 81,-6 105,32l0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c-3,-10 -7,-21 -11,-33 -21,-60 -30,-83 -94,-83z',
                        }
                    ]
                },
                {
                    name: 'longhairstraight',
                    pathsBack: [
                        {
                            d: 'M116 318l157 0 0 -178 0 -11c0,-51 -42,-92 -93,-92l0 0c-50,0 -92,41 -92,92 0,74 0,148 0,222 16,-2 28,-16 28,-33z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M249 135l0 -7c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 7 5 -6c32,-3 60,-23 80,-46 12,24 28,44 53,52z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M273 140l0 -11c0,-51 -42,-92 -93,-92l0 0c-50,0 -92,41 -92,92 0,74 0,148 0,222 16,-2 28,-16 28,-33 0,-59 0,-129 0,-189 31,-8 58,-25 81,-53 18,40 42,63 76,64z',
                        }
                    ]
                },
                {
                    name: 'longhairstraight2',
                    pathsBack: [
                        {
                            d: 'M63 342c45,9 73,1 83,-51l85 0c29,23 59,46 73,53 7,-3 13,-21 6,-44 -12,-41 -45,-78 -48,-120 -3,-38 3,-86 -2,-102 -6,-19 -26,-39 -53,-33 -5,-8 -22,-18 -47,-13 -31,7 -68,38 -69,80 -2,99 -1,215 -28,230z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M249 136l0 -8c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 8c17,-11 34,-19 41,-22 11,-4 21,-8 31,-12 8,-4 16,-8 23,-13 1,1 3,1 4,2 7,5 14,9 20,16 1,2 19,29 19,29z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M261 147c1,-27 3,-58 -1,-69 -6,-19 -26,-39 -53,-33 -5,-8 -22,-18 -47,-13 -31,7 -68,38 -69,80 -1,27 -1,56 -2,84 1,-22 6,-45 22,-60 25,-25 73,-32 94,-52 16,11 33,18 44,52l0 0c6,1 11,5 12,11z',
                        }
                    ]
                },
                {
                    name: 'shorthairshaggy',
                    pathsBack: [
                        {
                            d: 'M120 190c36,2 72,4 108,6 -1,24 1,38 22,36 -7,5 -14,7 -22,6 3,4 10,5 18,5 -18,17 -30,10 -40,-6 -18,2 -36,5 -54,8 -15,13 -37,14 -70,-9 14,3 27,-13 38,-46z'
                        }
                    ],
                    pathsFront: [
                        {
                            d: 'M247 138l0 -8c0,-37 -30,-68 -68,-68l0 0c-38,0 -102,51 -68,68l20 11 -14 12c15,-3 23,-4 35,-13 9,-7 16,-17 22,-28 0,2 -1,3 -1,5l-4 11 9 -7c8,-5 14,-14 17,-24 3,5 6,9 10,13 3,3 6,6 9,8l10 9 -4 -12c0,-1 0,-1 -1,-2 9,5 17,12 28,25z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M78 100c19,11 27,-19 35,-33 11,-17 41,-30 72,-13 23,-8 49,3 62,21 12,17 11,43 0,63 -3,-12 -21,-24 -34,-33 1,3 1,5 3,11 -9,-9 -17,-15 -22,-29 -1,10 -8,25 -18,31 3,-7 2,-15 0,-20 -5,13 -14,29 -26,39 -13,10 -29,16 -45,18 10,-5 17,-8 19,-14 -36,18 -56,-6 -46,-41z',
                        }
                    ]
                },
                {
                    name: 'shorthairdreads',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M105 91c0,0 0,-1 0,-1 -1,-2 0,-5 2,-6 1,-1 1,-2 1,-3 0,-1 -1,-1 -1,-2 -1,-3 1,-5 3,-6 1,0 2,0 3,0 0,-1 0,-1 1,-2 -2,0 -3,-2 -3,-5 1,-2 3,-4 5,-3 1,0 3,1 4,1 1,-1 2,-2 3,-4 0,0 0,-1 0,-2 0,-1 0,-3 0,-5 -1,-2 1,-4 3,-5 3,0 5,1 5,4 0,1 0,1 0,2 2,-2 4,-3 6,-4 0,-1 0,-3 0,-4 0,-3 2,-5 4,-5 3,0 5,2 5,5l0 0c1,0 3,-1 4,-1 0,-1 0,-1 0,-2 -1,-2 0,-4 2,-5 3,-1 5,0 6,3 0,0 0,1 0,1 2,-1 4,-1 7,-1 0,-1 0,-1 0,-2 0,-2 2,-4 4,-4 3,0 4,2 4,5 2,-1 4,-1 5,-1 1,-1 2,-3 4,-2 2,0 4,1 4,3 2,0 3,0 5,0 1,-1 2,-2 4,-2 2,0 3,2 4,4 1,0 2,0 4,1l0 0c0,0 0,0 1,0 2,-1 4,0 5,2 0,0 1,1 1,1 1,1 3,2 5,3 0,0 0,1 1,1 0,-1 1,-1 1,-2 2,-1 5,-1 7,1 1,1 1,4 -1,6 0,0 -1,1 -2,2 1,0 1,1 2,1 0,0 1,0 1,-1 2,0 4,-1 6,-2 2,-1 4,0 6,2 1,2 0,4 -2,5 1,1 3,1 4,2 1,0 3,-1 5,-1 2,-1 4,1 5,3 0,3 -1,5 -4,6 0,0 0,0 0,0 1,2 3,5 4,9 6,22 -1,23 -18,13 -10,-5 -26,-12 -50,-11 -13,0 -28,1 -46,8 -12,5 -18,9 -18,16 -1,13 -4,26 -4,29 -1,0 -3,0 -5,1 -1,-3 -1,-7 -2,-10 -1,-10 -2,-19 0,-26 0,-4 0,-7 0,-10zm134 16c-2,-6 4,-6 6,-4 3,3 4,7 5,11 1,3 1,21 -1,22 -4,0 -2,-9 -5,-18 -1,-6 -5,-11 -5,-11z',
                            fillRule: 'nonzero'
                        }
                    ]
                },
                {
                    name: 'shorthairdreads2',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M180 59l0 0c-29,0 -55,18 -65,45 5,-7 19,-12 26,-12 6,0 17,0 25,0 5,0 10,0 14,0 5,0 9,0 13,0 9,0 18,-1 26,0 6,1 19,4 26,12 -10,-27 -36,-45 -65,-45z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M126 229c-1,0 -1,0 -1,1 0,0 -1,1 -2,1 -2,2 -5,3 -7,3 -1,1 -2,1 -3,3 -1,1 -3,2 -5,1 -2,-1 -2,-3 -2,-4 2,-4 5,-5 8,-6 1,-1 2,-1 3,-2 -4,-4 -8,-8 -11,-12l0 0c-1,0 -3,0 -7,0 -1,-1 -3,-2 -2,-4 0,-2 2,-4 4,-3l0 0c-5,-7 -7,-12 -8,-16 -2,0 -4,2 -5,3 -1,2 -2,4 -3,6 0,1 -2,2 -4,2 -2,-1 -3,-3 -2,-5 1,-2 2,-5 4,-7 0,-1 0,-1 1,-2 -4,1 -9,-1 -10,-2 -2,-2 -2,-4 -1,-5 1,-2 3,-2 5,-1 1,1 3,1 6,1 1,0 2,0 3,0 -2,-1 -4,-3 -6,-5 0,-1 -1,-2 -2,-2 -1,-2 -1,-4 1,-5 1,-1 3,-1 5,0 1,1 1,2 2,2 2,2 3,4 3,3 0,0 0,0 1,-1 0,0 1,-1 1,-2 -1,-3 -2,-4 -4,-6 0,0 -1,-1 -1,-1 -4,2 -7,2 -11,2 -6,-1 -11,-5 -14,-8 -1,-1 -1,-4 0,-5 1,-1 4,-1 5,0 2,2 6,5 10,6 2,0 4,0 5,-1 0,-1 -1,-4 -1,-6l-10 -8c-2,-1 -2,-3 -1,-5 1,-1 4,-1 5,0l6 4c0,-4 1,-8 2,-14 -1,-1 -2,-2 -3,-3 -2,-2 -5,-4 -7,-5 -2,0 -3,1 -4,1 -1,1 -2,2 -3,3 -2,2 -4,2 -5,0 -2,-1 -2,-3 0,-5 1,-1 3,-3 4,-4 3,-1 5,-2 8,-2 5,1 8,3 11,6 0,0 0,0 0,-1 -2,-2 -5,-4 -8,-6l0 0c-4,-3 -7,-5 -9,-6 -2,-1 -3,-3 -2,-4 0,-2 3,-3 4,-3 3,1 7,4 11,7l0 0c0,0 0,0 1,1 0,-1 -1,-2 -1,-2 0,0 0,0 0,-1 -4,-1 -6,-4 -7,-6 0,-2 1,-4 2,-5 2,0 4,1 5,3 0,0 0,0 0,0 1,0 1,-1 1,-2 -4,-4 -6,-2 -10,1l-1 0c-1,1 -4,1 -5,-1 -1,-1 -1,-3 1,-4l1 -1c7,-5 10,-8 16,-2 0,-1 1,-1 1,-2 1,-3 3,-6 4,-8 -4,-4 -6,-11 -7,-15 0,0 -1,-1 -1,-1 0,-2 1,-4 2,-5 2,-1 4,0 5,2 0,1 0,1 0,2 1,2 2,5 3,8 0,-2 0,-3 0,-4 -1,-2 -2,-3 1,-8 -1,0 -2,-1 -2,-2 -3,-4 -5,-8 -5,-13 -1,-2 1,-4 3,-4 2,0 3,1 4,3 0,4 2,7 3,10 1,0 1,1 2,1 1,0 3,0 6,1 0,0 1,0 2,0 0,-3 1,-6 2,-9 0,-3 1,-6 2,-7 2,-2 4,-2 5,-1 2,1 2,3 1,5 0,1 -1,3 -2,5l0 0c3,-2 7,-6 11,-9 -3,-5 -3,-11 -3,-16 0,-2 0,-3 0,-5 -1,-2 1,-3 3,-3 2,0 3,1 4,3 0,2 0,3 0,5 0,4 0,8 2,12 2,-1 4,-2 6,-3 2,-5 1,-7 1,-10 0,-1 0,-2 0,-4 0,-1 1,-3 3,-3 2,0 4,1 4,3 0,1 0,2 0,3 0,3 1,5 0,7 3,0 5,-1 8,-2 0,-5 1,-7 3,-10 1,-1 1,-2 2,-3 1,-2 3,-2 5,-1 2,1 2,3 1,4 -1,2 -1,3 -1,3 -2,2 -2,4 -3,6 2,0 3,0 5,0 1,-5 2,-7 4,-9l1 0c1,-2 3,-2 5,0 1,1 1,3 0,5l-1 0c-1,1 -1,2 -2,3 3,1 6,1 10,1 -1,0 -1,-1 -2,-1 0,-1 0,-1 -1,-1 -1,-2 -1,-4 1,-5 1,-2 3,-1 5,0 0,0 0,0 0,1 2,2 4,3 5,7 1,0 2,1 3,1l4 1c6,-6 7,-7 8,-8 0,-1 1,-2 2,-4 1,-2 4,-2 5,-1 2,2 2,4 1,5 -1,2 -2,2 -2,3 -1,1 -1,3 -5,7 2,0 4,0 6,1 1,-4 3,-6 4,-8 0,-1 0,-1 1,-2 0,-2 3,-2 4,-1 2,1 3,3 2,4 0,1 -1,2 -1,2 -1,2 -2,4 -3,6 3,1 4,1 5,2 1,-2 1,-3 1,-4 1,-4 4,-6 6,-7 1,-1 3,-1 4,1 2,1 1,3 0,4 -1,1 -2,2 -3,4 -1,2 -1,6 0,11 1,0 2,0 3,1 0,0 0,0 0,0 1,-2 1,-4 2,-5 0,-2 0,-3 0,-5 0,-2 2,-3 4,-3 2,0 3,2 3,4 0,2 0,3 0,4 -1,2 -1,4 -2,7 2,1 4,2 6,3 1,-2 1,-4 1,-5 0,-2 1,-4 3,-4 2,0 4,2 4,4 0,3 0,6 -1,9 -1,1 -1,2 -1,3 0,0 0,1 0,1 0,1 0,3 1,3 1,1 1,1 2,1 1,0 2,-1 3,-1 1,-4 1,-6 0,-8 0,-1 0,-3 0,-5 0,-2 1,-4 3,-4 2,0 4,2 4,4 0,1 0,2 0,3 1,3 2,6 -1,16 0,0 -1,1 -1,2 1,2 2,4 3,7 0,-3 1,-5 1,-6 0,0 0,-1 0,-2 0,-1 2,-3 4,-2 2,0 3,2 3,4 0,0 0,0 0,1 0,2 -1,6 -3,10 -1,2 -2,3 -2,4 0,1 1,3 1,5 2,-5 3,-10 4,-10 0,-2 1,-4 3,-4 2,1 4,2 4,4 -1,2 -3,9 -5,14l0 1c1,-2 3,-4 4,-5 2,-1 4,-1 5,0 1,2 1,4 0,5 -1,1 -2,3 -4,5 -2,2 -4,4 -6,6l1 2c0,2 0,3 1,4 1,-4 2,-7 2,-8 0,-2 2,-4 4,-4 1,0 3,2 3,4 0,2 -1,6 -3,11 3,-2 6,-4 8,-4 2,0 3,2 3,4 0,2 -1,4 -3,4 -1,0 -5,2 -9,4 -1,1 -3,2 -4,3 0,0 0,0 0,1l0 0c3,0 6,1 8,1 2,0 3,1 3,3 0,2 -1,4 -3,4 -3,0 -5,-1 -8,-1l0 0c5,2 9,5 9,5 2,1 3,3 2,5 -1,1 -3,2 -5,1 -2,-1 -5,-3 -9,-5l0 0c-1,1 -1,1 -1,1 2,1 4,2 6,3 4,2 8,5 12,6 1,1 2,3 2,5 -1,1 -3,2 -5,2 -3,-2 -6,-3 -9,-5 0,1 1,3 1,4l0 1c2,1 3,2 4,3 2,1 3,4 4,8 0,3 0,6 0,10 0,2 -1,3 -3,3 -2,0 -4,-1 -4,-3 0,-4 0,-7 0,-9 -1,-2 -1,-3 -2,-4 0,0 -1,-1 -1,-1 -1,1 -2,2 -3,3 -1,1 -1,2 -2,3 2,3 4,6 6,10l0 1c1,2 1,4 -1,5 -2,1 -4,0 -5,-1l0 -2 -1 0c0,1 0,2 -1,4 5,1 5,3 6,5 0,1 1,3 2,4 1,2 1,4 -1,5 -1,1 -4,1 -5,-1 -1,-2 -2,-4 -2,-5 -1,-1 -1,-1 -5,-3 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 -1,1 -3,1 -3,2 -1,2 -2,3 -2,3 2,1 4,1 7,2 0,0 1,0 2,0 2,0 3,1 3,3 0,2 -2,4 -4,4 -1,0 -1,0 -2,0 -2,-1 -4,-1 -6,-1 0,1 -1,1 -1,2 1,1 4,2 8,2 2,1 3,2 3,4 0,2 -2,4 -4,3 -6,-1 -10,-2 -12,-3 -2,2 -5,5 -8,8 0,0 0,1 1,1 3,1 6,2 9,3 1,0 3,2 2,4 0,2 -2,3 -4,3 -2,-1 -6,-2 -10,-4 1,2 1,4 1,6 1,4 2,8 2,13 -1,2 -2,3 -4,3 -2,0 -4,-2 -3,-4 0,-4 -1,-7 -2,-11 0,-3 -1,-6 -1,-10 0,-1 0,-2 0,-2 0,0 0,0 0,-1 0,0 0,-1 0,-2l0 0c-1,1 -1,1 -2,2 9,-11 14,-24 15,-38 7,-1 13,-7 13,-15l0 -15c0,-8 -6,-14 -13,-15l0 -8c0,-9 -2,-18 -5,-26 -10,-18 -39,-13 -64,-14 -25,1 -54,-4 -64,14 -3,8 -5,17 -5,26l0 8c-7,1 -13,7 -13,15l0 15c0,8 6,14 13,15 2,18 9,34 22,45 -3,1 -6,2 -7,3z',
                            fillRule: 'nonzero'
                        }
                    ]
                },
                {
                    name: 'shorthairfrizzle',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M129 82c36,0 66,0 102,0 10,-6 20,-16 22,-27 1,-11 -4,-25 -12,-33 -4,5 -12,19 -31,19 -15,1 -30,-7 -45,-4 -11,3 -16,15 -24,22 -5,4 -12,5 -15,10 -1,4 1,10 3,13z',
                        }
                    ]
                },
                {
                    name: 'shorthaircurly',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M249 136l0 -8c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 8c4,-20 4,-32 24,-53 6,1 12,2 19,2 4,1 9,1 14,1 11,-1 26,-3 36,-9 2,1 5,2 7,3 2,1 4,2 5,3 3,7 10,11 16,15 3,15 13,21 17,38z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M205 73c-8,5 -21,9 -38,9 -11,1 -34,-3 -33,-3 -16,14 -23,32 -23,57 -1,0 -3,1 -4,1 -2,-8 -3,-10 -3,-23 0,-12 5,-32 12,-45 -4,-4 -6,-8 -6,-14 0,-10 9,-19 21,-19 1,0 2,1 4,1 7,-7 23,-12 41,-12 21,0 39,6 44,15 1,0 2,-1 4,-1 6,0 10,4 10,8 0,1 0,2 0,3 1,-1 2,-1 3,-1 7,0 13,7 13,13 0,5 0,6 -4,9 12,16 11,47 6,66 -1,0 -1,-1 -3,-1 0,-6 1,-10 -2,-14 -6,-8 -10,-17 -12,-26 -6,-4 -14,-8 -15,-15 -4,-4 -12,-5 -15,-8z',
                        }
                    ]
                },
                {
                    name: 'shorthairflat',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M246 137l3 -9c10,-36 -31,-69 -69,-69l0 0c-38,0 -75,32 -69,69l1 9c2,-14 2,-16 9,-32 4,-6 8,-11 13,-16 4,-4 7,-8 9,-13 24,3 47,2 70,0 2,3 5,6 8,9 2,3 5,5 8,7 4,3 6,7 8,12 4,10 6,23 9,33z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M173 41l12 -1c5,0 14,-4 19,-7 0,3 -1,6 -2,9 3,-1 8,-5 12,-6 0,3 -1,4 -2,8 4,-3 9,-5 13,-4 -3,2 -4,7 -1,9 23,15 28,38 28,56l0 32c-2,0 -4,0 -6,0 -3,-56 -17,-41 -31,-65 -25,3 -49,4 -74,0 -9,20 -29,21 -29,65l-5 0 0 -32c0,-36 23,-62 66,-64z',
                        }
                    ]
                },
                {
                    name: 'shorthairround',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M248 136l0 -7c0,-38 -31,-69 -68,-69l0 0c-38,0 -69,31 -69,69l0 7c0,-19 12,-41 34,-48 0,1 0,2 0,3l0 3 3 0c19,1 36,-4 52,-13 3,3 8,6 12,8 6,4 13,7 19,11 3,2 6,4 8,7 7,10 6,12 9,29z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M180 45l0 0c40,0 73,33 73,73l0 6c0,4 -1,9 -1,13 -1,0 -3,0 -4,-1 -1,-22 -2,-32 -15,-39 -14,-8 -27,-14 -32,-21 -16,9 -33,16 -52,15 0,-3 1,-6 1,-8 -30,9 -39,26 -39,53l-4 2c0,-4 -1,-10 -1,-14l0 -6c0,-40 33,-73 74,-73z',
                        }
                    ]
                },
                {
                    name: 'shorthairwaved',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M248 136l1 -8c4,-37 -31,-69 -69,-69l0 0c-38,0 -76,32 -69,69l2 8c2,-11 2,-16 9,-33 3,-6 7,-10 12,-15 3,-3 5,-5 7,-9 24,18 52,15 78,2 1,3 2,5 5,7 1,2 4,3 6,5 2,2 4,4 5,6 9,18 9,22 13,37z',
                            fillOpacity: 0.2
                        },
                        {
                            d: 'M251 136c5,-9 8,-5 8,-31 0,-31 -9,-31 -15,-44 -3,-4 15,-16 0,-31 -13,-12 -22,3 -35,3 -7,-1 -15,-3 -23,-5 -8,-2 -31,-3 -43,4 -11,8 -20,17 -21,28 -14,10 -20,27 -20,45 0,11 3,22 7,31 1,0 3,0 4,0 0,-47 19,-43 27,-62 22,19 50,18 81,2 4,18 22,5 27,60l3 0z',
                        }
                    ]
                },
                {
                    name: 'shorthairsides',
                    pathsBack: [],
                    pathsFront: [
                        {
                            d: 'M113 136c1,-1 1,-2 1,-3 0,-12 1,-19 2,-31 0,0 -1,0 -2,0 -4,4 -10,13 -12,32 0,2 1,4 3,4 2,-1 4,-2 6,-2l2 0zm134 0c-1,-1 -1,-2 -1,-3 0,-12 -1,-19 -2,-31 0,0 1,0 2,0 4,4 10,13 12,32 0,2 -1,4 -3,4 -2,-1 -4,-2 -6,-2l-2 0z'
                        }
                    ]
                }
            ],
            skins: [
                {
                    paths: [
                            {
                                d: 'M304 360l0 -15c0,-47 -39,-85 -86,-85l-8 0 0 -22c22,-10 37,-32 39,-57 7,-1 13,-7 13,-15l0 -15c0,-8 -6,-14 -13,-15l0 -8c0,-38 -31,-69 -69,-69l0 0c-38,0 -69,31 -69,69l0 8c-7,1 -13,7 -13,15l0 15c0,8 6,14 13,15 2,25 17,47 39,57l0 22 -8 0c-47,0 -86,38 -86,85l0 15 248 0z'
                            },
                            {
                                d: 'M180 256c-11,0 -21,-2 -30,-6l0 -12c9,5 19,7 30,7l0 0c11,0 21,-2 30,-7l0 12c-9,4 -19,6 -30,6z',
                            },
                            {
                                d: 'M180 181c9,0 16,-4 16,-9l-32 0c0,5 7,9 16,9z'
                            }
                        ]
                }
            ],
            accessories: [
                {
                    name: 'empty',
                    paths: []
                },
                {
                    name: 'earphones',
                    paths: [
                        {
                            d: 'M101 154c1,-2 2,-3 4,-3l4 0c2,0 3,1 3,3l0 10c0,2 -1,4 -3,4l-4 0c-2,0 -3,-2 -4,-4l0 7c0,0 0,1 -1,1l0 0c0,15 10,28 25,46 4,4 7,8 11,13 5,6 10,10 14,13 7,6 13,10 17,22 1,4 1,8 1,14 0,6 -1,13 1,20 2,11 3,25 3,39 0,7 1,15 1,21l0 1 -2 0 0 -1c-1,-6 -1,-14 -1,-21 -1,-14 -1,-28 -3,-38 -2,-7 -2,-15 -1,-21 0,-5 0,-10 -1,-13 -4,-11 -10,-16 -16,-21 -5,-3 -10,-7 -15,-13 -3,-5 -7,-9 -10,-13 -16,-19 -27,-32 -27,-48l0 0c0,0 -1,-1 -1,-1 0,-5 0,-9 0,-14 0,-2 3,-3 5,-3z',
                        },
                        {
                            d: 'M259 154c-1,-2 -2,-3 -4,-3l-4 0c-2,0 -3,1 -3,3l0 10c0,2 1,4 3,4l4 0c2,0 3,-2 4,-4l0 7c0,0 0,1 1,1l0 0c0,10 -10,18 -22,27 -9,7 -20,15 -29,26 -4,6 -11,10 -19,15 -13,8 -26,17 -25,29l1 2 2 -1 0 -1c-1,-11 11,-19 23,-27 8,-5 15,-9 20,-15 9,-11 19,-19 29,-26 12,-10 23,-17 23,-29l0 0c0,0 1,-1 1,-1 0,-5 0,-9 0,-14 0,-2 -3,-3 -5,-3z'
                        }
                    ]
                },
                {
                    name: 'earring1',
                    paths: [
                        {
                            d: 'M103 173c0,-1 0,-3 1,-4 2,-1 4,0 4,1 1,1 1,2 2,3 0,1 0,2 0,3 0,3 -1,6 -3,8l0 0c-2,2 -5,3 -8,3 -3,0 -6,-1 -8,-3 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 1,-2 4,-3 7,-3l0 0 0 1c0,2 0,3 1,4 0,0 0,0 -1,0 -1,1 -2,1 -3,2 -1,1 -2,2 -2,4 0,1 1,3 2,3 1,1 2,2 4,2 1,0 3,-1 3,-2l0 0c1,0 2,-2 2,-3 0,-1 0,-1 0,-2 0,0 0,0 -1,-1z',
                            fillRule: 'nonzero'
                        },
                        {
                            d: 'M261 170c0,0 0,0 0,0 0,-1 0,-2 0,-4l0 -1c3,0 6,1 8,3 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,3 -8,3 -3,0 -6,-1 -8,-3 -2,-2 -3,-5 -3,-8 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 2,-2 4,-1 1,1 1,3 1,4 -1,1 -1,1 -1,1 0,1 0,1 0,2 0,1 1,3 2,3 1,1 2,2 3,2 2,0 3,-1 4,-2l0 0c1,0 2,-2 2,-3 0,-2 -1,-3 -2,-4 -1,-1 -2,-2 -4,-2z',
                            fillRule: 'nonzero'
                        }
                    ]
                },
                {
                    name: 'earring2',
                    paths: [
                        {
                            d: 'M108 201c3,0 5,2 7,4 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,4 -8,4 -4,0 -7,-2 -9,-4 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 2,-2 5,-4 7,-4l0 -25c-1,0 -2,-1 -2,-3 0,-2 2,-3 4,-3 1,0 3,1 3,3 0,2 -1,3 -2,3l0 25zm3 8c-1,-1 -3,-2 -4,-2 -2,0 -3,1 -5,2 -1,1 -1,2 -1,4 0,1 0,3 1,4 2,1 3,2 5,2 1,0 3,-1 4,-2l0 0c1,-1 1,-3 1,-4 0,-2 0,-3 -1,-4z',
                            fillRule: 'nonzero'
                        },
                        {
                            d: 'M255 201c2,0 5,2 7,4 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,4 -9,4 -3,0 -6,-2 -8,-4 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 2,-2 4,-4 7,-4l0 -25c-1,0 -2,-1 -2,-3 0,-2 2,-3 3,-3 2,0 4,1 4,3 0,2 -1,3 -2,3l0 25zm3 8c-2,-1 -3,-2 -5,-2 -1,0 -3,1 -4,2 -1,1 -1,2 -1,4 0,1 0,3 1,4 1,1 3,2 4,2 2,0 3,-1 5,-2l0 0c1,-1 1,-3 1,-4 0,-2 0,-3 -1,-4z',
                            fillRule: 'nonzero'
                        }
                    ]
                },
                {
                    name: 'earring3',
                    paths: [
                        {
                            d: 'M261 170c0,0 0,0 0,0 0,-1 0,-2 0,-4l0 -1c3,0 6,1 8,3 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,3 -8,3 -3,0 -6,-1 -8,-3 -2,-2 -3,-5 -3,-8 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 2,-2 4,-1 1,1 1,3 1,4 -1,1 -1,1 -1,1 0,1 0,1 0,2 0,1 1,3 2,3 1,1 2,2 3,2 2,0 3,-1 4,-2l0 0c1,0 2,-2 2,-3 0,-2 -1,-3 -2,-4 -1,-1 -2,-2 -4,-2z',
                            fillRule: 'nonzero'
                        }
                    ]
                }
            ],
            eyes: [
                {
                    name: 'default',
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 8,
                            fillOpacity: 0.7
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'dizzy',
                    polygons: [
                        {
                            points: '139,141 146,149 154,141 157,145 150,152 157,160 154,163 146,156 139,163 135,160 143,152 135,145 ',
                            strokeWidth: 0.9,
                            fillOpacity: 0.7
                        },
                        {
                            points: '206,141 213,149 221,141 224,145 217,152 224,160 221,163 213,156 206,163 202,160 210,152 202,145 ',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'eyeroll',
                    circles: [
                        {
                            cx: 148,
                            cy: 152,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 148,
                            cy: 143,
                            r: 8,
                            strokeWidth: 0.9
                        },
                        {
                            cx: 212,
                            cy: 152,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 143,
                            r: 8,
                        }
                    ]
                },
                {
                    name: 'happy',
                    paths: [
                        {
                            d: 'M131 153c-1,0 0,2 1,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M202 153c0,0 1,2 2,1 2,-2 5,-3 11,-4 7,1 9,2 11,4 2,1 3,-1 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -13,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'close',
                    paths: [
                        {
                            d: 'M131 160c-1,0 0,-2 1,-1 2,2 5,3 11,4 7,-1 9,-2 11,-4 2,-1 3,1 2,1 -1,1 -5,7 -13,7 -7,0 -12,-6 -12,-7z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M202 160c0,0 1,-2 2,-1 2,2 5,3 11,4 7,-1 9,-2 11,-4 2,-1 3,1 2,1 -1,1 -5,7 -13,7 -7,0 -12,-6 -13,-7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'hearts',
                    paths: [
                        {
                            d: 'M138 138c4,0 7,2 9,5 1,-3 5,-5 8,-5 6,0 10,4 10,10 0,2 -1,5 -3,7 -5,5 -10,10 -15,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 4,-10 10,-10z',
                        },
                        {
                            d: 'M204 138c4,0 7,2 9,5 2,-3 5,-5 9,-5 5,0 10,4 10,10 0,2 -2,5 -3,7 -5,5 -11,10 -16,16l-16 -16c-2,-2 -3,-5 -3,-7 0,-6 5,-10 10,-10z',
                        }
                    ]
                },
                {
                    name: 'side',
                    paths: [
                        {
                            d: 'M229 155c0,4 -3,7 -7,7 -5,0 -8,-3 -8,-7 0,-2 1,-3 1,-5 -6,1 -9,2 -11,4 -2,1 -2,-1 -2,-1 1,-1 6,-8 14,-8 4,0 8,2 10,4 2,1 3,3 3,6z',
                            fillOpacity: 0.7
                        },
                        {
                            d: 'M157 155c0,4 -3,7 -7,7 -4,0 -8,-3 -8,-7 0,-2 1,-3 2,-5 -7,1 -10,2 -12,4 -1,1 -2,-1 -1,-1 0,-1 6,-8 13,-8 4,0 8,2 11,4 1,1 2,3 2,6z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'wink',
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 7,
                            fillOpacity: 0.7
                        }
                    ],
                    paths: [
                        {
                            d: 'M225 155c1,1 0,3 -2,1 -2,-1 -4,-3 -11,-3 -6,0 -9,2 -11,3 -1,2 -2,0 -2,-1 1,-1 6,-7 13,-7 8,0 12,6 13,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'squint',
                    paths: [
                        {
                            d: 'M148 159c-6,0 -13,1 -17,1 0,-1 0,-2 0,-3 0,-9 7,-16 17,-16 9,0 16,7 16,16 0,1 0,2 0,3 -3,0 -11,-1 -16,-1z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M148 159c-2,0 -3,0 -4,0 -2,-1 -4,-3 -4,-6 0,-3 3,-6 8,-6 4,0 7,3 7,6 0,3 -1,5 -3,6 -2,0 -3,0 -4,0z',
                        },
                        {
                            d: 'M212 159c-5,0 -13,1 -16,1 0,-1 0,-2 0,-3 0,-9 7,-16 16,-16 10,0 17,7 17,16 0,1 0,2 0,3 -4,0 -11,-1 -17,-1z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M212 159c-1,0 -2,0 -4,0 -2,-1 -3,-3 -3,-6 0,-3 3,-6 7,-6 4,0 8,3 8,6 0,3 -2,5 -4,6 -1,0 -2,0 -4,0z',
                        }
                    ]
                },
                {
                    name: 'surprised',
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 148,
                            cy: 153,
                            r: 8
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 17,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8
                        }
                    ]
                },
                {
                    name: 'winkwacky',
                    circles: [
                        {
                            cx: 212,
                            cy: 153,
                            r: 15,
                            fillOpacity: 0.7,
                            fill: '#FEFEFE'
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                        }
                    ],
                    paths: [
                        {
                            d: 'M131 156c-1,1 0,3 1,1 2,-1 5,-3 11,-3 7,0 9,2 11,3 2,2 3,0 2,-1 -1,-1 -5,-7 -13,-7 -7,0 -12,6 -12,7z',
                            fillOpacity: 0.7
                        }
                    ]
                },
                {
                    name: 'cry',
                    circles: [
                        {
                            cx: 148,
                            cy: 153,
                            r: 8,
                        },
                        {
                            cx: 212,
                            cy: 153,
                            r: 8,
                        }
                    ],
                    paths: [
                        {
                            d: 'M134 173c0,-3 6,-12 8,-14 2,2 7,11 7,14 0,4 -3,8 -7,8 0,0 0,0 0,0 0,0 0,0 0,0 -4,0 -8,-4 -8,-8z',
                        }
                    ]
                }
            ],
            eyebrows: [
                {
                    name: 'default',
                    paths: [
                        {
                            d: 'M128 138c-1,1 -3,1 -4,0 -1,-1 -1,-2 0,-3 5,-6 10,-9 16,-11 6,-2 13,-2 20,0 2,0 3,2 2,3 0,2 -1,3 -3,2 -6,-1 -12,-2 -17,0 -5,1 -10,4 -14,9z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M232 138c1,1 2,1 3,0 2,-1 2,-2 1,-3 -5,-6 -11,-9 -17,-11 -6,-2 -13,-2 -20,0 -1,0 -2,2 -2,3 1,2 2,3 3,2 7,-1 13,-2 18,0 5,1 10,4 14,9z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'default2',
                    paths: [
                        {
                            d: 'M124 136c5,-4 11,-5 18,-6 5,-1 12,-1 20,1 -5,-6 -14,-10 -22,-7 -7,1 -13,5 -16,12z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M237 136c-5,-4 -12,-5 -18,-6 -5,-1 -12,-1 -20,1 5,-6 14,-10 22,-7 7,1 13,5 16,12z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'raised',
                    paths: [
                        {
                            d: 'M126 136c5,-4 8,-10 14,-13 7,-3 12,-5 23,-5 -10,-3 -20,-4 -27,0 -6,4 -9,11 -10,18z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M235 136c-5,-4 -8,-10 -14,-13 -8,-3 -12,-5 -23,-5 10,-3 20,-4 26,0 6,4 10,11 11,18z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'sad',
                    paths: [
                        {
                            d: 'M125 139c-2,-1 -2,-2 -2,-4 1,-1 3,-2 4,-1 0,0 1,0 1,1 6,2 12,2 17,0 5,-2 9,-6 12,-13 0,0 0,-1 1,-1 0,-2 2,-2 3,-2 2,1 2,2 2,4 -1,0 -1,1 -1,2 -4,7 -9,12 -15,15 -6,3 -14,3 -21,0 0,-1 -1,-1 -1,-1z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M234 139c2,-1 2,-2 1,-4 0,-1 -2,-2 -3,-1 -1,0 -1,0 -1,1 -6,2 -12,2 -17,0 -5,-2 -9,-6 -12,-13 0,0 -1,-1 -1,-1 -1,-2 -2,-2 -3,-2 -2,1 -2,2 -2,4 0,0 1,1 1,2 4,7 9,12 15,15 6,3 13,3 21,0 0,-1 1,-1 1,-1z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'sad2',
                    paths: [
                        {
                            d: 'M125 139c7,0 18,-1 22,-4 5,-4 11,-9 15,-15 0,5 -4,15 -10,19 -7,4 -20,4 -27,0z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M235 139c-8,0 -18,-1 -23,-4 -5,-4 -10,-9 -14,-15 0,5 3,15 10,19 7,4 19,4 27,0z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'unibrow',
                    paths: [
                        {
                            d: 'M120 136c3,-5 10,-11 17,-12 7,-1 14,3 20,4 7,1 13,3 20,4 -7,4 -12,4 -18,4 -7,0 -15,-4 -22,-4 -6,0 -11,2 -17,4z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M240 136c-3,-5 -10,-11 -17,-12 -7,-1 -14,3 -20,4 -7,1 -13,3 -20,4 7,4 12,4 18,4 7,0 15,-4 22,-4 6,0 11,2 17,4z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'updown',
                    paths: [
                        {
                            d: 'M128 134c-1,1 -2,1 -4,0 -1,-1 -1,-3 0,-4 7,-7 13,-10 20,-12 6,-1 12,0 18,3 2,1 2,2 2,4 -1,1 -3,2 -4,1 -5,-3 -10,-4 -15,-2 -6,1 -11,4 -17,10z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M237 139c1,1 0,3 -1,4 -1,1 -2,1 -3,0 -5,-5 -10,-8 -16,-9 -6,-2 -12,-2 -16,0 -2,1 -3,0 -4,-1 0,-1 0,-3 2,-4 5,-2 13,-2 20,-1 6,2 12,6 18,11z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'updown2',
                    paths: [
                        {
                            d: 'M126 136c5,-4 8,-10 14,-13 7,-3 12,-5 23,-5 -10,-3 -20,-4 -27,0 -6,4 -9,11 -10,18z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M237 145c-6,-3 -11,-7 -18,-8 -8,-1 -13,-2 -23,2 8,-6 17,-10 25,-8 7,2 12,7 16,14z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'angry',
                    paths: [
                        {
                            d: 'M127 136c-2,1 -3,1 -4,-1 -1,-1 -1,-3 1,-3 1,-1 2,-2 3,-3 3,-3 6,-5 10,-5 3,-1 5,0 8,2 2,1 4,3 6,5 2,1 3,3 5,3 1,1 3,1 5,1 1,0 3,0 3,2 0,1 -1,3 -2,3 -3,1 -6,0 -8,-1 -3,-1 -5,-2 -7,-4 -1,-2 -3,-3 -5,-5 -1,-1 -3,-1 -5,-1 -2,0 -4,2 -6,4 -2,1 -3,2 -4,3z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M233 136c1,1 3,1 4,-1 1,-1 0,-3 -1,-3 -1,-1 -2,-2 -3,-3 -3,-3 -6,-5 -10,-5 -3,-1 -6,0 -8,2 -2,1 -5,3 -6,5 -2,1 -3,3 -5,3 -2,1 -3,1 -5,1 -1,0 -3,0 -3,2 0,1 0,3 2,3 3,1 5,0 8,-1 2,-1 4,-2 6,-4 2,-2 4,-3 6,-5 1,-1 3,-1 5,-1 2,0 4,2 6,4 1,1 3,2 4,3z',
                            fillOpacity: 0.7,
                        }
                    ]
                },
                {
                    name: 'angry2',
                    paths: [
                        {
                            d: 'M125 129c1,-4 5,-8 10,-7 5,1 9,3 13,6 5,3 12,8 17,9 -5,3 -10,2 -13,0 -5,-2 -10,-7 -16,-9 -3,-1 -7,0 -11,1z',
                            fillOpacity: 0.7,
                        },
                        {
                            d: 'M235 129c-1,-4 -5,-8 -10,-7 -5,1 -9,3 -13,6 -5,3 -12,8 -17,9 5,3 9,2 13,0 5,-2 10,-7 15,-9 4,-1 8,0 12,1z',
                            fillOpacity: 0.7,
                        }
                    ]
                }
            ],
            mouths: [
                {
                    name: 'vomit',
                    paths: [
                        {
                            d: 'M180 193l0 0c13,0 24,11 24,25l0 2 -48 0 0 -2c0,-14 11,-25 24,-25z',
                            fill: '#000000'
                        },
                        {
                            d: 'M180 193l0 0c6,0 12,3 17,7l-34 0c5,-4 11,-7 17,-7z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M165 211l30 0c4,0 8,4 8,8l0 6c0,4 -4,7 -8,7 -4,0 -7,-3 -7,-7 0,-3 -4,-5 -8,-5 -4,0 -7,4 -7,8 0,5 -4,8 -8,8 -4,0 -7,-3 -7,-8l0 -9c0,-4 3,-8 7,-8z',
                        }
                    ]
                },
                {
                    name: 'twinkle',
                    paths: [
                        {
                            d: 'M162 200c-1,-2 0,-3 2,-3 1,-1 3,0 3,1 1,3 2,5 5,6 2,2 5,3 8,3 3,0 6,-1 8,-3 3,-1 4,-3 5,-6 0,-1 2,-2 3,-1 2,0 3,1 2,3 -1,3 -4,6 -7,9 -3,2 -7,3 -11,3 -4,0 -8,-1 -11,-3 -3,-3 -6,-6 -7,-9z',
                        }
                    ]
                },
                {
                    name: 'tongue',
                    paths: [
                        {
                            d: 'M180 220l0 0c17,0 31,-10 31,-23l0 -1 -62 0 0 1c0,13 14,23 31,23z',
                            fill: '#000000'
                        },
                        {
                            d: 'M199 196l-38 0 0 2c0,3 2,5 4,5l30 0c2,0 4,-2 4,-5l0 -2z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M194 220l0 0c0,8 -6,15 -14,15l0 0c-8,0 -14,-7 -14,-15l0 0 0 -7c0,-4 4,-8 8,-8 3,0 5,1 6,2 1,-1 3,-2 6,-2 4,0 8,4 8,8l0 7z',
                            fill: '#FF4F6D'
                        }
                    ]
                },
                {
                    name: 'smile',
                    paths: [
                        {
                            d: 'M180 220l0 0c13,0 24,-10 24,-23l0 -1 -48 0 0 1c0,13 11,23 24,23z',
                            fill: '#000000'
                        },
                        {
                            d: 'M180 220l0 0c6,0 11,-2 16,-5 -2,-3 -5,-5 -9,-5 -3,0 -5,1 -7,2 -2,-1 -4,-2 -7,-2 -4,0 -7,2 -9,5 5,3 10,5 16,5z',
                            fill: '#FF4F6D'
                        },
                        {
                            d: 'M199 196l-38 0 0 2c0,3 2,5 4,5l30 0c2,0 4,-2 4,-5l0 -2z',
                            fill: '#FEFEFE'
                        }
                    ]
                },
                {
                    name: 'serious',
                    paths: [
                        {
                            d: 'M168 203l24 0c2,0 3,2 3,4l0 0c0,2 -1,3 -3,3l-24 0c-2,0 -3,-1 -3,-3l0 0c0,-2 1,-4 3,-4z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'scream',
                    paths: [
                        {
                            d: 'M180 196l0 0c14,0 24,11 24,24 0,4 0,8 0,11 -8,-1 -16,-2 -24,-2 -8,0 -16,1 -24,2l0 -11c0,-13 10,-24 24,-24z',
                            fill: '#000000'
                        },
                        {
                            d: 'M180 196l0 0c7,0 13,2 17,7l-34 0c4,-5 10,-7 17,-7z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M180 222c-2,-2 -4,-2 -6,-2 -3,0 -8,1 -9,4 -2,2 -3,3 -5,7 7,-1 13,-2 20,-2l0 0 0 0c7,0 13,1 20,2 -2,-4 -3,-5 -5,-7 -1,-3 -6,-4 -9,-4 -2,0 -4,0 -6,2z',
                            fill: '#FF4F6D'
                        }
                    ]
                },
                {
                    name: 'sad',
                    paths: [
                        {
                            d: 'M197 217c0,0 0,-1 0,-2 0,-9 -7,-16 -17,-16 -10,0 -17,7 -17,16 0,1 0,2 0,2 4,-4 10,-6 17,-6 7,0 13,2 17,6z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'grimace',
                    paths: [
                        {
                            d: 'M204 192l-48 0c-3,0 -7,1 -9,4 -3,2 -4,5 -4,9 0,4 1,7 4,9 2,3 6,4 9,4l48 0c3,0 7,-1 9,-4 3,-2 4,-5 4,-9 0,-4 -1,-7 -4,-9 -2,-3 -6,-4 -9,-4z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M143 204l11 0 0 -12c1,0 2,0 2,0l2 0 0 12 12 0 0 -12 4 0 0 12 12 0 0 -12 4 0 0 12 12 0 0 -12 2 0c0,0 1,0 2,0l0 12 11 0c0,0 0,1 0,1 0,1 0,1 0,2l-11 0 0 11c-1,0 -2,0 -2,0l-2 0 0 -11 -12 0 0 11 -4 0 0 -11 -12 0 0 11 -4 0 0 -11 -12 0 0 11 -2 0c0,0 -1,0 -2,0l0 -11 -11 0c0,-1 0,-1 0,-2 0,0 0,-1 0,-1z',
                            fill: '#B2B3B3'
                        },
                        {
                            d: 'M156 188l48 0c4,0 9,2 12,5 3,3 5,8 5,12 0,5 -2,9 -5,12 -3,3 -8,5 -12,5l-48 0c-4,0 -9,-2 -12,-5 -3,-3 -5,-7 -5,-12 0,-4 2,-9 5,-12 3,-3 8,-5 12,-5zm48 4l-48 0c-3,0 -7,1 -9,4 -3,2 -4,5 -4,9 0,4 1,7 4,9 2,3 6,4 9,4l48 0c3,0 7,-1 9,-4 3,-2 4,-5 4,-9 0,-4 -1,-7 -4,-9 -2,-3 -6,-4 -9,-4z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'eating',
                    circles: [
                    {
                            cx: 134,
                            cy: 199,
                            r: 11,
                            fillOpacity: 0.6,
                            fill: '#E08C65'
                        },
                        {
                            cx: 226,
                            cy: 199,
                            r: 11,
                            fillOpacity: 0.6,
                            fill: '#E08C65'
                        }
                    ],
                    paths: [
                        {
                            d: 'M167 201c9,3 18,3 26,0 0,-6 5,-12 12,-13 -5,3 -8,7 -8,12 0,8 7,14 14,14 1,0 1,0 1,0 -2,1 -3,1 -5,1 -7,0 -12,-4 -14,-9 -9,3 -18,3 -27,0 -2,5 -7,8 -13,8 -2,0 -3,0 -5,-1 0,0 0,0 1,0 7,0 14,-6 14,-14 0,-5 -3,-10 -8,-12 7,1 12,7 12,14 0,0 0,0 0,0z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'disbelief',
                    paths: [
                        {
                            d: 'M180 199l0 0c10,0 17,8 17,17l0 1 -34 0 0 -1c0,-9 7,-17 17,-17z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'default',
                    paths: [
                        {
                            d: 'M180 217l0 0c10,0 17,-8 17,-18l0 0 -34 0 0 0c0,10 7,18 17,18z',
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'concerned',
                    paths: [
                        {
                            d: 'M180 197l0 0c13,0 24,10 24,23l0 1 -48 0 0 -1c0,-13 11,-23 24,-23z',
                            fill: '#000000'
                        },
                        {
                            d: 'M180 197l0 0c6,0 12,2 16,6l-32 0c4,-4 10,-6 16,-6z',
                            fill: '#FEFEFE'
                        },
                        {
                            d: 'M173 211c4,0 5,1 7,3 2,-2 3,-3 7,-3 5,0 11,5 12,10l-38 0c1,-5 7,-10 12,-10z',
                            fill: '#FF4F6D'
                        }
                    ]
                }
            ],
            clothes: [
                {
                        name: 'blazer',
                        paths: [
                        {
                            d: 'M304 360l0 -13c0,-45 -34,-83 -79,-87l-1 -1c-2,0 -4,0 -6,0 1,0 1,1 1,1l-1 0 1 0c0,2 0,3 0,5l-3 2c-24,23 -48,23 -72,0l-3 -2c0,-2 0,-4 1,-6 -2,0 -4,0 -6,0l-1 1c-45,4 -79,42 -79,87l0 13 74 0 19 0 62 0 19 0 74 0z',
                        },
                        {
                            d: 'M130 360l-20 -45c3,-4 5,-7 7,-10 -2,-3 -4,-7 -7,-10l26 -36c2,0 4,0 6,0 -5,35 0,74 7,101l-19 0z',
                            fill: '#000000',
                            fillOpacity: 0.5
                        },
                        {
                            d: 'M230 360l20 -45c-3,-4 -5,-7 -7,-10 2,-3 4,-7 7,-10l-26 -36c-2,0 -4,0 -6,0 5,35 0,74 -7,101l19 0z',
                            fill: '#000000',
                            fillOpacity: 0.5
                        },
                        {
                            d: 'M244 330c10,-10 12,-13 23,-2 -8,1 -15,2 -23,2z',
                            fill: '#ffffff',
                        },
                        {
                            d: 'M220 271c-27,24 -54,23 -80,-1 0,-1 1,-3 1,-5l3 2c24,23 48,23 72,0l3 -2c0,2 1,4 1,6z',
                            fill: '#000000',
                            fillOpacity: 0.5
                        },
                        {
                            d: 'M149 360l62 0c6,-24 11,-57 9,-89 -2,1 -4,3 -6,5 -4,2 -7,5 -11,7 -21,11 -42,6 -63,-12 -2,32 3,65 9,89z',
                            fill: '#000000',
                            fillOpacity: 0.5
                        }
                    ]
                },
                {
                        name: 'sweater',
                        paths: [
                        {
                            d: 'M304 360l0 -15c0,-44 -34,-81 -78,-85l-15 0 0 11c0,3 -1,6 -3,7l0 0c-5,11 -15,19 -28,19 -12,0 -23,-8 -27,-18l-1 -1c-2,-1 -2,-4 -2,-7l0 -11 -16 0c-44,4 -78,41 -78,85l0 15 248 0z',
                        },
                        {
                            d: 'M150 271l0 -18c-4,0 -14,9 -14,23 0,10 7,18 16,23 1,-4 7,-7 10,-7 4,0 4,1 5,1l-15 -15c-2,-1 -2,-4 -2,-7z',
                            fill: '#000000',
                        },
                        {
                            d: 'M211 271l0 -18c4,0 13,9 13,23 0,10 -6,18 -16,23 -1,-4 -7,-7 -10,-7 -3,0 -3,1 -5,1l15 -15c2,-1 3,-4 3,-7z',
                            fill: '#000000',
                        }
                    ]
                },
                {
                        name: 'vneck',
                        paths: [
                        {
                            d: 'M304 360l0 -15c0,-44 -34,-81 -78,-85l-46 47 -46 -47c-44,4 -78,41 -78,85l0 15 248 0z',
                        }
                    ]
                },
                {
                    name: 'overall',
                    paths: [
                        {
                            d: 'M304 360l0 -15c0,-44 -34,-80 -77,-85 -2,24 -22,43 -46,43 -25,0 -45,-19 -47,-43l0 0c-44,4 -78,41 -78,85l0 15 248 0z',
                            fill: '#e0e0e0'
                        },
                        {
                            d: 'M260 270c-10,-5 -21,-9 -32,-10l0 57 -96 0 0 -57c-11,2 -22,5 -32,11l0 89 160 0 0 -90z',
                        }
                    ],
                    circles: [
                    {
                            cx: 118,
                            cy: 330,
                            r: 8,
                            fillOpacity: 0.5,
                            fill: '#000000'
                        },
                        {
                            cx: 242,
                            cy: 330,
                            r: 8,
                            fillOpacity: 0.5,
                            fill: '#000000'
                        }
                    ]
                },
                {
                    name: 'hoodie',
                    paths: 
                    [
                        {
                            d: 'M304 360l0 -15c0,-36 -24,-68 -56,-80 -1,-13 -17,-20 -39,-23l0 22c0,16 -13,29 -30,29l0 0c-16,0 -29,-13 -29,-29l0 -22c-22,3 -38,10 -39,23 -32,13 -55,44 -55,80l0 15 248 0z',
                        },
                        {
                            d: 'M143 302l0 49c0,2 -2,4 -5,4 -2,0 -4,-2 -4,-4l0 -54c2,2 5,3 9,5z',
                            fill: '#FFFFFF'
                        },
                        {
                            d: 'M226 297l0 40c0,2 -2,4 -5,4 -2,0 -4,-2 -4,-4l0 -35c3,-2 6,-3 9,-5z',
                            fill: '#FFFFFF'
                        },
                        {
                            d: 'M111 265c-4,2 -9,4 -14,7 10,22 36,33 69,37l0 0c-31,-5 -55,-25 -55,-42 0,-1 0,-1 0,-2z',
                            fill: '#000000',
                            fillOpacity: 0.4
                        },
                        {
                            d: 'M262 272c-4,-3 -9,-5 -14,-7 0,0 0,1 0,2 0,17 -24,37 -55,42l0 0c33,-4 59,-15 69,-37z',
                            fill: '#000000',
                            fillOpacity: 0.4
                        }
                    ]
                }
            ],
            facialHairs: [
                {
                    name: 'empty',
                    paths: []
                },
                {
                    name: 'magnum',
                    paths: [
                        {
                            d: 'M170 201c7,-1 10,-4 10,-10 0,6 3,9 10,10 10,1 12,-3 20,-3 7,1 8,2 10,2 1,0 1,-1 1,-2 -6,-16 -26,-17 -31,-16 -6,1 -10,4 -10,9 0,-5 -4,-8 -10,-9 -5,-1 -25,0 -31,16 0,1 0,2 1,2 2,0 3,-1 10,-2 8,0 10,4 20,3z',
                        }
                    ]
                },
                {
                    name: 'fancy',
                    paths: [
                        {
                            d: 'M127 194c2,2 18,0 24,-5 6,-5 20,-5 25,-1 2,2 1,5 0,5 -7,4 -15,7 -22,9 -12,4 -21,1 -27,-7 -1,-1 0,-2 0,-1zm106 0c-2,2 -18,0 -24,-5 -6,-5 -20,-5 -25,-1 -2,2 -1,5 0,5 7,4 15,7 22,9 12,4 21,1 27,-7 1,-1 0,-2 0,-1z',
                        }
                    ]
                },
                {
                    name: 'magestic',
                    paths: [
                        {
                            d: 'M111 136c1,11 -1,61 16,60 9,0 20,-15 29,-16 13,-1 20,0 24,5 4,-5 11,-6 24,-5 9,1 20,16 29,16 17,1 15,-49 16,-60 2,13 5,25 5,38 1,11 -2,22 -4,34 -1,11 0,24 -4,35 -2,7 -9,12 -13,18 -3,3 -5,8 -8,10 -5,3 -11,3 -16,6 -18,7 -10,8 -29,8 -19,0 -11,-1 -29,-8 -5,-3 -11,-3 -16,-6 -3,-2 -5,-7 -8,-10 -4,-6 -11,-11 -13,-18 -4,-11 -3,-24 -4,-35 -2,-12 -5,-23 -4,-34 0,-13 3,-25 5,-38zm69 56c-3,3 -7,4 -13,5 -6,2 -15,4 -15,14 0,7 7,14 13,15 8,1 5,-4 15,-4 10,0 7,5 15,4 6,-1 13,-8 13,-15 0,-10 -9,-12 -15,-14 -6,-1 -10,-2 -13,-5z',
                        }
                    ]
                },
                {
                    name: 'light',
                    paths: [
                        {
                            d: 'M174 183c-5,0 -7,0 -12,0 -6,0 -12,7 -15,13 -3,4 -4,10 -10,8 -14,-2 -20,-19 -20,-36l0 -27c0,-4 -3,-6 -6,-6 0,15 0,30 0,45 0,41 31,66 69,66 38,0 69,-25 69,-66 0,-15 0,-30 0,-45 -3,0 -6,2 -6,6l0 27c0,17 -6,34 -20,36 -6,2 -7,-4 -10,-8 -3,-6 -9,-13 -15,-13 -5,0 -7,0 -12,0 -3,0 -6,2 -6,5 0,3 3,6 6,6 5,0 8,-1 14,0 7,0 10,9 9,14 0,6 -3,12 -6,16 -3,3 -7,5 -11,5 -5,0 -5,-6 -12,-6 -7,0 -7,6 -12,6 -4,0 -8,-2 -11,-5 -3,-4 -6,-10 -6,-16 -1,-5 2,-14 9,-14 6,-1 9,0 14,0 3,0 6,-3 6,-6 0,-3 -3,-5 -6,-5z',
                        }
                    ]
                }
            ],
            glasses: [
                {
                    name: 'empty',
                    paths: []
                },
                {
                    name: 'rambo',
                    paths: [
                        {
                            d: 'M106 151c-1,0 -1,-1 -1,-2 0,-1 0,-1 1,-1l4 0c1,-6 3,-11 7,-15 4,-4 11,-6 21,-6 8,0 16,1 22,3l40 0c6,-2 14,-3 22,-3 10,0 17,2 21,6 4,4 6,9 7,15l4 0c1,0 1,0 1,1 0,1 0,2 -1,2l-4 0c0,7 -3,14 -8,19 -4,5 -10,8 -19,8 -8,0 -17,-5 -23,-12 -5,-4 -9,-10 -11,-15 0,0 0,0 0,0 -1,0 -1,0 -1,-1 -1,-3 -2,-5 -3,-7 -2,-1 -3,-2 -5,-2 -2,0 -3,1 -5,2 -1,2 -2,4 -3,7 0,1 0,1 -1,1 0,0 0,0 0,0 -2,5 -6,11 -11,15 -6,7 -15,12 -23,12 -9,0 -15,-3 -19,-8 -5,-5 -8,-12 -8,-19l-4 0zm61 -19c4,3 6,6 6,10 0,0 0,0 0,0 0,0 0,0 0,-1 2,-2 4,-3 7,-3 3,0 5,1 7,3 0,1 0,1 0,1 0,0 0,0 0,0 0,-4 2,-7 6,-10l-26 0zm55 -2c-9,0 -18,1 -24,3 -5,2 -8,5 -8,9 0,7 5,15 11,22 7,6 15,11 22,11 8,0 13,-3 17,-7 5,-4 7,-11 7,-18 0,-6 -2,-11 -6,-15 -4,-3 -10,-5 -19,-5zm-60 3c-6,-2 -15,-3 -24,-3 -9,0 -15,2 -19,5 -4,4 -6,9 -6,15 0,7 2,14 7,18 4,4 9,7 17,7 7,0 15,-5 22,-11 6,-7 11,-15 11,-22 0,-4 -3,-7 -8,-9z',
                        },
                        {
                            d: 'M222 130c-9,0 -18,1 -24,3 -5,2 -8,5 -8,9 0,7 5,15 11,22 7,6 15,11 22,11 8,0 13,-3 17,-7 5,-4 7,-11 7,-18 0,-6 -2,-11 -6,-15 -4,-3 -10,-5 -19,-5zm-60 3c-6,-2 -15,-3 -24,-3 -9,0 -15,2 -19,5 -4,4 -6,9 -6,15 0,7 2,14 7,18 4,4 9,7 17,7 7,0 15,-5 22,-11 6,-7 11,-15 11,-22 0,-4 -3,-7 -8,-9z',
                            fill: '#5B5B5B',
                            fillOpacity: 0.3
                        }
                    ]
                },
                {
                    name: 'fancy',
                    paths: [
                        {
                            d: 'M180 145c5,0 13,-1 18,-3l0 0c8,-5 26,-11 34,-13 6,-1 21,-6 25,-1 0,1 1,2 1,3 3,8 -9,25 -12,31 -5,8 -13,13 -21,16 -8,2 -17,1 -24,-2 -6,-2 -12,-7 -14,-13l0 0c-1,-5 -5,-8 -7,-8l0 -10zm31 -5c-14,6 -20,8 -20,19 0,11 17,19 32,15 16,-5 25,-21 21,-32 -2,-8 -17,-7 -33,-2z',
                        },
                        {
                            d: 'M180 145c-5,0 -13,-1 -18,-3l0 0c-8,-5 -26,-11 -34,-13 -6,-1 -21,-6 -25,-1 0,1 -1,2 -1,3 -3,8 9,25 12,31 5,8 13,13 21,16 8,2 17,1 24,-2 6,-2 12,-7 14,-13l0 0c1,-5 5,-8 7,-8l0 -6 0 -4zm-31 -5c14,6 20,8 20,19 0,11 -17,19 -32,15 -16,-5 -25,-21 -21,-32 2,-8 17,-7 33,-2z',
                        },
                        {
                            d: 'M149 140c14,6 20,8 20,19 0,11 -17,19 -32,15 -16,-5 -25,-21 -21,-32 2,-8 17,-7 33,-2zm62 0c-14,6 -20,8 -20,19 0,11 17,19 32,15 16,-5 25,-21 21,-32 -2,-8 -17,-7 -33,-2z',
                            fillOpacity: 0.3,
                            fill : '#5B5B5B'
                        }
                    ]
                },
                {
                    name: 'old',
                    paths: [
                        {
                            d: 'M180 139l-6 0c-1,0 -2,-1 -2,-2 0,0 0,0 0,0l0 0c0,0 0,0 0,0 -3,-10 -12,-16 -31,-16l-27 0c-16,0 -17,7 -17,17l0 24c0,7 7,15 13,18 4,2 8,4 12,4l20 0c8,0 15,-4 20,-9 3,-4 6,-9 7,-14l1 0c0,0 0,-1 0,-1 0,-1 0,-1 0,-1 2,-8 6,-13 10,-13l0 -7zm-61 -12l21 0c18,0 27,8 27,18l0 6c0,12 -10,29 -26,29l-14 0c-10,0 -21,-11 -21,-18l0 -23c0,-7 6,-12 13,-12z',
                        },
                        {
                            d: 'M180 139l6 0c1,0 2,-1 2,-2 0,0 0,0 0,0l0 0c0,0 0,0 0,0 3,-10 12,-16 31,-16l27 0c16,0 17,7 17,17l0 24c0,7 -7,15 -13,18 -4,2 -8,4 -12,4l-20 0c-8,0 -15,-4 -20,-9 -3,-4 -6,-9 -7,-14l-1 0c0,0 0,-1 0,-1 0,-1 0,-1 0,-1 -2,-8 -6,-13 -10,-13l0 -7zm61 -12l-21 0c-18,0 -27,8 -27,18l0 6c0,12 10,29 26,29l14 0c10,0 21,-11 21,-18l0 -23c0,-7 -6,-12 -13,-12z',
                        },
                        {
                            d: 'M241 127l-21 0c-18,0 -27,8 -27,18l0 6c0,12 10,29 26,29l14 0c10,0 21,-11 21,-18l0 -23c0,-7 -6,-12 -13,-12zm-122 0l21 0c18,0 27,8 27,18l0 6c0,12 -10,29 -26,29l-14 0c-10,0 -21,-11 -21,-18l0 -23c0,-7 6,-12 13,-12z',
                            fillOpacity: 0.3,
                            fill : '#5B5B5B'
                        }
                    ]
                },
                {
                    name: 'nerd',
                    paths: [
                        {
                            d: 'M141 121c10,0 19,4 26,12 2,2 5,3 8,3l5 0 0 13c-3,0 -4,0 -5,2 -1,1 -2,5 -4,9 0,1 -1,1 -2,1 -1,6 -4,11 -8,15 -5,5 -12,8 -20,8 -8,0 -15,-3 -20,-8 -6,-6 -9,-13 -9,-21l0 0c-2,0 -5,-2 -5,-5 0,0 0,-1 0,-1l0 0 1 0 0 0c0,-5 -3,-7 -4,-7 -2,0 -3,-1 -3,-3 0,-2 0,-4 0,-6 0,-1 1,-3 3,-3 2,0 4,0 6,0 5,0 14,-5 15,-5 5,-2 10,-4 16,-4zm19 16c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -18,8 -5,4 -8,11 -8,18 0,7 3,14 8,19 4,4 11,7 18,7 7,0 14,-3 19,-7 4,-5 7,-12 7,-19 0,-7 -3,-14 -7,-18z',
                        },
                        {
                            d: 'M219 121c-10,0 -19,4 -26,12 -2,2 -5,3 -8,3l-5 0 0 13c3,0 4,0 5,2 1,1 2,5 4,9 0,1 1,1 2,1 1,6 4,11 8,15 5,5 12,8 20,8 8,0 15,-3 20,-8 6,-6 9,-13 9,-21l0 0c2,0 5,-2 5,-5 0,0 0,-1 0,-1l0 0 -1 0 0 0c0,-5 3,-7 4,-7 2,0 3,-1 3,-3 0,-2 0,-4 0,-6 0,-1 -1,-3 -3,-3 -2,0 -4,0 -6,0 -5,0 -14,-5 -15,-5 -5,-2 -10,-4 -16,-4zm-19 16c5,-5 12,-8 19,-8 7,0 14,3 18,8 5,4 8,11 8,18 0,7 -3,14 -8,19 -4,4 -11,7 -18,7 -7,0 -14,-3 -19,-7 -4,-5 -7,-12 -7,-19 0,-7 3,-14 7,-18z',
                        },
                        {
                            d: 'M200 137c5,-5 12,-8 19,-8 7,0 14,3 18,8 5,4 8,11 8,18 0,7 -3,14 -8,19 -4,4 -11,7 -18,7 -7,0 -14,-3 -19,-7 -4,-5 -7,-12 -7,-19 0,-7 3,-14 7,-18zm-40 0c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -18,8 -5,4 -8,11 -8,18 0,7 3,14 8,19 4,4 11,7 18,7 7,0 14,-3 19,-7 4,-5 7,-12 7,-19 0,-7 -3,-14 -7,-18z',
                            fillOpacity: 0.3,
                            fill : '#5B5B5B'
                        }
                    ]
                },
                {
                    name: 'fancy2',
                    paths: [
                        {
                            d: 'M180 145c3,0 10,-5 17,-9 1,-1 2,-1 3,-2 1,-1 1,-1 2,-1 10,-4 27,-4 41,-3 9,0 11,-2 10,16 0,8 -1,16 -7,22 -9,8 -24,8 -35,7 -7,0 -13,-3 -18,-7 -3,-3 -5,-7 -6,-12l0 0c-1,-3 -4,-6 -7,-6l0 -5zm57 -10c-60,-10 -55,34 -26,37 34,2 40,-13 38,-24 -2,-8 -8,-12 -12,-13z',
                        },
                        {
                            d: 'M180 145c-3,0 -10,-5 -17,-9 -1,-1 -2,-1 -3,-2 -1,-1 -1,-1 -2,-1 -10,-4 -27,-4 -41,-3 -9,0 -11,-2 -10,16 0,8 1,16 7,22 9,8 24,8 35,7 7,0 13,-3 18,-7 3,-3 5,-7 6,-12l0 0c1,-3 4,-6 7,-6l0 -5zm-57 -10c60,-10 55,34 26,37 -34,2 -40,-13 -38,-24 2,-8 8,-12 12,-13z',
                        },
                        {
                            d: 'M123 135c60,-10 55,34 26,37 -34,2 -40,-13 -38,-24 2,-8 8,-12 12,-13zm114 0c-60,-10 -55,34 -26,37 34,2 40,-13 38,-24 -2,-8 -8,-12 -12,-13z',
                            fillOpacity: 0.3,
                            fill : '#5B5B5B'
                        }
                    ]
                },
                {
                    name: 'harry',
                    paths: [
                        {
                            d: 'M143 125c7,0 14,3 19,8 4,4 6,8 7,13 1,-1 2,-1 3,-2 2,-2 5,-4 8,-4 3,0 6,2 8,4 1,1 2,1 3,2 1,-5 3,-9 7,-13 5,-5 12,-8 19,-8 8,0 15,3 20,8 4,5 7,11 8,18l4 0c1,0 2,1 2,1 0,1 -1,2 -2,2l-4 0c-1,7 -4,13 -8,18 -5,5 -12,8 -20,8 -7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-19 -1,-3 -2,-5 -4,-7 -2,-1 -4,-2 -6,-2 -2,0 -4,1 -6,2 -2,2 -3,4 -4,7 0,7 -3,14 -8,19 -5,5 -12,8 -19,8 -8,0 -15,-3 -20,-8 -4,-5 -7,-11 -8,-18l-4 0c-1,0 -2,-1 -2,-2 0,0 1,-1 2,-1l4 0c1,-7 4,-13 8,-18 5,-5 12,-8 20,-8zm91 11c-4,-5 -10,-8 -17,-8 -6,0 -12,3 -17,8 -4,4 -7,10 -7,16 0,7 3,13 7,17 5,5 11,7 17,7 7,0 13,-2 17,-7 5,-4 7,-10 7,-17 0,-6 -2,-12 -7,-16zm-74 0c-5,-5 -11,-8 -17,-8 -7,0 -13,3 -17,8 -5,4 -7,10 -7,16 0,7 2,13 7,17 4,5 10,7 17,7 6,0 12,-2 17,-7 4,-4 7,-10 7,-17 0,-6 -3,-12 -7,-16z',
                        },
                        {
                            d: 'M234 136c-4,-5 -10,-8 -17,-8 -6,0 -12,3 -17,8 -4,4 -7,10 -7,16 0,7 3,13 7,17 5,5 11,7 17,7 7,0 13,-2 17,-7 5,-4 7,-10 7,-17 0,-6 -2,-12 -7,-16zm-74 0c-5,-5 -11,-8 -17,-8 -7,0 -13,3 -17,8 -5,4 -7,10 -7,16 0,7 2,13 7,17 4,5 10,7 17,7 6,0 12,-2 17,-7 4,-4 7,-10 7,-17 0,-6 -3,-12 -7,-16z',
                            fillOpacity: 0.3,
                            fill : '#5B5B5B'
                        }
                    ]
                }
            ],
            editedPart: {
                name: '',
                type: []
            },
            avatar : {
                back: '#FF9D9D',
                hairs: null,
                skin: null,
                accessories: null,
                eyes: null,
                eyebrows: null,
                mouths: null,
                facialHairs: null
            }
        }
    },
    created() {
        //this.avatar.hairs = this.RandomInArray(this.hairs)
        //this.avatar.hairs = this.hairs.find(item => item.name === 'shorthairsides')
        //this.avatar.hairs.color = this.RandomColor()
        this.avatar.hairs = this.hairs[16]
        this.avatar.hairs.color = '#000000'

        //this.avatar.skin = this.RandomInArray(this.skins)
        //this.avatar.skin.color = this.RandomColor()
        this.avatar.skin = this.skins[0]
        this.avatar.skin.color = '#FFD7A4'

        //this.avatar.accessories = this.RandomInArray(this.accessories)
        //this.avatar.accessories.color = this.RandomColor()
        this.avatar.accessories = this.accessories[4]
        this.avatar.accessories.color = '#949494'

        //this.avatar.eyes = this.RandomInArray(this.eyes)
        //this.avatar.eyes = this.eyes.find(item => item.name === 'cry')
        //this.avatar.eyes.color = this.RandomColor()
        this.avatar.eyes = this.eyes[8]
        this.avatar.eyes.color = '#411600'

        //this.avatar.eyebrows = this.RandomInArray(this.eyebrows)
        //this.avatar.eyebrows = this.eyebrows.find(item => item.name === 'angry2')
        //this.avatar.eyebrows.color = this.RandomColor()
        this.avatar.eyebrows = this.eyebrows[5]
        this.avatar.eyebrows.color = '#000000'

        //this.avatar.mouths = this.RandomInArray(this.mouths)
        //this.avatar.mouths = this.mouths.find(item => item.name === 'eating')
        //this.avatar.mouths.color = this.RandomColor()
        this.avatar.mouths = this.mouths[1]
        this.avatar.mouths.color = '#000000'

        //this.avatar.clothes = this.RandomInArray(this.clothes)
        //this.avatar.clothes = this.clothes.find(item => item.name === 'hoodie')
        //this.avatar.clothes.color = this.RandomColor()
        this.avatar.clothes = this.clothes[4]
        this.avatar.clothes.color = '#6099DA'

        //this.avatar.facialHairs = this.RandomInArray(this.facialHairs)
        //this.avatar.facialHairs = this.facialHairs.find(item => item.name === 'light')
        //this.avatar.facialHairs.color = this.RandomColor()
        this.avatar.facialHairs = this.facialHairs[4]
        this.avatar.facialHairs.color = '#5F5F5F'

        //this.avatar.glasses = this.RandomInArray(this.glasses)
        //this.avatar.glasses = this.glasses.find(item => item.name === 'harry')
        //this.avatar.glasses.color = this.RandomColor()
        this.avatar.glasses = this.glasses[0]
        this.avatar.glasses.color = '#000000'

        this.editedPart = { name: 'skin', type: this.skins }
    },
    computed: {
        isActive: {
            get: function() {
                return this.show
            },
            set: function(newValue) {
                this.$emit('close-event')
            }
        },
        EditColor: {
        get: function() {
            switch (this.editedPart.name) {
                case 'back':
                    return this.avatar.back
                case 'skin':
                    return this.avatar.skin.color
                case 'hairs':
                    return this.avatar.hairs.color
                case 'eyes':
                    return this.avatar.eyes.color
                case 'eyebrows':
                    return this.avatar.eyebrows.color
                case 'mouths':
                    return this.avatar.mouths.color
                case 'clothes':
                    return this.avatar.clothes.color
                case 'facialHairs':
                    return this.avatar.facialHairs.color
                case 'glasses':
                    return this.avatar.glasses.color
                case 'accessories':
                    return this.avatar.accessories.color
                default:
                    return '#000000'
            }
        },
        set: function(newValue) {
            switch (this.editedPart.name) {
                case 'back':
                    this.avatar.back = newValue
                    break
                case 'skin':
                    this.avatar.skin.color = newValue
                    break
                case 'hairs':
                    this.avatar.hairs.color = newValue
                    break
                case 'eyes':
                    this.avatar.eyes.color = newValue
                    break
                case 'eyebrows':
                    this.avatar.eyebrows.color = newValue
                    break
                case 'mouths':
                    this.avatar.mouths.color = newValue
                    break
                case 'clothes':
                    this.avatar.clothes.color = newValue
                    break
                case 'facialHairs':
                    this.avatar.facialHairs.color = newValue
                    break
                case 'glasses':
                    this.avatar.glasses.color = newValue
                    break
                case 'accessories':
                    this.avatar.accessories.color = newValue
                    break
                default:
                    break;
            }
        }
      }
    },
    methods: {
        SetPart(name, part)
        {
            switch (name) {
                case 'skin':
                    part.color = this.avatar.skin.color
                    this.avatar.skin = part
                    break;
                case 'hairs':
                    part.color = this.avatar.hairs.color
                    this.avatar.hairs = part
                    break;
                case 'eyes':
                    part.color = this.avatar.eyes.color
                    this.avatar.eyes = part
                    break;
                case 'eyebrows':
                    part.color = this.avatar.eyebrows.color
                    this.avatar.eyebrows = part
                    break;
                case 'mouths':
                    part.color = this.avatar.mouths.color
                    this.avatar.mouths = part
                    break;
                case 'clothes':
                    part.color = this.avatar.clothes.color
                    this.avatar.clothes = part
                    break;
                case 'facialHairs':
                    part.color = this.avatar.facialHairs.color
                    this.avatar.facialHairs = part
                    break;
                case 'glasses':
                    part.color = this.avatar.glasses.color
                    this.avatar.glasses = part
                    break;
                case 'accessories':
                    part.color = this.avatar.accessories.color
                    this.avatar.accessories = part
                    break;
                default:
                    break;
            }
        },
        Save ()
        {
            const svgNode = document.getElementById("avatarId")
            const svgString = (new XMLSerializer()).serializeToString(svgNode);
            const svgBlob = new Blob([svgString], {
                type: 'image/svg+xml;charset=utf-8'
            });

            const DOMURL = window.URL || window.webkitURL || window;
            const url = DOMURL.createObjectURL(svgBlob);

            const image = new Image();
            image.width = svgNode.width.baseVal.value;
            image.height = svgNode.height.baseVal.value;
            image.src = url;
            image.onload = function () {
                // Initialize the canvas and it's size
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              // Set width and height
              canvas.width = 350;
              canvas.height = 350;

              ctx.fillStyle = "white";
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              let imgSize =  image.height > image.width ? image.width : image.height

              // Draw image and export to a data-uri
              ctx.drawImage(image, 0, 0, imgSize, imgSize, 0, 0, 350, 350);
              const dataURI = canvas.toDataURL('image/jpeg', 0.5);

              // Do something with the result, like overwrite original
              fetch(
                '/api/user',
                {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    data: dataURI
                  }), // body data type must match "Content-Type" header
                }
              )
              .then(async (response) => {
                  if (JSON.parse(await response.text()))
                  {
                    this.$emit('close-event')
                  } else {
                    console.log('error')
                  }
              })
            }.bind(this);
        }
    }
}
</script>