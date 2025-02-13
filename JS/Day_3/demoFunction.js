function show(){
    console.log("Named function")
}
show();

const show1 = (a,b) =>{
    console.log("Arrow Function", a,b);
}
show1(2,3);


// immidiate invoke function

(function details(){
    console.log("students Details");
})();

let a = 10;

function outer(){
    let b = 20;
    function inner(){
        let c = 30;
        console.log("Inner Function" ,a,b,c);
    }
    inner();
}

outer();

let counter = 0;
function count(){
    counter++;

    console.log(counter);
}

count();
count();    
count();

function display(){
    console.log("Display" , counter);    
}

display();
console.log(counter)


// -------------------Closure------------------------------------

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
        
    }
}

const add = counter();
add();
add();
add();
