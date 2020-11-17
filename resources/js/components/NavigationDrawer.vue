<template>
    <v-navigation-drawer
    v-model="data"
    app
    clipped
    >
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{
            items: [
                {title: 'Forum', to: "/forum", show: true},
                {title: 'Ask Question', to: "/ask", show: User.loggedIn()},
                {title: 'Category', to: "/category", show: User.admin()},
                {title: 'Login', to: "/login", show: !User.loggedIn()},
                {title: 'Logout', to: "/logout", show: User.loggedIn()},
            ],
        }
    },
}
</script>

<style>

</style>