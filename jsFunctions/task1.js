function getRectangleAreaDeclaration(width, height) {
  return width * height;
}

const getRectangleAreaExpression = function (width, height) {
  return width * height;
};

const getRectangleAreaArrow = (width, height) => width * height;

console.log(getRectangleAreaDeclaration(5, 10));
console.log(getRectangleAreaExpression(5, 10));
console.log(getRectangleAreaArrow(5, 10));
