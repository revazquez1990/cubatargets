import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login (data) {
        axios.post('/api/auth/login', data)
        .then(res => this.responseAfterLogin(res.data)) 
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(data){
        const access_token = data.access_token,
        username = data.user;

        if(Token.isValid(access_token)) {
            AppStorage.store(username, access_token);
            window.location = '/forum'
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if (storedToken){
            return Token.isValid(storedToken) ? true : this.logout();
        }
        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logout(){
        AppStorage.clear();
        window.location = '/login'
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser();
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub;
        }
    }

    own(id){
        return this.id() == id;
    }

    admin(){
        return this.id() == 25 || 23 || 12 || 7 || 8 || 5 || 6 || 22;
    }

}

export default User = new User();