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
      { name: 'description', content: 'I am a vocational high school student with a major in Software Engineering, at SMKN 12 Kab. Tangerang. From there I get basic knowledge for become a software engineer. Then I also studied it myself, until there have been several personal projects which I especially made with using Laravel & Vue.js.' },
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