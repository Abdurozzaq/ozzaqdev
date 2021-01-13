<template>
  <div class="grey lighten-4">
    <PageTitle title="My Projects Roadmap" />
    <Roadmap class="mx-8" />
  </div>
</template>

<script>
import Roadmap from '../../components/ProjectRoadmap.vue'
import PageTitle from '../../components/PageTitle.vue'
export default {
  metaInfo: {
    title: 'My Projects Roadmap',
    titleTemplate: '%s - ozzaqdev',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'LaraELearn, MakeDeliveryOrder, Oashier, Oibrary, Ocial.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    Roadmap,
    PageTitle
  },
  data() {
    return {
      
    }
  }
}
</script>