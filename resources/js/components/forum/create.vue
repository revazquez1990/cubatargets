<template>
    <v-app>
        <v-container>
            <v-form @submit.prevent="create"
            >
                <v-row align="center">
                    <v-col class="d-flex" cols="12" sm="12">
                        <v-text-field
                        v-model="form.title"
                        label="Title"
                        type="text"
                        required
                        ></v-text-field>
                    </v-col>
                    
                    <v-col class="d-flex" cols="12" sm="12">
                         <v-autocomplete
                            v-model="form.category_id"
                            :items="categories"
                            item-text="name"
                            item-value="id"
                            dense
                            filled
                            label="Category"
                         >
                         
                         </v-autocomplete>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="12">
                        <vue-simplemde v-model="form.body" />
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="12">
                        <v-btn
                        color="green"
                        type="submit"
                        :disabled="disabled"
                        >
                        Create
                        </v-btn>
                    </v-col>

                    
                </v-row>
            </v-form>
        </v-container>
    </v-app>
</template>

<script>
import VueSimplemde from 'vue-simplemde';
export default {
    components: {VueSimplemde},
    data(){
        return{
            form:{
                title: null,
                category_id: null,
                body: null,
            },
            categories: {},
            errors: {}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
    },
    methods:{
        create(){
            axios.post('/api/question', this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => this.errors = error.response.data.error)
        }
    },
    computed:{
        disabled(){
            return !(this.form.title && this.form.category_id && this.form.body);
        }
    }
}
</script>

<style>
</style>