//let x=15;
//console.log(x); 
//let a=7;
//console.log(a);
//let names=["john","jim","lucy"]
//console.log(names);

//let x= 12;
//let a= 78;
//if (x===12 && a===78) {
//    let sum=x+a;
//console.log(sum);
//};

/*let wood=23;
if (wood>40){
    console.log("You can build a tree house!");
}
else if (wood>20 && wood<40){
    console.log("build a table")

}
else{
    console.log("Its a no go");
}






let username="Admin";
let password="Pass614";

if (username==="Admin" && password==="Pass614"){
console.log("Access Granted");
} 
else{
    console.log("Access denied");
}

let num=0;

if (num>0 && num>=100){
    console.log("good");
}

else if(num >0 && num<100){
    console.log("alright");
}

else{
    console.log("bad");
}

for(i = 5;/*initialization*i<=15;condition;i+=5increment increase){
    console.log(i);
}
for(i=0; i< array.length; i++) {
    const elemnet=array[index];
}
*/

/*
let x=5

while(x<=15){
    console.log(x);
    x+=2;
}

//array
const fruits =["apple","orange","cherry", "tomato"]
console.log(fruits);
console.log(fruits[3]);
console.log(fruits.length);

for (i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

let z="HAPPY 4TH OF JULY"
for (i=0; i<z.length; i++){
    console.log(z[i])
}



let y="Steve"
let o=" Carlson"
let names = y+o

function sayHello(names){
    console.log( "Hello "+names+"!");
}
sayHello(names)*/
/*
let n1=24;
let n2=77;

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 7);
}

console.log(areBothEven(n1,n2));

let width=18;
let height=8;

function computeArea(width,height){
    return (width*height);

}

console.log("The area of a rectangle with a width of "+width+" and a height of "+height+" is "+computeArea(width, height)+" square units.")
*/
/*
//object
const closet ={
    shirts: 'blue',
    black: "black",
    dresses: 'purple'
};

console.log(closet.dresses)

closet.shoes="adidas"
console.log(closet)
*/
const inventory=[// an array
    {
        brand:"Chevy",// an instance
        model:"caprise",
        year:1986
    },
    {
        brand:"Toyota",
        model:"camry",
        year:2015
    }   
]

inventory[0].color="blue";
console.log(inventory[0])


/*class Movie {
    constructor(title,rating,starttime)/*parameters{

        this.title = title;//properties
        this.rating= rating;
        this.starttime = starttime;
    }
    start(){ //this is a method
        this.begun = true;
        console.log('This movie has started');
    }
    
}
const TENE = new Movie("TENET","18+","8:45pm")//Created a new object called TENET //instatiate the class

console.log(TENET)

TENET.start();// ObjectName.Method(); is how to call the method

*/











class Movie {
    constructor(title,rating,starttime)/*parameters*/{

        this.title = title;//properties
        this.rating= rating;
        this.starttime = starttime;
    }
  
}
const TENET = new Movie("TENET","18+","8:45pm")//Created a new object called TENET
const theLittleMermaid = new Movie("The Little Mermaid","E","2:15pm")
console.log(theLittleMermaid)
console.log(TENET)

