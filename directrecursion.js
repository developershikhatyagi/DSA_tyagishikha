//==========Direct-Recursion=Data=Structure=============//

function apple(x){
    console.log(x);
   if(x<10){
    apple(x+1);
   }
}
let data = 0;
apple(data);

function factorial(item){
   if(item==0){
    return 1
   }
   return item*factorial(item-1);
//    return item*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1)*factorial(1-1)
}
let data1 = 5;
console.log(factorial(data1));