// level {1/2/3}

// level 2
//1 
function removeEvenNumbers(arr){
    // for(let i=0; i<arr.length; i++){
        
    // }
    return arr.filter(n => n%2 !==0);
}
const oddNumber = removeEvenNumbers([1, 3, 4, 6, 7, 8]);
console.log(oddNumber);
// 2
function getUpperCaseVowels(str){
    let n = str.length;
    let result = ""
    for(let i=0; i<n; i++) {
        if(
            str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"
        ){
            result+= str[i].toUpperCase();
        }
        else{
            result+= str[i];
        }
    }
    return result;
}
let input = "Elie";
console.log(getUpperCaseVowels(input));

// 3
function getMax (arr){
    let max = Number.MIN_VALUE;
    for(let i=0; i<arr.length; i++){
        if(max< arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([1, 3, 4, 6, 7, 8, 2, 5]));