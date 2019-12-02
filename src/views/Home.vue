<template>
  <div class="home-page">
    <SearchBar />
    <Gallery />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Gallery from '@/components/Gallery'
const Gallery = () => import('@/components/Gallery')
import SearchBar from '@/components/SearchBar'

import axios from 'axios'

export default {
  name: 'Home',

  components: {
    Gallery,
    SearchBar,
  },

  computed: {
    ...mapState(['photos', 'isLastPage', 'status', 'nextPage']),
  },
}
</script>
