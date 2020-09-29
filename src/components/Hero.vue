<template>
  <div>
    <v-img
      v-if="$vuetify.breakpoint.mdAndUp"
      max-height="100%"
      max-width="100%"
      src="../assets/hero.png"
    >
    
      <v-row align="center" justify="center" class="mt-16">
        <v-col cols="10">
          <v-row align="center" justify="center" class="mt-16">
            <v-col cols="12" md="6" xl="8">
              <div class="text-lg-h4 text-md-h6 text-sm-h6 display-2 font-weight-bold mb-4 mt-16">Hi, I'm Rozzaq!</div>
              <div class="text-lg-h4 text-md-h6 text-sm-h6 font-weight-light">
                I am a person <br />
                who makes <br />
                Web and Cross Platform Applications.
              </div>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>

    <v-img
      v-if="$vuetify.breakpoint.smAndDown"
      max-height="100%"
      max-width="100%"
      src="../assets/hero-mobile.png"
    >
    
      <v-row align="center" justify="center" class="mt-16">
        <v-col cols="10">
          <v-row align="center" justify="center" class="mt-16">
            <v-col cols="12" md="6" xl="8">
              <div class="text-lg-h4 text-md-h6 text-sm-h6 display-2 font-weight-bold mb-4 mt-16">Hi, I'm Rozzaq!</div>
              <div class="text-lg-h4 text-md-h6 text-sm-h6 font-weight-light">
                I am a person <br />
                who makes <br />
                Web and Cross Platform Applications.
              </div>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>

    <div class="svg-border-waves text-white">
      <v-img src="../assets/whiteWave.svg" />
    </div>
  </div>
</template>

<style>
.svg-border-waves .v-image {
  margin-top: -45px;
  height: 3rem;
  width: 100%;
}
</style>