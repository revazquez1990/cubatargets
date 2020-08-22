<template>
  <v-app>
      <v-container>
      <v-row>
          <div class="col-md-6">
            <v-form @submit.prevent="login"
            >

                <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
                ></v-text-field>

                <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
                ></v-text-field>

                <v-btn 
                class="ma-2" 
                color="primary" 
                type="submit"
                dark
                >
                Login
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                

                <router-link to="/signup"> 
                    <v-btn Flat color="blue">Sign Up</v-btn>
                </router-link>
                
            </v-form>
          </div>
      </v-row>
  </v-container>
  </v-app>
</template>

<script>
export default {
data() {
      return {
          form: {
          email: null,
          password: null
        }
      }
    },
    created(){
        if(User.loggedIn()){
          this.$router.push({name: 'forum'})
        }
    },
    methods: {
      login(){
          User.login(this.form)
      }
    }
}

</script>

<style>

</style>