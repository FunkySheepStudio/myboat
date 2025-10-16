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
                    class="content d-flex"
                    style="overflow: auto;"
                >
                    <div
                        class="member"
                    >
                    </div>
                    <div
                        class="member"
                    >
                    </div>
                    <div
                        class="member"
                    >
                    </div>
                    <div
                        class="member"
                    >
                    </div>
                    <div
                        class="member"
                    >
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
        background-color: #5A6566;
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
        margin-bottom: 1.5vh;
    }

    .menu-left {
        height: 20vh;
        width: 10vw;
        border-bottom-left-radius: 1vh;
        margin-bottom: 1.5vh;
    }

    .button {
        height: 25px;
        width: 25px;
    }

    .content
    {
        width: 86vw;
    }

    .next {
        height: 20vh;
    }

    .boats {
        background-color: #60DFE6;
    }

    .maneuvers {
        background-color: #CAE660;
    }

    .maintenance {
        background-color: #B760E6;
    }

    .crew {
        background-color: #E69560;
    }

    .member {
        min-width: 10vh;
        height: 19vh;
        margin: 0.5vh;
        background-color: #60DFE6;
    }

    .title {
        height: 3vh;
        text-align: center;
        font-size: larger;
        text-transform: uppercase;
        font-weight: bolder;
        color: white;
        background-color: black;
    }
</style>