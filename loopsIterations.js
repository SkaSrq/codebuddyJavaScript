// level {1/2/3}


// level 1
// let n = 4;
// let output = "";
// for (let i=1; i<=n; i++){
//     let num = 1;
//     for(let j=1; j<=n-i; j++){
//         output+= "  ";
//     }
//     let limit = false;
//     for(let k=0; k<2*i-1; k++){
//         if(num>=i){
//             limit = true;
            
//         }
//         if(limit){
//            output+=num-- +" ";
//         }else{
//             output+=num+++" ";
//         }
//     }
//     output +="\n";
// }
// console.log(output);

// level 2
const getSum = (n)=>{
    let fibo= [];
    if(n<=0){
        return 0;
    }
    fibo[0] = 0;
    fibo[1] = 1;
    let sum = fibo[0] + fibo[1];
    for(let i=2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        sum += fibo[i];
    }
    return sum;
}
console.log(getSum(6));

// level 3
// const getArr=(users)=>{
//     const user_array = [];
//     for(const key in users){
//         for(let )
//     }
// }