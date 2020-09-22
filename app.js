var Man = /** @class */ (function () {
    //Name: String;
    //Age: number;
    //constructor(name: string, age: number){
    //    this.Name = name;
    //    this.Age = age;
    //}
    function Man(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    Man.prototype.toString = function () {
        return "Name: " + this.name + " Age: " + this.age + " Weight: " + this.weight;
    };
    return Man;
}());
;
var Sergey = new Man('Tom', 10, 50);
var Aleksandr = new Man('Alex', 20, 50);
var Mihail = new Man('Mihail', 30, 50);
var a = [];
a.push(Sergey);
a.push(Aleksandr);
a.push(Mihail);
var z = document.createElement("div");
var el = document.getElementById('content');
console.log(el);
console.log(("" + a[1]).toString());
//el.innerText = `${a[1]}`;
var div;
for (var i = 0; i <= a.length - 1; i++) {
    div = document.createElement('div');
    div.innerHTML = "<div>name ${a[i].toSting()}</div>";
    //console.log(el,element);
}
