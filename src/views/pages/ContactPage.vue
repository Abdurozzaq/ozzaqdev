<template>
  <div>
    <PageTitle title="Get Connected With Me!" />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../../components/ContactForm.vue";
import PageTitle from '../../components/PageTitle.vue'
export default {
  metaInfo: {
    title: 'Contact Me',
    titleTemplate: '%s - ozzaqdev',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Contact Me, Abdurozzaq Nurul Hadi. Email: Abdurozzaq@outlook.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    ContactForm,
    PageTitle
  },
  data() {
    return {
      api_key: process.env.VUE_APP_SMTP2GO_API_KEY
    }
  },

}
</script>