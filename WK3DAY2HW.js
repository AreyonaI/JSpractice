class Cat{
    constructor(name,color,age)
    {
        this.name= name;
        this.color =color;
        this.age= age;
        this.sleep= false;    
    }
sleeping()
    {
        this.sleep= true;
        if (this.sleep===false)
            {
                console.log('Surprise surprise, ' + this.name +'is awake');
            }
        else
            {
                console.log(this.name +' is asleep...zzz')
            }
    }
eating()
    {
        if(this.sleep===false) 
            {
                console.log(this.name +' is eating.');
            }
    }
playing(toy)
    {
        if(this.sleep===false)
            {
                console.log(this.name + ' is playing with ' + toy);
            }
    }
}

const Sirius = new Cat('Sirius','black/white',1);
const Lennord = new Cat('Lennord','brown/black',4);


Sirius.sleeping();
Sirius.playing('a toy mouse');
Sirius.eating();

Lennord.sleeping();
Lennord.playing();
Lennord.eating();

console.log(Sirius);
console.log(Lennord);









class Pirate{

constructor(crewName,shipName,bounty,captain)
    {
        this.shipName=[shipName,`The captain is ${captain}`,`The crew name is ${crewName}`,`Bounty: ${bounty}`];
        this.sail=true;
    }
sailing()
    {
        this.sail=false;
        console.log('The ' + this.crewName+ ' are taking a break.');  
    }
caputured(){};
loop(){
    for (let i = 1; i < this.shipName.length; i++) {
        console.log(this.shipName[i]);

}
};

}
const thousandSunny = new Pirate('Straw Hat Pirates','Thousand Sunny',8816001000,'Luffy');
const  polarTang = new Pirate('Heart Pirates',' Polar Tang','Traglafar Law', 3000000500);
const  queenMamaChanter = new Pirate('Big Mom Pirates',' Queen Mama Chanter','Big Mom',10121500000);

thousandSunny.loop();
polarTang.loop();
queenMamaChanter.loop();
