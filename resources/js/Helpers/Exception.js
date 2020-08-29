import User from './User';

class Exception {
    
    handle(error){
        console.log('entra aqui !!');
        console.log(error.response.data);
        this.isExpired(error.response.data.error);
    }

    isExpired(error){
        console.log(error)
        if(error == 'token is expired'){
            console.log('entra al if !!');
            User.logout();
        }
    }
}

export default Exception = new Exception();
