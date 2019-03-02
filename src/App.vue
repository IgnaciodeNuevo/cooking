<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import
  './assets/stylesheets/abstracts/_variables.scss',
  './assets/stylesheets/abstracts/_functions.scss',
  './assets/stylesheets/abstracts/mixins/_arrows.scss',
  './assets/stylesheets/abstracts/mixins/_aspect-ratio.scss',
  './assets/stylesheets/abstracts/mixins/_baseline.scss',
  './assets/stylesheets/abstracts/mixins/_custom-properties.scss',
  './assets/stylesheets/abstracts/mixins/_ellipsis.scss',
  './assets/stylesheets/abstracts/mixins/_fonts.scss',
  './assets/stylesheets/abstracts/mixins/_crop-text.scss',
  './assets/stylesheets/abstracts/mixins/_underline.scss',
  './assets/stylesheets/abstracts/mixins/_spacing.scss',
  './assets/stylesheets/abstracts/mixins/_transition.scss',
  './assets/stylesheets/abstracts/mixins/_clearfix.scss',
  './assets/stylesheets/abstracts/mixins/_line-gradient.scss',
  './assets/stylesheets/abstracts/mixins/_open-type.scss';

// 2. Vendors
@import
  './assets/stylesheets/vendor/_normalize.scss';

// 3. Base stuff
@import
  './assets/stylesheets/base/_base.scss',
  './assets/stylesheets/base/_fonts.scss',
  './assets/stylesheets/base/_utilities.scss';

// 4. Layout-related sections
@import
  './assets/stylesheets/layout/_header.scss',
  './assets/stylesheets/layout/_footer.scss';

// 5. Components

// 6. Page-specific styles
@import
  './assets/stylesheets/pages/_home.scss';

</style>
