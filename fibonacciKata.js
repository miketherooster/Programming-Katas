//BUD refactor

let fibbFunct = (n) => {
  let sum = [0 , 1];
  if (n < 1) {
    sum = [];
    console.log(`There are no numbers in the sequence.`);
  } else {  
    for (i = 2; i < n; i++) {
        let sumLen = sum.length;
      sum.push(sum[sumLen - 2] + sum[sumLen - 1]);
    }
  }
  console.log(sum);
  return sum;
};

fibbFunct(0);
console.log(`\n`);
fibbFunct(2);
console.log(`\n`);
fibbFunct(10);