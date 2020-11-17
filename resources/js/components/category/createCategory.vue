<template>
  <v-app>
        
        <v-form @submit.prevent="submit">
            <v-text-field
            v-model="form.name"
            label="Category Name"
            type="text"
            required
            ></v-text-field>
            
            <v-alert v-if="errors" type="error">
                {{errors.name[0]}}
            </v-alert>
            
            <v-btn 
            v-if="!editSlug" 
            type="submit" 
            color="teal"
            :disabled="disabled"
            >Create</v-btn>
            
            <div v-else>
                <v-btn color="green" type="submit">Save</v-btn>
                <v-btn color="red" @click="cancel()">Cancel</v-btn>
            </div>
        </v-form>
        

        <v-card class="mt-5">
            <v-toolbar color="indigo" dark dense>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list v-for="(categ, index) in categories"
                :key="categ.id">
                <v-list-item> 
                    <v-list-item-action>
                        <v-btn icon small @click="edit(index)">
                            <v-icon color="orange">{{ icons.mdiPencil }}</v-icon>
                        </v-btn>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>{{categ.name}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon small @click="destroy(categ.slug, index)"> 
                            <v-icon color="red">{{ icons.mdiDelete }}</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                    <v-divider></v-divider>

            </v-list>
        </v-card>
  </v-app>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:null,
            },
            icons: {
                mdiPencil,
                mdiDelete,
            },
            categories:{},
            editSlug:null,
            errors:null
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        submit(){
            this.editSlug ? this.update() :this.create()
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.cancel()
            })
        },
        create(){
            axios.post('/api/category', this.form)
            .then(res => {
                this.categories.unshift(res.data)
                this.form.name = null
            })
            .catch(error => this.errors = error.response.data.errors)
        },
        destroy(slug,index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index, 1))
        },
        edit(index){
            this.form.name = this.categories[index].name;
            this.editSlug = this.categories[index].slug;
            this.categories.splice(index, 1)
        },
        cancel(){
            this.editSlug = null;
            this.form.name = null;
        },
        
    },
    computed:{
        disabled(){
            return !this.form.name;
        }
    }
}
</script>

<style>

</style>