//TODO: Refactor

let fibbFunct = (n) => {
    let sum;
    if (n < 1) {
        // console.log("here");
            sum = [];
            console.log(sum);
         console.log(`There are no numbers in the sequence.`);
    }
    else if (n === 1) {
        // console.log("here");
            sum = [0];
         console.log(sum);
    }
    /**  else if (n === 2) {
    *    console.log("here2");
    *     sum = [0, 1];
    *    console.log(sum);
    *   }
    */
    else {
        //sum last two values
        // console.log("here3");
        let prev2Num = 0;
        let prevNum = 1;
             sum = [prev2Num, prevNum];
        console.log(sum);
        /**Shift previous numbers to variables prev2Num and prevNum
         * sum.length - 1 = prev2Num 
         * sum.length = prevNum
         * */
        for (i = 2; sum.length < n; i++) {
            sum.push(( prev2Num + prevNum));
            console.log(`this is sum after push: ${sum}`);
            prev2Num = sum[(i -1)];
                console.log(`this is value at prev2num: ${prev2Num}`);
            prevNum = sum[i];
                console.log(`this is value at prevnum: ${prevNum}`);
            console.log(sum);    
        }
        // return sum
    }

    return sum;
   
}

fibbFunct(4);
console.log(`\n`);
fibbFunct(7);
console.log(`\n`); 
fibbFunct(0);
console.log(`\n`);
fibbFunct(2);
