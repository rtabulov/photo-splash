<template>
  <div class="container">
    <div id="gallery" class="flex items-start">
      <div
        v-for="(splitPhoto, index) in splitPhotos"
        :key="ids[index]"
        :class="{ col1: index === 0, col2: index === 1, col3: index === 2 }"
      >
        <GalleryItem
          class="gallery-item"
          v-for="photo in splitPhoto"
          :key="photo.id"
          :photo="photo"
        />
      </div>
    </div>
    <div v-if="more" class="text-center my-10">
      <Preloader v-if="updating" />
      <div
        v-else
        @click="$emit('loadMore')"
        class="btn-large waves-effect waves-light grey darken-4"
      >
        Load more <i class="material-icons right">arrow_forward</i>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryItem from './GalleryItem'
import Preloader from './Preloader'

export default {
  name: 'Gallery',

  props: {
    photos: Array,
    more: Boolean,
    updating: Boolean,
  },

  components: {
    GalleryItem,
    Preloader,
  },

  data() {
    return {
      splitPhotos: [[]],
      heights: [0],
      cols: null,
      ids: ['pie', '1337', '42', 'just to be sure'],
    }
  },

  methods: {
    // count new number of columns
    resizeHandler() {
      if (window.innerWidth < 600) {
        this.cols = 1
      } else if (window.innerWidth < 1100) {
        this.cols = 2
      } else {
        this.cols = 3
      }
    },

    // for adding new items to columns
    resolveCols(newItems) {
      newItems.forEach((photo) => {
        const index = this.indexOfMin(this.heights)
        this.splitPhotos[index].push(photo)
        this.heights[index] += photo.height / photo.width
      })
    },

    // reset columns and resolve
    resetCols(data) {
      this.splitPhotos = [[], [], []].splice(3 - this.cols)
      this.heights = [0, 0, 0].splice(3 - this.cols)

      this.resolveCols(data)
    },

    // returns index of minimum value in array
    indexOfMin(arr) {
      if (arr.length === 0) {
        return -1
      }

      let min = arr[0]
      let minIndex = 0

      arr.forEach((item, index) => {
        if (item < min) {
          min = item
          minIndex = index
        }
      })

      return minIndex
    },
  },

  watch: {
    // on photos change resolve with new items
    photos: function(newPhotos, oldPhotos) {
      this.resolveCols(
        newPhotos
          .map((p) => p.id)
          .filter((id) => !oldPhotos.find((p) => p.id === id))
          .map((id) => newPhotos.find((p) => p.id === id)),
      )
    },

    // on columns change reset columns
    cols: function(newCols, oldCols) {
      if (newCols !== oldCols) {
        this.resetCols(this.photos)
      }
    },
  },

  // remove widow resize listener
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },

  // add listener and run one time
  created() {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
}
</script>

<style lang="scss"></style>
