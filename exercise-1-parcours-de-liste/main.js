// // exercise 1
// const elements = ["a", "b", "c", "d"];

// // function listOfElement(element, i = 0) {
// //   console.log(elements[i]);
// //   if (i < elements.length - 1) {
// //     listOfElement(element, i + 1);
// //   }
// // }
// // listOfElement(elements,0);

// function listOfElement(e) {
//   if (e.length > 0) {
//     console.log(e[0]);
//     e.shift();
//     listOfElement(e);
//   }
// }

// listOfElement(elements.slice());
// console.log(elements);

// // exercise 2

// const myString = "ceci est un test";
// const stringReverse = myString
//   .split("")
//   .reverse()
//   .join("");
// console.log(stringReverse);

// //exercise 3 binary tree

// const node7 = {
//   leftChildren: null,
//   rightChildren: null,
//   value: 7
// };

// const node6 = {
//   leftChildren: null,
//   rightChildren: null,
//   value: 6
// };

// const node5 = {
//   leftChildren: null,
//   rightChildren: null,
//   value: 5
// };

// const node4 = {
//   leftChildren: null,
//   rightChildren: null,
//   value: 4
// };

// const node3 = {
//   leftChildren: node6,
//   rightChildren: node7,
//   value: 3
// };

// const node2 = {
//   leftChildren: node4,
//   rightChildren: node5,
//   value: 2
// };

// const node1 = {
//   leftChildren: node2,
//   rightChildren: node3,
//   value: 1
// };

// function browseNode(node) {
//   if (node) {
//     if (node.leftChildren) {
//       console.log(node.leftChildren.value);
//     }
//     if (node.rightChildren) {
//       console.log(node.rightChildren.value);
//     }
//     if (node.leftChildren) {
//       browseNode(node.leftChildren);
//     }
//     if (node.rightChildren) {
//       browseNode(node.rightChildren);
//     }
//   }
//   return null;
// }

// function browse(node) {
//   if (node) {
//     console.log(node.value);
//     browseNode.node;
//   }
// }

// browse(node1);
// browseNode(node1)

const categories = [
  { name: "tech", parent: null },
  { name: "hot_right_now", parent: "tech" },
  { name: "upcomming_releases", parent: "tech" },
  { name: "gadgets", parent: "tech" },
  { name: "news", parent: null },
  { name: "social", parent: "startups" },
  { name: "europe", parent: "news" },
  { name: "asia", parent: "news" },
  { name: "events", parent: "news" },
  { name: "startups", parent: null },
  { name: "funding", parent: "startups" },
  { name: "unicorns", parent: "startups" },
  { name: "venture_capital", parent: "funding" },
  { name: "crowdfunding", parent: "funding" },
  { name: "usa", parent: "news" }
];

// function exo(categories, parent) {
//   return categories
//     .filter(function(category) {
//       return category.parent === parent;
//     })
//     .reduce(function(acc, catego) {
//       acc[catego.name] = exo(categories, catego.name);
//       return acc;
//     }, {});
// }
// console.log(exo(categories, "startups"));

function test(categories, parent) {
  categories.filter(function(category) {
    return category.parent === parent;
  });
}
console.log(test(categories, null))
