$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var right = parseInt($("input#side1").val());
    var center = parseInt($("input#side2").val());
    var left = parseInt($("input#side3").val());

    var answer;

    if (right === center && right === left) {
      answer = "an Equilateral";
    } else if (right === center || right === left || center === left) {
      answer = "an isoscoles"
    } else if (right !== left || left !== center || right !== center) {
      answer = "a scalene"
    } else if (right + left <= center || right + center <= left || left + center <= right){
      answer="not a triangle"
    }
  
    $("#typeOfTriangle").text(answer);
  });
});



//("This is a " +  + " triangle")