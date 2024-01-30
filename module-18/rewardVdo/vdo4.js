//frequency array:
let frequencyArray = [0,0,0,0,0,0,0,0,0,0]
const sampleNumber = '922345225561178229110223';
console.log(sampleNumber.length);
// 9-->2 bar,8-->1 bar,7-->1 bar,6-->1 bar,5-->3 bar,4-->1 bar,3-->2 bar,2-->8 bar,1-->4 bar,0-->1 bar

// let maxOccurance = frequencyArray[0];
// let maxOccuranceIndex = 0
// for(let i =0;i<sampleNumber.length;i++){
//     // let currentOccurance = sampleNumber[i];
//     // if(currentOccurance>maxOccurance){
//     //     maxOccurance = currentOccurance;
//     //     maxOccuranceIndex = i;
//     // }
//     console.log(sampleNumber[i]);
// }
// console.log(maxOccurance,maxOccuranceIndex);

const serialArray = [55,66,77,88,22,11,33,44];
const target = 22;
while(true){
    const firstElement = serialArray[0];
    if(firstElement==target){
        break;
    }
    const extractElement = serialArray.shift();
    serialArray.push(extractElement);
}
console.log(serialArray);