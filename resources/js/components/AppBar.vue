<template>
    <v-app-bar
        app
        clipped-left
        >
        <v-app-bar-nav-icon @click="changeDrawer()"></v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link class="white--text" to="/">Welcome to CubaTargets</router-link> 
            {{this.name_user}}
        </v-toolbar-title>
    </v-app-bar>    
</template>

<script>
export default {
    props: ['data'],
    data: () => ({
        drawer: null,
        name_user: User.name(),
        loggedIn: User.loggedIn()
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    methods:{
        changeDrawer(){
            this.data = !this.data;
            EventBus.$emit('changeDrawer', this.data)
        }
    }

}
</script>

<style>

</style>