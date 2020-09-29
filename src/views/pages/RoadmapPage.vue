<template>
  <div class="grey lighten-4">
    <PageTitle title="My Projects Roadmap" />
    <Roadmap class="mx-16" />
  </div>
</template>

<script>
import Roadmap from '../../components/ProjectRoadmap.vue'
import PageTitle from '../../components/PageTitle.vue'
export default {
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