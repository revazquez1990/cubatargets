<template>
    <v-app>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="12">
                <vue-simplemde v-model="reply.reply" />
            </v-col>

            <v-card-actions>
                <v-btn icon small @click="update">
                    <v-icon color="green" >{{ icons.mdiContentSaveEdit }}</v-icon>
                </v-btn>
                <v-btn icon small @click="cancel">
                    <v-icon color="red">{{ icons.mdiCancel }}</v-icon>
                </v-btn>
            </v-card-actions>
        </v-row>
    </v-app>
</template>

<script>
export default {
    props:['reply'],
    data(){
        return{
            icons: {
                mdiCancel,
                mdiContentSaveEdit
            },
        }
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body:this.reply.reply})
            .then(res => {
                this.cancel();
            })
        }
    }
}
</script>

<style>

</style>