<template>
  <v-app class="mt-2 ml-3">
    <v-card>    
        <v-toolbar color="cyan" dark dense>
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list three-line v-for="categ in categories"
            :key="categ.id">
            <template>
                <v-subheader>{{categ.name}}</v-subheader>
                <v-divider></v-divider>
            </template>
        </v-list>
    </v-card>   
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            categories: {}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    }
}
</script>

<style>
    .v-divider{
        margin: 0px;
    }
</style>