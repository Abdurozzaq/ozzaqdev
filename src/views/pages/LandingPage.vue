<template>
  <div>
    <Hero />
    <About />
    <Projects />
  </div>
</template>

<script>
import Hero from '../../components/Hero.vue'
import About from '../../components/About.vue'
import Projects from '../../components/Projects.vue'

export default {
  components: {
    Hero,
    About,
    Projects
  },
}
</script>