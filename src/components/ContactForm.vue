<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" md="6" sm="12">
       <v-img
        src="../assets/contact.png"
        class="ma-16"
       >

       </v-img>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-form @submit.prevent="sendEmail">
           <v-text-field
              label="Email"
              placeholder="Enter Your Email"
              solo
              class="mx-8"
              name="user_email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            
            <v-text-field
              label="Name"
              placeholder="Enter Your Name"
              solo
              class="mx-8"
              name="user_name"
              :rules="[rules.required]"
            ></v-text-field>

            <v-textarea
              solo
              label="Describe what you want to send"
              class="mx-8"
              name="message"
              :rules="[rules.required]"
            ></v-textarea>

            <v-btn
              color="cyan accent-4"
              class="ma-2 white--text ml-8"
              type="submit"
            >
              Send Message
              <v-icon
                right
                dark
              >
                mdi-send
              </v-icon>
            </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      timeout="3000"
      :color="snackbar_color"
    >
      {{ snackbar_text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
// import axios from 'axios'
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      snackbar: false,
      snackbar_text: null,
      snackbar_color: null,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },

  methods: {
    // // send: function() {
    //   let currentObj = this

    //   const instaxios = axios.create({
    //     auth: { username: process.env.VUE_APP_MAIL_CLIENT, password: process.env.VUE_APP_MAIL_PASS},
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': 'https://api.mailjet.com'
    //     }
    //   });

    //   instaxios.post('https://api.mailjet.com/v3.1/send', {
    //      "Messages":[
    //       {
    //         "From": {
    //           "Email": currentObj.email,
    //           "Name": currentObj.name
    //         },
    //         "To": [
    //           {
    //             "Email": "abdurozzaq.jobs@gmail.com",
    //             "Name": "Abdurozzaq Nurul Hadi"
    //           }
    //         ],
    //         "Subject": currentObj.subject,
    //         "TextPart": currentObj.message,
    //       }
    //     ]
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // },


    sendEmail: function(e) {
      let currentObj = this
      emailjs.sendForm('abdurozzaq.jobs', 'ozzaqdev_template', e.target, 'user_R3HZsEdhBNKAbXwcpDhqG')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            currentObj.snackbar_text = "Email has been sent successfully!"
            currentObj.snackbar_color = "blue"
            currentObj.snackbar = true
        }, (error) => {
            console.log('FAILED...', error);
            currentObj.snackbar_text = "There was a problem sending the message."
            currentObj.snackbar_color = "red"
            currentObj.snackbar = true
        });
    }
  },
}
</script>