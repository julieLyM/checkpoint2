// exercise 1
const elements = ["a", "b", "c", "d"];

function listOfElement(element, i = 0) {
  console.log(elements[i]);
  if (i < elements.length - 1) {
    listOfElement(element, i + 1);
  }
}
listOfElement(elements);

// exercise 2

const myString = "ceci est un test";
const stringReverse = myString
  .split(/(?:)/u)
  .reverse()
  .join("");
console.log(stringReverse);

//exercise 3 binary tree

const node7 = {
  leftChildren: null,
  rightChildren: null,
  value: 7
};

const node6 = {
  leftChildren: null,
  rightChildren: null,
  value: 6
};

const node5 = {
  leftChildren: null,
  rightChildren: null,
  value: 5
};

const node4 = {
  leftChildren: null,
  rightChildren: null,
  value: 4
};

const node3 = {
  leftChildren: node6,
  rightChildren: node7,
  value: 3
};

const node2 = {
  leftChildren: node4,
  rightChildren: node5,
  value: 2
};

const node1 = {
  leftChildren: node2,
  rightChildren: node3,
  value: 1
};

function browseNode(node, values = true) {
  if (values) {
    console.log(node.value);
  }
  const left = node.leftChildren !== null;
  const right = node.rightChildren !== null;
  if (left) {
    console.log(node.leftChildren.value);
  }
  if (right) {
    console.log(node.rightChildren.value);
  }
  if (left) {
    browseNode(node.leftChildren, false);
  }
  if (right) {
    browseNode(node.rightChildren, false);
  }
}

browseNode(node1);
