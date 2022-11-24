//Que 5: Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

var repeatedNumberArr = new Array();
for(i=1; i<=100; i++) {
    if(i % 11 == 0) {
            repeatedNumberArr.push(i);
    }
}

console.log(repeatedNumberArr);