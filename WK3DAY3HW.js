class Governor {
    constructor(name, age, politicalLeaning){
        this.name=name;
        this.age=age;
        this.politicalLeaning=politicalLeaning;
    }
serving(){};
veto(){};
enactment(){};
}


class Person{
    constructor(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
    }
}


class mailman extends Person{
    constructor(route,truckNum,...args){
        super(...args);
        this.route=route;
        this.truckNum=truckNum;
    }

    working(){
        console.log(`${this.name} is working.`)
    }
    onbreak(){
        console.log(`${this.name} is on break.`)
    }
    done(){
        console.log(`${this.name} has delivered all mail.`)
    }
}

class Chef extends Person{
    constructor(specialty,resterauntName,...args){
    super(...args);
    this.specialty=specialty;
    this.resterauntName=resterauntName;
    }
    cooking(){
        console.log(`${this.name} is on cooking.`)
    };
    prep(){
        console.log(`${this.name} is prepping to cook.`)
    }
}

const mail1= new mailman(105,220,'steven',55,"5'8");
const mail2= new mailman(98,206,'steven',32,"6'0");
const chef1= new Chef("Japanese","1 Dan",'Amori',45,"5'2");
const chef2= new Chef("Italian","Re'Alais",'Micheal',50,"6'3");
console.log(mail1)