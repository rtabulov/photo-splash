<template>
  <div class="photo">
    <router-link class="block" :to="`/photos/${photo.id}`">
      <img class="photo__img" :src="photo.urls.small" :alt="'By ' + fullName" />
    </router-link>
    <a
      :href="photo.user.links.html"
      target="_blank"
      rel="noopener noreferrer"
      class="user"
    >
      <img class="rounded-full" :src="photo.user.profile_image.small" alt="" />

      {{ fullName }}
    </a>

    <a
      :href="photo.links.download"
      target="_blank"
      rel="noopener noreferrer"
      class="download"
      ><i class="material-icons">file_download</i></a
    >
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  computed: {
    fullName: function() {
      let name = this.photo.user.first_name
      if (this.photo.user.last_name) {
        name += ' ' + this.photo.user.last_name
      }
      return name
    },
  },
  props: {
    photo: Object,
  },
}
</script>

<style></style>
