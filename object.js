var shoppingcart ={
    book: 3,
    sunglass: 1, 
    keyboard:5,
    mouse: 1,
    pen :25,
    shoes: 2
}

const keys = Object.keys(shoppingcart);
console.log(keys);

const values = Object.values(shoppingcart);
console.log(values);

for(var i=0<keys.length; i++){
    console.log(keys[i])
}

var shoppingIteems =['book','sunglass','shoes','pen'];
var friendsAge =[12, 45,78, 32, 14];
var friendsAge ={
    rahim: 12,
    samad : 45,
    karim :78,
    jamal:32,
    robi :14
}