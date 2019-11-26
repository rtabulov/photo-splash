<template>
  <nav class="grey darken-4 search-nav">
    <div class="container h-full">
      <div class="nav-wrapper">
        <form v-on:submit.prevent="onSubmit">
          <div class="input-field">
            <input
              ref="intputElement"
              v-model="input"
              placeholder="Search for anything"
              id="search"
              type="search"
              required
            />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      input: '',
    }
  },

  methods: {
    onSubmit() {
      this.$emit('inputSubmit', this.input)
      // this.input = '';
      this.$refs.intputElement.blur()
    },
  },
}
</script>

<style></style>
