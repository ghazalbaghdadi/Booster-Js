/** @format */

// using if, else if, else write code for below conditions:
/*
    if Shaden is a mentor print out "Hi Shaden, you are a mentor"
    if Shaden is a student print out "Hi Shaden, you are student"
    if Shaden is a teacher print out "Hi Shaden, you are a teacher"
    if she is none of above, print out "Hi Shaden, you should join APS"
*/

let yourName = "Shaden";
let yourRole = "mentor";

//your code here//
if (yourRole === "mentor") {
  console.log(`Hi ${yourName} , you are a ${yourRole}`);
} else if (yourRole === "student") {
  console.log(`Hi ${yourName} , you are a ${yourRole}`);
} else if (yourRole === "teacher") {
  console.log(`Hi ${yourName} , you are a ${yourRole}`);
} else {
  console.log(`Hi ${yourName} ,  you should join APS`);
}

///

/* 
EXPECTED RESULT
---------------
Hi Shaden, you are a mentor.
*/

