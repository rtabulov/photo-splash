<template>
  <div>
    <nav class="grey darken-4">
      <!-- sidenav toggle -->
      <a
        href="#"
        data-target="nav-mobile"
        class="sidenav-trigger hide-on-large"
      >
        <i class="material-icons">menu</i>
      </a>

      <div class="container">
        <div class="nav-wrapper">
          <router-link class="brand-logo" to="/">PhotoSplash 💦</router-link>

          <ul class="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/rtabulov/photo-splash"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ul id="nav-mobile" class="sidenav py-20">
      <li>
        <a
          href="https://github.com/rtabulov/photo-splash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repo
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    var elems = document.querySelectorAll('.sidenav')
    var instances = window.M.Sidenav.init(elems, {})
  },
}
</script>

<style></style>
