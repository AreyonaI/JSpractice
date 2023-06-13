
class Meat{
    constructor(type,weight,price,unit){
        this.type=type;
        this.weight=weight;
        this.price=price;
        this.unit=weight + unit;
    }
    perPound(){
        let x = this.price/this.weight;
        console.log(x.toFixed(2));

      }

}
const groundBeef = new Meat('beef',1,5.50, 'lbs');
const groundTurkey = new Meat('turkey','2lb',6.50);
const skirtSteak = new Meat('beef','3.4lb',10.80);

console.log(groundBeef)

class Dairy{
    constructor(name, ounces, price){
        this.name=name;
        this.ounces=ounces;
        this.price=price;
    }

}
const milk = new Dairy('Whole Milk','16oz',5.50);
const sourCream = new Dairy('50% Sour Cream','6oz',6.50);
const coffeeCreamer = new Dairy('Caramel Creamer','3.4oz',10.80);

console.log(milk)

class Vegtable{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    outOfStock(){
        console.log(this.name+' is out of stock');
    }
}


const cucumber = new Vegtable('cucumber',0.30);
const ginger = new Vegtable('ginger',1.60);
const bellPepper= new Vegtable('pepper',3.89);

cucumber.outOfStock();
groundBeef.perPound();






//grocery list 
//min 3 classes
//min 3 obj per class
// min 2 methods 

/*class Vegetables{
    constructor(name, price, units, weight){
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.units = units;
    }
  }
  
  
  class Dairy{
    constructor(name, price, units, weight){
      this.name = name;
      this.price = price;
      this.weight = weight;
      this.units = units;
    }
  }
  
  class Meat{
    constructor(name, price, units, weight){
      this.name = name;
      this.price = price;
      this.weight = weight;
      this.units = units;
    }
    perPound(){
        let x = this.price/this.weight;
        console.log(x.toFixed(2));

      }
  }
  
 
  
  const veg1 = new Vegetables('broccoli',4, 5, 'lbs' );
  const milk = new Dairy('Whole Milk', 4 ,1, 'gallon');
  const chick = new Meat('Chicken', 20.99 , 'lbs', 8.20);
  
  chick.perPound();
  console.log(veg1);
  console.log(milk);
  console.log(chick);
  
  
  console.log(veg1.name, veg1.price);
  
  */
