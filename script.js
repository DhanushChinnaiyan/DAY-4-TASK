




var obj1={name:"person1",age:5}
var obj2={age:5,name:"person1"}
var a=JSON.stringify(obj1);
var b=JSON.stringify(obj2);


var c = function(a,b){
    var aKeys=Object.keys(a);
    var bKeys=Object.keys(b);

for(let objKey of aKeys){
    if(a[objKey]===b[objKey]){
        return true;
    }
  }

}

 console.log(c(a,b));


 //OUT PUT: TRUE
