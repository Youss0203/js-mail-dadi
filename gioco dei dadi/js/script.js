

 const userNumber = Math.floor(Math.random() * 6) + 1;
 const computerNumber = Math.floor(Math.random() * 6 )+ 1;

 if (userNumber > computerNumber) {
   console.log(`user win`);
 } else if (computerNumber > userNumber) {
   console.log(`computer win`);
 }