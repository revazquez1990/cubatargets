<template>
    <!-- <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
        
    </div> -->
    <v-app id="inspire">
        <nav-drawer :data="drawer"></nav-drawer>
        <app-bar :data="drawer"></app-bar>
        <app-main></app-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import toolbar from './Toolbar'
import AppFooter from './AppFooter'
import login from './login/Login'
import AppBar from './AppBar'
import AppMain from './AppMain'
import NavDrawer from './NavigationDrawer'
export default {
    components:{toolbar, AppFooter, login, AppBar, AppMain, NavDrawer},
    created(){
        this.listen()
    },
    data: () => ({
      drawer: true,
    }),
    methods:{
        listen(){
            EventBus.$on('changeDrawer', (data) => {
                this.drawer = data
            });
        }
    }
}
</script>

<style>

</style>