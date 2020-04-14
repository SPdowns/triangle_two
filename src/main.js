import { Triangle } from './../src/triangle.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    let finalTriangle = new Triangle(side1, side2, side3);
    // var answer = import(finalTriangle.checkType());
    console.log('finalTriangle: ', finalTriangle)
    let answer = finalTriangle.checkType();
    finalTriangle = 0; //not work
    
    $("#typeOfTriangle").text(answer);
  });
});



//("This is a " +  + " triangle")