<template>
  <v-container>
      <reply 
      v-for="(reply, index) in content" 
      :key="reply.id" 
      :index="index"
      :data="reply"></reply>
  </v-container>
</template>

<script>
import Reply from './reply'
export default {
    components:{Reply},
    props:['question', 'index'],
    data(){
        return{
            content:this.question.replies
        }
    },
    created(){
        this.listen();
    },
    methods:{
        listen(){
            EventBus.$on('NewReply', (reply) => {
                this.content.unshift(reply)
                EventBus.$emit('IncrReplies', this.question.reply_count + 1)
            });

            EventBus.$on('deleteReply', (index) => {
                axios.delete(`/api/question/${this.question.slug}/reply/${this.content[index].id}`)
                .then(res => {
                    this.content.splice(index,1)
                    EventBus.$emit('DecrReplies', this.question.reply_count - 1)
                })
            });

            Echo.private('App.User.' + User.id())
                .notification((notification) => {
                    this.content.unshift(notification.reply)
            });

            Echo.channel('deleteReplyChannel')
            .listen('DeleteReplyEvent', (e) => {
                for(let i = 0; i< this.content.length; i++){
                    if(this.content[i].id == e.id){
                        this.content.splice(i,1);
                    }
                }
            });
        }
    }
}
</script>

<style>

</style>