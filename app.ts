

class Man {
    //Name: String;
    //Age: number;

    //constructor(name: string, age: number){
    //    this.Name = name;
    //    this.Age = age;
    //}

    constructor(public name: string, public age: number,  public weight: number){}

    toString(){
        return `Name: ${this.name} Age: ${this.age} Weight: ${this.weight}`
    }
};


const Sergey: Man = new Man('Tom', 10,50);
const Aleksandr: Man = new Man('Alex', 20,50);
const Mihail: Man = new Man('Mihail', 30,50)

let a: Man[] = [];

a.push(Sergey);
a.push(Aleksandr)
a.push(Mihail);
let z = document.createElement("div")
const el = document.getElementById('content');
console.log(el);
console.log(`${a[1]}`.toString());
//el.innerText = `${a[1]}`;
let div;
for(let i: number = 0; i <= a.length - 1; i++){
     div = document.createElement('div');

    div.innerHTML = "<div>name ${a[i].toSting()}</div>";
    //console.log(el,element);
}
 