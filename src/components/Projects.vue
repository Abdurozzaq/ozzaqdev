<template>
  <div class="grey lighten-4">
    <v-row>
      <v-col cols="12" class="my-5">
        <div class="text-h5 font-weight-bold text-center">My Favorite Projects</div>
      </v-col>
    </v-row>
    
    <v-row 
      v-for="(cpj, index) in chunkedProjects"
      :key="index"
    >
      <v-col
        v-for="(pj, index) in cpj"
        :key="index"
        class="mb-10"
      >
        <v-card
          class="mx-auto mt-5"
          max-width="344"
          elevation="8"
        >
          <v-img
            class="mx-auto"
            :src="pj.photo"
            max-width="300px"
          ></v-img>

          <v-card-title>
            {{ pj.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ pj.desc}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              :href="pj.link"
              target="_blank"
            >
              Source Code
              <v-icon
                right
                dark
              >
                mdi-github
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      projects: [
        {
          'name': 'OASHIER',
          'desc': 'A web application for restaurant cashiers. Which helps manage orders and menu stock',
          'link': 'https://www.github.com/Abdurozzaq/Oashier',
          'photo': '/img/oashier.png'
        },
        {
          'name': 'OIBRARY',
          'desc': 'A web application for libraries that enables a librarian to receive book loans, and process book loan and repayment data.',
          'link': 'https://www.github.com/Abdurozzaq/Oibrary',
          'photo': '/img/oibrary.png'
        },
        {
          'name': 'OCIAL',
          'desc': 'A Vuetify Social Network Dashboard UI Design',
          'link': 'https://www.github.com/Abdurozzaq/Ocial',
          'photo': '/img/ocial.png'
        }
      ],
    }
  }, // end of data

  computed: {
    chunkedProjects () {
      let currentObj = this;
     return _.chunk(currentObj.projects, 3)
    }
  }
}
</script>