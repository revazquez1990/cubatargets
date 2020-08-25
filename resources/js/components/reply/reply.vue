<template>
  <v-app class="mt-3 ml-2">
        <div>
            <v-card>
                <v-card-title>
                    <div class="headline">{{data.user}}</div>
                    <div class="ml-2">said {{data.created_at}}</div>
                    <v-spacer></v-spacer>
                    <like
                    :content="data"
                    ></like>
                </v-card-title>
                <v-divider></v-divider>

                <edit-reply 
                v-if="editing"
                :reply="data"
                ></edit-reply>

                <v-card-text v-else v-html="reply"></v-card-text>

                <v-card-actions v-if="own && !editing" @click="edit">
                    <v-btn icon small >
                        <v-icon color="orange">{{ icons.mdiPencil }}</v-icon>
                    </v-btn>
                    <v-btn icon small @click="destroy"> 
                        <v-icon color="red">{{ icons.mdiDelete }}</v-icon>
                    </v-btn>
                </v-card-actions>  

            </v-card>
        </div>  
  </v-app>
</template>

<script>
import EditReply from './editReply'
import Like from '../likes/like'
export default {
    components:{EditReply, Like},
    props:['data', 'index'],
    data(){
        return{
            icons: {
                mdiPencil,
                mdiDelete,
            },
            editing:false
        }
    },
    computed:{
        own(){
            return User.own(this.data.user_id)
        },
        reply(){
            return md.parse(this.data.reply)
        }
    },
    created(){
        this.listen();
    },
    methods:{
        destroy(){
            EventBus.$emit('deleteReply', this.index)
        },

        edit(){
            this.editing = true;
        },
        listen(){
            EventBus.$on('cancelEditing', ()=>{
                this.editing = false;
            })
        }
    }
}
</script>

<style>

</style>