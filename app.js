var User = /** @class */ (function () {
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
var el = document.getElementById('content'), names = ['Alex', 'Tom', 'Dina', 'Emily', 'Andrew', 'Dora'], users = names.map(function (name) { return new User(name, Math.round(17.5 + Math.random() * 53), Math.round(49.5 + Math.random() * 51)); });
el.innerHTML = users.map(function (user) { return user.toString(); })
    .reduce(function (prev, cur) { return prev + cur; }, '');
var opInp = document.createElement('form');
opInp.setAttribute("id", "inpt");
document.body.appendChild(opInp);
var inp = document.createElement('input');
inp.setAttribute("id", "inpVal");
document.body.querySelector("form").appendChild(inp);
var but1 = document.createElement('input');
but1.setAttribute("type", "radio");
but1.setAttribute("id", "btn1");
but1.setAttribute("name", "rad");
//but1.setAttribute("checked", "");
document.body.querySelector("form").appendChild(but1);
var but2 = document.createElement('input');
but2.setAttribute("type", "radio");
but2.setAttribute("value", "zxc");
but2.setAttribute("name", "rad");
but2.addEventListener("change", handlerBtn);
document.body.querySelector("form").appendChild(but2);
function handlerBtn(e) {
    if (document.getElementById("btn1").checked = true) {
        var filtredList = users.filter(function (user) { return user.age > document.getElementById("inpVal").value; });
        var reduceList = filtredList.map(function (user) { return user.toString(); })
            .reduce(function (prev, cur) { return prev + cur; }, '');
        console.log(reduceList);
        el.innerHTML = "" + reduceList;
        console.log(document.getElementById("inpVal").value);
        //document.body.appendChild(upul);
    }
    else {
        var filtredList = users.filter(function (user) { return user.age < document.getElementById("inpVal").value; });
        var reduceList = filtredList.map(function (user) { return user.toString(); })
            .reduce(function (prev, cur) { return prev + cur; }, '');
        console.log(reduceList);
        el.innerHTML = "" + reduceList;
        console.log(document.getElementById("inpVal").value);
        //document.body.appendChild(upul);
    }
}
