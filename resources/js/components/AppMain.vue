<template>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
            <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
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