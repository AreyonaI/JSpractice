class hamsters {
    constructor(hamName)
        {
            this.owner='';
            this.hamName=hamName;
            this.price=15;
        }
    wheelRun()
        {
            console.log('squeak squeak');
        }
    eatFood()
        {
            console.log('nibble nibble');
        }
    getPrice()
        {
            return (price);
        }
}

const hammy = new hamsters('Hammy');
console.log(hammy)

class person extends hamsters{
    constructor(name,hamName){
        super(hamName);
        this.name=name;
        this.age=0;
        this.height=0;
        this.weight=0;
        this.mood=0;
        this.hamsters=[];
        this.bankAccount=0;
    }
    getName(){
        return(this.name);
    }
    getAge(){
        return(this.age);
    }
    getWeight(){
        return(this.weight);
    }
    greet(){
        console.log(`Hello, ${this.name} how are you?`);
    }
    eat(){
        this.weight++;
        this.mood++;
        console.log(`Your weight is ${this.weight}`)
        console.log(`Your mood level is ${this.mood}`)
    }
    exercise(){
        this.weight--;
        console.log(`Your weight is ${this.weight}`)

    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
        console.log(`You have gotten older, Happy Birthday, ${this.name}!`)
        console.log(`Your age is ${this.age}`)
        console.log(`Your height is ${this.height}`)
        console.log(`Your weight is ${this.weight}`)
        console.log(`Your mood level is ${this.mood}`)
        console.log(`Your bank account is at $${this.bankAccount}`)
    }
    buyhamsters(hamster){
        this.bankAccount=this.bankAccount-=this.price;
        this.mood+=10;
        this.hamsters.push(hamster);
        console.log(`Congrats on your new pet! Your bank account is at ${this.bankAccount}.`)


    }

}

const Vio = new person('Vio')

Vio.ageUp();
Vio.buyhamsters();


console.log(Vio);

class Dinner {
    constructor(appetizer,entree,dessert){
    this.appetizer=appetizer;
    this.entree=entree;
    this.dessert=dessert;
    }

}

class Chef{//Factory for Dinner class
    constructor(chefName){
        this.chefName=chefName;
        this.dinners=[];
    }
    makeDinner(appetizer,entree,dessert){
        const newDinner = new Dinner(appetizer,entree,dessert);
        this.dinners.push(newDinner);      
    
    }
}
 const Vienna = new Chef('Vienna')

 Vienna.makeDinner("Pimento Dip w/ Crackers and Fresh Pickled Peppers","Salmon croquettes w/ Honey Lemon Glaze over Wild Rice", "Strawberry-Lemon Cinnamon Roll Bake");
 Vienna.makeDinner("Kale salad w/ Apples and Pear Vinegrette and Breadsticks","Cajun Shrimp stuffed Lobster Tails", "Grilled Peachs w/ Vanilla Icecream and Crumble");
 Vienna.makeDinner("Homemade Corn Tortilla Chips w/ Guac and Mango Salsa and Corn Salsa","Carne Asada Tacos", "Rice pudding and Mexican Hot Chocolate Cupcakes");
 console.log(Vienna)