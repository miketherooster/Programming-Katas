let fibbFunct = (n) => {
    if (n <= 1) {
        console.log("here");
        return [10];
    }
    else if (n === 1) {
        console.log("here2");
        return [0, 1];
    }

    else {
        //sum last two values
        console.log("here3");
        let prev2Num = 0;
        let prevNum = 1;
        let sum = [prev2Num, prevNum];
        console.log(sum);
        /**Shift previous numbers to variables prev2Num and prevNum
         * sum.length - 1 = prev2Num 
         * sum.length = prevNum
         * */
        for (i = 2; sum.length < n; i++) {
            sum.push(( prev2Num + prevNum));
            console.log(`this is sum after push: ${sum}`)
            prev2Num = sum[(i -1)];
                console.log(`this is value at prev2num: ${prev2Num}`)
            prevNum = sum[i];
                console.log(`this is value at prevnum: ${prevNum}`)
            console.log(sum);    
        }
        return sum
    };

   
};

fibbFunct(4);
// fibbFunct(7);
// fibbFunct(1);
