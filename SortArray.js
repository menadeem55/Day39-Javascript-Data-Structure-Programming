//Que 2: Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

function getRandomNumber() {
    return Math.floor(Math.random()*999)+100;
}
randomNumArr = new Array();
let num = 10;

for(i = 0; i < num; i++) {
    randomNumArr.push(getRandomNumber());
}

console.log("Random Number is :"+randomNumArr);

for(i = 0; i < num; i++) {
    for(j = 0; j < num; j++) {
        if(randomNumArr[i]<=randomNumArr[j]){
            temp = randomNumArr[i];
            randomNumArr[i] = randomNumArr[j];
            randomNumArr[j] = temp;
        }
    }
}

console.log("Sorted Random Number Array is :" + randomNumArr);
console.log("Second Smallest Number is : " +randomNumArr[num-9]);
console.log("Second Largest Number is : " +randomNumArr[num-1]);