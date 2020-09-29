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