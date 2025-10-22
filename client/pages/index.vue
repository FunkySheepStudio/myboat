<template>
    <div
        class="page"
    >
        <div
            class="menu boats"
        >
            <div
                class="title"
            >
                La Duchesse
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center justify-space-between"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-card-bulleted-outline
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-image-multiple-outline
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </div>
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-menu-right
                        </v-icon>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="menu crew"
        >
            <div
                class="title overlay"
            >
                Equipe
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center justify-space-between"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-account-box-plus-outline
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </div>
                </div>
                <div
                    class="content d-flex flex-column"
                    style="overflow: auto;"
                >
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                    <div
                        class="member"
                    >
                        <user
                            style="width: 8vh; height: 8vh;"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="menu maneuvers"
        >
            <div
                class="title overlay"
            >
                Manoeuvres
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center justify-space-between"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </div>
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-menu-right
                        </v-icon>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="menu maintenance"
        >
            <div
                class="title overlay"
            >
                Maintenance
            </div>
            <div
                class="d-flex"
            >
                <div
                    class="menu-left overlay d-flex flex-column align-center justify-space-between"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </div>
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </div>
                </div>
                <div
                    class="content"
                >
                    content
                </div>
                <div
                    class="next overlay d-flex flex-column align-center justify-space-around"
                >
                    <div
                        class="button"
                    >
                        <v-icon>
                            mdi-menu-right
                        </v-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
  components: {
    'user': Vue.defineAsyncComponent( () => loadModule('./components/organisms/user.vue', options))
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
    .page {
        height: 100vh;
        width: 100%;
        background: radial-gradient(circle at bottom, #ffa27d, #bec4ff);
        padding: 1vh;
    }

    .overlay {
        background: rgba(148, 148, 148, 0.543);
    }

    .menu {
        height: 23vh;
        border-bottom-left-radius: 1vh;
        border-bottom-right-radius: 1vh;
        background-color: #60DFE6;
        margin-bottom: 2vh;
        outline: solid;
    }

    .menu-left {
        height: 20vh;
        width: 10vw;
        border-bottom-left-radius: 1vh;
    }

    .button {
        height: 25px;
        width: 25px;
        margin: 5px;
        color: white;
    }

    .content
    {
        height: 20vh;
        width: 86vw;
    }

    .next {
        height: 20vh;
        border-bottom-right-radius: 1vh;
    }

    .boats {
        background-color:#8cfffd;
    }

    .maneuvers {
        background-color: #8CDDFF;
    }

    .maintenance {
        background-color: #9AFCFB;
        
    }

    .crew {
        background-color: #8CFFD6;
    }

    .member {
        min-height: 9vh;
        max-width: 81vw;
        margin: 0.5vh;
        background-color: rgba(128, 128, 128, 0.263);
    }

    .title {
        height: 3vh;
        text-align: center;
        font-size: 2vh;
        text-transform: uppercase;
        font-weight: bolder;
        color: white;
        background-color: #607680;
    }
</style>