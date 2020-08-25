<template>
    <v-app>
        <vue-simplemde v-model="body" />
        <v-btn color="green" dark style="width:100px" @click="submit">
                Reply
        </v-btn>
    </v-app>
</template>

<script>
import VueSimplemde from 'vue-simplemde';
export default {
    components: {VueSimplemde},
    props:['questionSlug'],
    data(){
        return{
            body:null,
        }
    },
    methods:{
        submit(){
           axios.post(`/api/question/${this.questionSlug}/reply`, {body:this.body})
           .then(res => {
               this.body = ''
               EventBus.$emit('NewReply', res.data.reply)
               window.scrollTo(0,0)
           })
            .catch(error => console.log(error.response.data))

        }
    }
}
</script>

<style>

</style>