<template>
  <div>
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="py-10 gradientcolor">
        <div class="text-h5 font-weight-bold white--text">{{ title }}</div>

        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.gradientcolor {
  background: linear-gradient(90deg, rgba(0,238,204,1) 27%, rgba(0,212,255,1) 100%);
}
</style>