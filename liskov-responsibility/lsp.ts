class BaseBird{
    makeSound(){
        console.log('base bird sound')
    }

    fly(){}
}

class Bird extends BaseBird{
    fly(){
        console.log('bird fly')
    }

    makeSound(){
        console.log('bird sound')
    }
}


class Sparrow extends Bird{
    fly(){
        console.log('sparrow fly')
    }

    makeSound(){
        console.log('sparrow sound')
    }
}


class Pengiun extends BaseBird{
   

    makeSound(){
        console.log('Pengiun sound')
    }
}


function makeBirdFly(bird:Bird){
    bird.fly()
}



makeBirdFly(new Bird())

