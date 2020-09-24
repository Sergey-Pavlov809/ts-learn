

class User {
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


const el = document.getElementById('content'),
names = ["zxc","ASD","qwe","dfg"],
users.names.map(name => new User(name,10,50))
el.innerHTML = users.map(user => user.toString).reduce((prev, cur) => prev + cur,'  ')

