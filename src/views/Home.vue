<template>
  <div>
    <Search @inputSubmit="onSearch" />
    <div class="container">
      <h1>{{ heading }}</h1>
    </div>
    <div v-if="loading" class="container py-12 text-center">
      <h2>Loading <Preloader class="ml-8" /></h2>
    </div>
    <Gallery
      v-else-if="photos && Object.keys(photos).length > 0"
      @loadMore="onLoadMore"
      :photos="photos"
      :more="morePhotos"
      :updating="updating"
    />
    <div v-else class="container py-24">
      <h1>Nothing Found 😥</h1>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery'
import Search from '@/components/Search'
import Preloader from '@/components/Preloader'

import axios from 'axios'

export default {
  name: 'home',

  components: {
    Gallery,
    Search,
    Preloader,
  },

  data() {
    return {
      photos: null,
      heading: 'Latest photos',
      nextPage: 1,
      apiUrl: 'https://api.unsplash.com/photos',
      loading: true,
      morePhotos: true,
      updating: false,
    }
  },

  methods: {
    onSearch(input) {
      this.loading = true

      if (input.length > 1) {
        this.apiUrl = `https://api.unsplash.com/search/photos?query=${input}`

        axios
          .get(this.apiUrl)
          .then((res) => {
            this.photos = res.data.results
            this.heading = `Search "${input}" photos`
            this.nextPage = 2

            this.morePhotos =
              (this.nextPage - 1) * res.headers['x-per-page'] <
              res.headers['x-total']
          })
          .finally(() => (this.loading = false))
      }
    },

    onLoadMore() {
      this.updating = true
      axios
        .get(this.apiUrl, { params: { page: this.nextPage } })
        .then((res) => {
          let q
          if (res.data.results) {
            q = [...this.photos, ...res.data.results]
          } else {
            q = [...this.photos, ...res.data]
          }

          // update photos (only unique)
          this.photos = Array.from(new Set(q.map((p) => p.id))).map((id) => {
            return q.find((p) => p.id === id)
          })

          // update next page number
          this.nextPage++

          // check if last page
          this.morePhotos =
            (this.nextPage - 1) * res.headers['x-per-page'] <
            res.headers['x-total']
        })
        .finally(() => (this.updating = false))
    },
  },

  created() {
    axios
      .get(this.apiUrl)
      .then((res) => {
        this.photos = res.data
        this.nextPage = 2
      })
      .finally(() => {
        this.loading = false
      })
  },
}
</script>

<style></style>
