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
  metaInfo: {
    title: 'Welcome',
    titleTemplate: '%s - ozzaqdev',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Abdurozzaq\'s Portfolio' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    Hero,
    About,
    Projects
  },
}
</script>