<template>
  <!-- <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CubaTargets</strong>
      </v-col>
    </v-footer>
  </v-card> -->
  <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>

<script>
export default {
  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },

}
</script>

<style>

</style>