<template>
  <div v-if="Object.keys(photo).length > 0">
    <div class="flex justify-center relative">
      <button
        class="btn black z-depth-4"
        @click="$router.go(-1)"
        type="button"
        :style="{ position: 'absolute', right: '5%', bottom: '20px' }"
      >
        Back<i class="material-icons left">keyboard_arrow_left</i>
      </button>
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
                <span>
                  {{ fullName }}
                </span>
                <br />
                <small class="text-base flex items-center leading-none">
                  visit on unsplash
                  <i class="material-icons ml-1" style="font-size: 18px;"
                    >keyboard_arrow_right
                  </i>
                </small>
              </span>
            </a>
          </h1>
          <p v-if="photo.description">{{ photo.description }}</p>

          <p v-if="photo.location.title">{{ photo.location.title }}</p>

          <h2 class="text-xl flex items-center">
            Download:
            <a
              :href="photo.links.download"
              target="_blank"
              rel="noopener noreferrer"
              class="btn green darken-3 waves-effect waves-light ml-4"
            >
              <!-- {{ photo.width }} x {{ photo.height }} px -->
              Full size
              <i class="material-icons right">cloud_download</i>
            </a>
          </h2>
        </div>
        <div class="col m6 offset-m1 mt-6">
          <div class="mb-10">
            <h2 class="text-xl inline-block mr-4">Info:</h2>

            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.width }} x {{ photo.height }} px
            </span>
            <span class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
              >{{ photo.color }}
            </span>
            <span
              v-if="photo.created_at"
              class="btn waves-effect waves-light blue darken-1 mr-2 mb-2"
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

          <div class="mb-10">
            <h2 class="text-xl inline-block mr-4">Tags:</h2>
            <span
              v-for="tag in photo.tags"
              :key="tag.title"
              class="btn-small waves-effect waves-light indigo text-darken-4 mr-2 mb-2"
              @click="() => onTagClick(tag.title)"
              >{{ tag.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'

export default {
  name: 'Photo',

  computed: {
    fullName: function() {
      let name = this.photo.user.first_name
      if (this.photo.user.last_name) {
        name += ' ' + this.photo.user.last_name
      }
      return name
    },

    formattedDate: function() {
      const d = new Date(this.photo.created_at)
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]

      return (
        monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
      )
    },

    ...mapState(['status', 'photo']),
  },

  methods: {
    onTagClick(tag) {
      console.log(tag)
      this.$store.commit('setQuery', tag)
      this.$store.dispatch('fetchPhotos', {
        replace: true,
        query: tag,
        heading: `Results for "${tag}"`,
      })

      router.push('/')
    },
  },

  created() {
    if (this.photo.id !== this.$route.params.id) {
      this.$store.dispatch('getPhoto', { id: this.$route.params.id })
    }
  },
}
</script>

<style lang="scss"></style>
