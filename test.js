// // let text = "Mr Blue has a blue house and a blue car.";
// // let variable = "blue";
// // text = text.replace(new RegExp(variable, "gi"), "red");
// // console.log(text);

// // function generatePaginationQuery(query, sort, nextKey) {
// //     const sortField = sort == null ? null : sort[0];

// //     function nextKeyFn(items) {
// //         if (items.length === 0) {
// //             return null;
// //         }

// //         const item = items[items.length - 1];

// //         if (sortField == null) {
// //             return { _id: item._id };
// //         }

// //         return { _id: item._id, [sortField]: item[sortField] };
// //     }

// //     if (nextKey == null) {
// //         return { paginatedQuery: query, nextKeyFn };
// //     }

// //     let paginatedQuery = query;

// //     if (sort == null) {
// //         paginatedQuery._id = { $gt: nextKey._id };
// //         return { paginatedQuery, nextKey };
// //     }

// //     const sortOperator = sort[1] === 1 ? "$gt" : "$lt";

// //     const paginationQuery = [
// //         { [sortField]: { [sortOperator]: nextKey[sortField] } },
// //         {
// //             $and: [
// //                 { [sortField]: nextKey[sortField] },
// //                 { _id: { [sortOperator]: nextKey._id } }
// //             ]
// //         }
// //     ];

// //     if (paginatedQuery.$or == null) {
// //         paginatedQuery.$or = paginationQuery;
// //     } else {
// //         paginatedQuery = { $and: [query, { $or: paginationQuery }] };
// //     }

// //     return { paginatedQuery, nextKeyFn };
// // }

// // let data = {
// //     type: "equal",
// //     SAL_VALUE: "sample"
// // };

// // let keys = Object.keys(data);
// // let values = Object.values(data);

// // console.log(keys, values);

// // const foundIndex = keys.findIndex(key => key === "type");
// // const dataObject = {};
// // if (foundIndex === 0) {
// //     dataObject.columeName = keys[1];
// //     dataObject.columeValue = values[1];
// // } else {
// //     dataObject.columeName = keys[0];
// //     dataObject.columeValue = values[0];
// // }

// // console.log(dataObject);
// // console.log(foundIndex);

// // const data = {};
// // data.type = "equal";
// // console.log(data);

// let myArray = [
//         { id: 0, name: "Jhon" },
//         { id: 1, name: "Sara" },
//         { id: 2, name: "Domnic" },
//         { id: 3, name: "Bravo" }
//     ],
//     //Find index of specific object using findIndex method.
//     objIndex = myArray.findIndex(obj => obj.id == 2);

// console.log("objIndex: ", objIndex);
// //Log object to Console.
// console.log("Before update: ", myArray[objIndex]);

// //Update object's name property.
// myArray[objIndex].name = "Laila";

// //Log object to console again.
// console.log("After update: ", myArray[objIndex]);
