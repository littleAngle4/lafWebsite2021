// function stringMask(string, digit) {
//     try {
//         let model = {};
//         let note =
//             "Please email us on rohansolse@gmail.comfor NPM related suggestions/bugs (with input).";
//         if (!string || digit == undefined) {
//             model.status = "failure";
//             model.response =
//                 "Ethier string, digit or both are missing or misplaced.";
//             model.NOTE = note;
//             return model;
//         }
//         if (typeof string == "number") {
//             string = JSON.stringify(string);
//         }
//         if (typeof digit == "string") {
//             digit = parseInt(digit);
//         }
//         if (string == "") {
//             model.status = "failure";
//             model.response = "Blank string cannot be processed";
//             model.NOTE = note;
//             return model;
//         }
//         if (string.length <= digit) {
//             model.status = "failure";
//             model.response =
//                 "Entered string length cannot be equal to greater than the digit count";
//             model.NOTE = note;
//             return model;
//         }

//         if (digit == 0) {
//             let data = [];
//             if (string.length < 3) {
//                 model.status = "failure";
//                 model.response =
//                     "Entered strings length is too less for this operation.";
//                 model.NOTE = note;
//                 return model;
//             }
//             if (string.length == 3) {
//                 model.status = "success";
//                 model.response = string.charAt(0) + "X" + string.charAt(2);
//                 return model;
//             }
//             let unmaskNo = parseInt(string.length / 35 * 10);
//             for (let i = 0; i < unmaskNo; i++) {
//                 data.push(string.charAt([i]));
//             }
//             let secondunMask = string.length - unmaskNo * 2;
//             for (let i = 0; i < secondunMask; i++) {
//                 data.push("X");
//             }
//             let remainingStr = string.slice(
//                 unmaskNo + secondunMask,
//                 string.length
//             );
//             for (let i = 0; i < unmaskNo; i++) {
//                 data.push(remainingStr.charAt([i]));
//             }
//             data = data.join("");
//             model.status = "success";
//             model.response = data;
//             return model;
//         } else if (digit > 0) {
//             let data = [];
//             let unmaskNo = string.length - digit;
//             let unMask = string.slice(unmaskNo, string.length);
//             if (unMask.includes(" ")) {
//                 model.status = "failure";
//                 model.response = "unmasking value can not be blank";
//                 model.NOTE = note;
//                 // console.log(model)
//                 return model;
//             }
//             for (let i = 0; i < unmaskNo; i++) {
//                 data.push("X");
//             }
//             data.push(unMask);
//             data = data.join("");
//             model.status = "success";
//             model.response = data;
//             // console.log(model)
//             return model;
//         } else {
//             if (string.length <= digit * -1) {
//                 model.status = "failure";
//                 model.response =
//                     "Entered string length cannot be equal to greater than the digit count";
//                 model.NOTE = note;
//                 return model;
//             }
//             let data = [];
//             digit = digit * -1;
//             let maskNo = string.length - digit;
//             let unmaskNo = string.length - maskNo;
//             for (let i = 0; i < unmaskNo; i++) {
//                 data.push(string.charAt([i]));
//             }
//             for (let i = 0; i < maskNo; i++) {
//                 data.push("X");
//             }
//             data = data.join("");
//             model.status = "success";
//             model.response = data;
//             // console.log(model)
//             return model;
//         }
//     } catch (e) {
//         let model = {};
//         model.status = "failure";
//         model.response = "Something went wrong, Please check the syntax.";
//         model.NOTE = note;
//         return model;
//     }
// }

// module.exports = stringMask;
