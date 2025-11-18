<template>
  <div
    ref="img-editor"
  >
    <button ref="add-arrow">Add Arrow</button>
  </div>
</template>
<script>
  import { onMounted, ref, useTemplateRef } from 'vue'
  module.exports = {
    components: {
    },
    props: {
        blob: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    setup(props) {
      const imgEditor = useTemplateRef('img-editor')
      const addArrow = useTemplateRef('add-arrow')

      onMounted(() => {
        const blobUrl = URL.createObjectURL(props.blob);
        const editedPicture = document.createElement("img");
        editedPicture.src = blobUrl;
        const markerArea = new MarkerArea();
        markerArea.targetImage = editedPicture;
        addArrow.value.addEventListener('click', () => {
          markerArea.createMarker(ArrowMarker);
        });
        imgEditor.value.appendChild(markerArea);
      })

      return {
        imgEditor
      }
    },
    data() {
      return {
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
      }
    }
  }
</script>