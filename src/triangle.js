export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

// var answer;

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 === this.side2) && (this.side1 === this.side3) && (this.side2 === this.side3)) {
    return "equilateral triangle";
  } else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) {
    return "scalene triangle";
  } else if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)) {
    return "isoceles triangle"
  }
};
// if ( right + left   <= center
//   ||  right + center <= left
//   ||   left + center <= right){
//    answer="not a triangle"
//  } else if (right === center && right === left) {
//    answer = "an equilateral";
//  } else if (right === center || right === left || center === left) {
//    answer = "an isoscoles"
//  } else if (right !== left || left !== center || right !== center) {
//    answer = "a scalene"
//  } 