<template>
  <v-container v-if="question">
    <edit-question 
    v-if="editing"
    :data = question
    ></edit-question>
      
    <show-question
    v-else
    :data = question
    ></show-question>
  
    <replies :question="question"></replies>

    <v-container>
        <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>
    </v-container>
  </v-container>

</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './editQuestion'
import Replies from '../reply/replies'
import NewReply from '../reply/newReply'
export default {
    components:{ShowQuestion, EditQuestion, Replies, NewReply},
    data(){
        return{
            question:null,
            editing:false
        }
    },
    created(){
        this.listen();
        this.getQuestion();
    },
    computed:{
        loggedIn(){
            return User.loggedIn()
        }
    },
    methods:{
        listen(){
            EventBus.$on('startEditing', ()=>{
                this.editing = true;
            });
            EventBus.$on('cancelEditing', ()=>{
                this.editing = false;
            });
            EventBus.$on('DecrReplies', (reply_count) => {
                this.question.reply_count = reply_count;
            });
            EventBus.$on('IncrReplies', (reply_count) => {
                this.question.reply_count = reply_count;
            });
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    }
}
</script>

<style>

</style>