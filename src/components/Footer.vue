<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="gradientcolor">
        <strong class="subheading">Get connected with me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4"
          dark
          icon
          :href="icon.url"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="grey darken-4 py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Abdurozzaq Nurul Hadi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          'icon': 'mdi-github',
          'url': 'https://github.com/Abdurozzaq'
        },
        {
          'icon': 'mdi-facebook',
          'url': 'https://www.facebook.com/profile.php?id=100006286786323'
        },
        {
          'icon': 'mdi-linkedin',
          'url': 'https://www.linkedin.com/in/abdurozzaqnh/'
        },
        {
          'icon': 'mdi-whatsapp',
          'url': 'https://wa.wizard.id/8b4f6e'
        },
      ],
    }),
  }
</script>

<style>
.gradientcolor {
  background: linear-gradient(90deg, rgba(0,238,204,1) 27%, rgba(0,212,255,1) 100%);
}
</style>