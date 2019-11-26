<template>
  <div v-if="loading" class="container py-24 text-center">
    <h1>Loading <Preloader size="medium" class="ml-8" /></h1>
  </div>

  <div v-else-if="photo && Object.keys(photo).length > 0">
    <!-- <div class="container pt-8"> -->
    <div class="flex justify-center">
      <img
        :srcset="
          `
          ${photo.urls.thumb} 200w,
          ${photo.urls.small} 400w,
          ${photo.urls.regular} 1080w,
          ${photo.urls.full} ${photo.width}w
        `
        "
        style="max-height: 120vh; max-width: 100%;"
        :src="photo.urls.full"
        alt=""
      />
    </div>
    <!-- </div> -->
    <div class="container">
      <div class="row">
        <div class="col m5 text-lg">
          <h1 class="text-3xl">
            <a
              class="inline-flex items-center"
              style="color: inherit;"
              :href="photo.user.links.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mr-3 rounded-full"
                width="50"
                :src="photo.user.profile_image.medium"
                :alt="fullName + ' profile image'"
              />
              <span>
                {{ fullName }} <br />
                <small class="text-base inline-flex items-center"
                  >visit on unsplash
                  <i class="material-icons ml-1" style="font-size: 17px;"
                    >arrow_forward</i
                  ></small
                >
              </span>
            </a>
          </h1>
          <p v-if="photo.description">{{ photo.description }}</p>

          <p v-if="photo.location.title">{{ photo.location.title }}</p>

          <h2 class="text-xl inline-block mr-4">Download:</h2>
          <a
            :href="photo.links.download"
            target="_blank"
            rel="noopener noreferrer"
            class="btn green darken-3 waves-effect waves-light my-6"
          >
            <!-- {{ photo.width }} x {{ photo.height }} px -->
            Full size
            <i class="material-icons right">cloud_download</i>
          </a>
        </div>
        <div class="col m6 offset-m1">
          <div class="mb-10 mt-6">
            <h2 class="text-xl inline-block mr-4">Info:</h2>

            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.width }} x {{ photo.height }} px
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.color }}
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ formattedDate }}
              <i class="material-icons right">access_time</i>
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.likes }}
              <i class="material-icons right">favorite_border</i>
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.views }}
              <i class="material-icons right">visibility</i>
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.downloads }}
              <i class="material-icons right">cloud_download</i>
            </span>
          </div>

          <div class="tags">
            <h2 class="text-xl inline-block mr-4">Tags:</h2>
            <span
              v-for="tag in photo.tags"
              :key="tag.title"
              class="btn-small waves-effect waves-light indigo text-darken-4 mr-2 mb-2"
              >{{ tag.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container py-24">
    <h1>
      This photo does not exist 😢
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Preloader from '@/components/Preloader'

export default {
  name: 'Photo',

  components: {
    Preloader,
  },

  data() {
    return {
      photo: {},
      loading: true,
    }
  },

  computed: {
    fullName: function() {
      let name = this.photo.user.first_name
      if (this.photo.user.last_name) {
        name += ' ' + this.photo.user.last_name
      }
      return name
    },

    formattedDate: function() {
      return moment(this.photo.date).format('MMM DD, YYYY')
    },
  },

  created() {
    axios
      .get('https://api.unsplash.com/photos/' + this.$route.params.id)
      .then((res) => {
        this.photo = res.data
      })
      .finally(() => {
        this.loading = false
      })
  },
}
</script>

<style lang="scss"></style>
