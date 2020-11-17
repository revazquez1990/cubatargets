<template>
  <v-app>
    <v-toolbar dark color="indigo">
      <v-toolbar-title>
        <router-link class="white--text" to="/">Welcome to CubaTargets</router-link> 
        {{this.name_user}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <app-notification v-if="loggedIn"></app-notification>
      <div class="hidden-sm-and-down">
            
            <router-link
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            v-if="item.show">
                <v-btn text>{{item.title}}</v-btn>
            </router-link>
          </div>
    </v-toolbar>
      <!-- <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          dark
          color="indigo"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title><router-link class="white--text" to="/">Welcome to CubaTargets</router-link> {{this.name_user}}</v-toolbar-title>

          <v-spacer></v-spacer>
          <app-notification v-if="loggedIn"></app-notification>
          <div class="hidden-sm-and-down">
            
            <router-link
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            v-if="item.show">
                <v-btn text>{{item.title}}</v-btn>
            </router-link>
          </div>
    
        </v-app-bar>
    
      <v-container style="height: 68px;">

      </v-container>
    </v-card> -->
  </v-app>
</template> 

<script>
import AppNotification from './AppNotification'
export default {
    components:{AppNotification},
    data(){
        return{
            items: [
                {title: 'Forum', to: "/forum", show: true},
                {title: 'Ask Question', to: "/ask", show: User.loggedIn()},
                {title: 'Category', to: "/category", show: User.admin()},
                {title: 'Login', to: "/login", show: !User.loggedIn()},
                {title: 'Logout', to: "/logout", show: User.loggedIn()},
            ],
            name_user: User.name(),
            loggedIn: User.loggedIn()
        }
    },
    created(){
        EventBus.$on('logout', () => {
            User.logout()
        });
    }
}
</script>

<style>
    .v-application--wrap {
        min-height: 0px !important;
    }
</style>