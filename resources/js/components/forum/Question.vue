<template>
  <v-app style="margin-bottom: 30px;">
      <v-card
    class="mx-auto"
    width="100%"
  >
    <v-card-title>
        <router-link :to="data.path">
            {{data.title}}
        </router-link>
    </v-card-title>

    <v-card-subtitle class="pb-0 grey--text">
        {{data.user}} said {{data.created_at}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{data.body}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-app>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>