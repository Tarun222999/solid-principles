class BaseUser{
    getRole(){
        console.log('user role')
    }



}

class User{


    getAcessLevel(){
        console.log('user access level')
    }


  

}


class Admin extends User{
   
    getAcessLevel(){
        console.log('ADMIN access level')
    }


    getRole(){
        console.log('admin role')
    }
}

class Manger extends User{
    getAcessLevel(){
        console.log('Manger access level')
    }


    getRole(){
        console.log('Manger role')
    }
}


class Customer extends BaseUser{

    getRole(): void {
        console.log('customer role')
    }
}


function getRole(user:BaseUser){
    user.getRole()
}


function getUserAcessLevel(user:User){
    user.getAcessLevel()
}





getRole(new Customer())

getUserAcessLevel(new Admin())