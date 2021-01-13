<template>
  <div>
    <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        color="cyan lighten-2"
        fill-dot
        max-width="250"
      >
        <span slot="opposite">{{ item.year }}</span>
        <v-card
          color="cyan lighten-2"
          dark
        >
          <v-card-title class="title">
            {{ item.name }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <div class="text-h6 font-weight-light py-5">{{ item.desc }}</div>
            <v-btn
              v-if="item.link"
              color="cyan lighten-2"
              class="mx-0"
              outlined
              :href="item.link"
              target="_blank"
              small
            >
              Source Code
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          'name': 'LaraELearn (My First Project)',
          'desc': 'AdminLTE x Laravel E-Learning System Script',
          'link': 'https://www.github.com/Abdurozzaq/LaraELearn',
          'year': 'Dec 22, 2019'
        },
        {
          'name': 'MakeDeliveryOrder App',
          'desc': 'Goods delivery letter maker desktop application. Made with VueJS, Quasar, and Electron',
          'link': 'https://www.github.com/Abdurozzaq/MakeDeliveryOrder',
          'year': 'Apr 16, 2020'
        },
        {
          'name': 'Vuetify-Laravel Starter Kit (Auth API)',
          'desc': 'A starter kit for creating Larave and Vuetify Project',
          'link': 'https://www.github.com/Abdurozzaq/vuetify_laravel_starter_kit',
          'year': 'May 23, 2020'
        },
        {
          'name': 'OASHIER',
          'desc': 'A web application for restaurant cashiers. Which helps manage orders and menu stock',
          'link': 'https://www.github.com/Abdurozzaq/Oashier',
          'year': 'Jul 15, 2020'
        },
        {
          'name': 'OIBRARY',
          'desc': 'A web application for libraries that enables a librarian to receive book loans, and process book loan and repayment data.',
          'link': 'https://www.github.com/Abdurozzaq/Oibrary',
          'year': 'Aug 21, 2020'
        },
        {
          'name': 'OCIAL',
          'desc': 'A Vuetify Social Network Dashboard UI Design',
          'link': 'https://www.github.com/Abdurozzaq/Ocial',
          'year': 'Jan 13, 2021'
        },
        {
          'name': 'NEXT?',
          'desc': 'And The Next Projects Will Be In Your Call',
          'year': 'Comming Soon'
        }
      ],
    }
  }
}
</script>