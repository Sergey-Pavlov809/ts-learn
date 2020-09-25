class User {

    constructor(public name: string, public age: number,  public weight: number){}

    toString(){
        return `Name: ${this.name} Age: ${this.age} Weight: ${this.weight}`
    }
};

const el = document.getElementById( 'content' ),
    names = ['Alex', 'Tom', 'Dina', 'Emily', 'Andrew', 'Dora'],
    users = names.map( name => new User(name,
        
        Math.round( 17.5 + Math.random() * 53 ),
        Math.round( 49.5 + Math.random() * 51 ) ) );
        
    
el.innerHTML = users.map( user => user.toString() )
        .reduce( (prev, cur) => prev + cur, '');



let opInp = document.createElement('form');
opInp.setAttribute("id", "inpt")
document.body.appendChild(opInp);


let inp = document.createElement('input');
inp.setAttribute("id", "inpVal");
document.body.querySelector("form").appendChild(inp);


let but1 = document.createElement('input');
but1.setAttribute("type", "radio");
but1.setAttribute("id", "btn1");
but1.setAttribute("name", "rad");
but1.addEventListener("change",handlerBtn1);
//but1.setAttribute("checked", "");
document.body.querySelector("form").appendChild(but1);

let but2 = document.createElement('input');
but2.setAttribute("type", "radio");
but2.setAttribute("value", "zxc");
but2.setAttribute("name", "rad");
but2.addEventListener("change",handlerBtn2);
document.body.querySelector("form").appendChild(but2);


function handlerBtn1(e){
    if (document.getElementById("inpVal").value != ""){
    let filtredList = users.filter(user => user.age > document.getElementById("inpVal").value);
    let reduceList = filtredList.map( user => user.toString() )
        .reduce( (prev, cur) => prev + cur, '');
    console.log(reduceList);
    el.innerHTML = `${reduceList}`
    //console.log(document.getElementById("inpVal").value)
        //document.body.appendChild(upul);
    }
    }


function handlerBtn2(e){
    if (document.getElementById("inpVal").value != ""){
        let filtredList = users.filter(user => user.age < document.getElementById("inpVal").value);
        let reduceList = filtredList.map( user => user.toString() )
            .reduce( (prev, cur) => prev + cur, '');
        console.log(reduceList);
        el.innerHTML = `${reduceList}`
        //console.log(document.getElementById("inpVal").value)
            //document.body.appendChild(upul);
    }
    }
    
}

