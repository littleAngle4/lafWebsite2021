// function name() {
//     let data = "sam";
//     console.log(data);
// }
// name();

[1, 2, 3].push(4);
[1, 2, 3].pop();
[1, 2, 3].shift();
[1, 2, 3].unshift(0);
["a", "b"].concat("c");
["a", "b", "c"].join("-");
["a", "b", "c"].slice(1);
["a", "b", "c"].indexOf("b");
["a", "b", "c"].includes("c");
[3, 5, 6, 8].find(n => n % 2 === 0);
[2, 4, 3, 5].findIndex(n => n % 2 !== 0);
[3, 4, 8, 6].map(n => n * 2);
[1, 4, 7, 8].filter(n => n % 2 === 0);
[2, 4, 3, 7].reduce((acc, cur) => acc + cur);
[2, 3, 4, 5].every(x => x < 6);
[3, 5, 6, 8].some(n => n > 6);
[1, 2, 3, 4].reverse();
[3, 5, 7, 8].at(-2);
