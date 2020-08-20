class AppStorage {

    storageToken(token){
        localStorage.setItem('token', token);
    }
    
    storageUser(user){
        localStorage.setItem('user', user);
    }

    store(user, token){
        this.storageToken(token);
        this.storageUser(user);
    }

    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getUser(){
        return localStorage.getItem('user');
    }
}

export default AppStorage = new AppStorage();