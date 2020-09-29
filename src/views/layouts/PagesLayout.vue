<template>
  <v-app id="inspire">
    
    <v-app-bar
      app
      class="grey darken-2"
      elevation-5
      hide-on-scroll
      
    >
      <v-container class="py-0 fill-height">
        <div class="text-h6 white--text">ozzaqdev</div>

        <v-spacer></v-spacer>

        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            text
            color="white"
            :href="link.url"
          >
            {{ link.label }}
          </v-btn>
        </div>

        <v-menu offset-y v-else>
          <template v-slot:activator="{ on, attrs }">

            <v-btn
              class="mx-2"
              text
              dark
              fab
              color="white"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-format-list-bulleted-square
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
              :href="link.url"
            >
              <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid pa-0>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
  import Footer from '../../components/Footer.vue'

  export default {
    components: {
      Footer
    },
    data: () => ({
      links: [
        {
          'label': 'Home',
          'url': "/"
        },
        {
          'label': 'Roadmap',
          'url': "/project-roadmap"
        },
        {
          'label': 'Contact Me',
          'url': "/contact"
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