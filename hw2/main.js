let str ="*";
 while (str.length<=7){
     console.log(str+"\n");
     str+="*"
 }
let numbers = []

for (let i = 1; i <=100;i++){
    if (i % 15 === 0){
        numbers.push(i, "FizzBuzz")
    }else if (i % 3===0){
        numbers.push(i,'Fizz')
    }else if (i % 5===0){
        numbers.push(i,"Buzz")
    }else {
        numbers.push(i)
    }
}
console.log(numbers)