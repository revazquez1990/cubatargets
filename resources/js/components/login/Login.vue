<template>
<v-app id="inspire">
         
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    label="E-mail"
                    name="login"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="form.email"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="form.password"
                    required
                  ></v-text-field>
                <v-card-actions>
                <v-spacer></v-spacer>
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
              </v-card-actions>
                </v-form>
              </v-card-text>
              
            </v-card>
  </v-app>
  <!-- <v-app>
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
  </v-app> -->
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
          console.log('entra aqui !!!');
          User.login(this.form)
      }
    },
    
}

</script>

<style>

</style>