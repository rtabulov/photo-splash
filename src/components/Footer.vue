<template>
  <footer class="page-footer grey darken-4 mt-12">
    <div class="container">
      <div class="row">
        <div class="col m6 s12">
          <h5 class="white-text">Photo Splash</h5>
          <p class="grey-text text-lighten-4">
            A demo app, showcasing the Unsplash API. <br />
            Built with vuejs and some love ❤️
          </p>
        </div>
        <div class="col m4 offset-l2 offset-m1 s12">
          <h5 class="white-text">Some stuff I used</h5>
          <ul>
            <li>
              <a
                class="grey-text text-lighten-3"
                rel="noopener noreferrer"
                target="_blank"
                href="https://vuejs.org/"
                >Vue docs</a
              >
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                rel="noopener noreferrer"
                target="_blank"
                href="https://unsplash.com/documentation"
                >Unsplash API docs</a
              >
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                rel="noopener noreferrer"
                target="_blank"
                href="https://materializecss.com/"
                >Materialize</a
              >
            </li>

            <li>
              <a
                class="grey-text text-lighten-3"
                rel="noopener noreferrer"
                target="_blank"
                href="https://tailwindcss.com/"
                >Tailwind</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container text-center">
        ©
        <a
          href="https://github.com/rtabulov"
          target="_blank"
          rel="noopener noreferrer"
        >
          rtabulov
        </a>
        | {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style></style>
