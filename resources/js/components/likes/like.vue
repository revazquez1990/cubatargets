<template>
  <v-app>
    <v-btn icon small @click="likeIt">
        <v-icon :color="color">{{ icons.mdiHeart }}</v-icon> {{this.count}}
    </v-btn>
  </v-app>
</template>

<script>
export default {
    props:['content'],
    data(){
        return{
            liked:this.content.liked,
            count:this.content.like_count,
            icons: {
                mdiHeart,
            },
        }
    },
    computed:{
        color(){
            return this.liked ? 'red' : 'red lighten-4'
        }
    },
    methods:{
        likeIt(){
            if(User.loggedIn()){
                this.liked ? this.decr() : this.incr();
                this.liked = !this.liked
            }
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
            .then(res => {
                this.count ++
            })
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
            .then(res => {
                this.count --
            })
        }
    }
}
</script>

<style>

</style>