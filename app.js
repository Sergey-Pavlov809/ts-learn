var User = /** @class */ (function () {
    //Name: String;
    //Age: number;
    //constructor(name: string, age: number){
    //    this.Name = name;
    //    this.Age = age;
    //}
    function User(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    User.prototype.toString = function () {
        return "Name: " + this.name + " Age: " + this.age + " Weight: " + this.weight;
    };
    return User;
}());
;
var el = document.getElementById('content'), names = ["zxc", "ASD", "qwe", "dfg"], users, names, map;
(function (name) { return new User(name, 10, 50); });
el.innerHTML = users.map(function (user) { return user.toString; }).reduce(function (prev, cur) { return prev + cur; }, '  ');
