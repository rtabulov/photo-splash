<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <button
      @click="scrollToTop"
      type="button"
      class="z-depth-3 grey darken-4 btn-floating btn-large waves-effect waves-light z-10 scroll-to-top"
    >
      <i class="material-icons">arrow_upward</i>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import '@/assets/css/icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'tailwindcss/dist/utilities.css'
import '@/assets/css/custom.scss'

import 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },

  created: function() {
    axios.defaults.headers.common['Authorization'] =
      'Client-ID 11a74ce7eb951b44a650e7d7f8357c68d0d2c832d514395230893af7bd1eae22'
  },
}
</script>
