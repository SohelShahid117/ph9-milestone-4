let num =1 ;
let sum = 0
while(num<=10){
    console.log(num);
    sum = sum + num;
    console.log("sum =" ,sum);
    if(num%2 === 0){
        console.log("even number is ", num);
    }

    if(num%2 !== 0){
        console.log("odd number is ", num);
    }
    num++;
   
}