function first(a,b){ //one way
    let type = typeof a;
    console.log("Type of a is ",type);

}
var second = function(){ //other way can also use 'let' or 'const'
console.log("I am second");
};

var third = ()=>{ //another way
console.log("I am third");
};

//can be executed in the same way. 
first(10,20);
first("Hello","hello");
first(second,third);
first({'name':'Udhhav'});
first([1,2,3]);
//second();
//third();