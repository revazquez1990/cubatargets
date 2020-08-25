<template>
  <v-app>
        <v-container fluid>
            <v-form @submit.prevent="update"
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
                        <vue-simplemde v-model="form.body" />
                    </v-col>

                    <v-card-actions>
                        <v-btn icon small type="submit">
                            <v-icon color="green" >{{ icons.mdiContentSaveEdit }}</v-icon>
                        </v-btn>
                        <v-btn icon small @click="cancel">
                            <v-icon color="red">{{ icons.mdiCancel }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    
                </v-row>
            </v-form>
        </v-container>
    </v-app>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            form:{
                title: null,
                body: null,
            },
            icons: {
                mdiCancel,
                mdiContentSaveEdit
            },
        }
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.form.slug}`, this.form)
            .then(res => this.cancel())
        }
    },
    created(){
        this.form = this.data
    }
}
</script>

<style>
    .vue-simplemde{
        width: 100%;
    }
</style>