import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var right = parseInt($("input#side1").val());
    var center = parseInt($("input#side2").val());
    var left = parseInt($("input#side3").val());

    var answer;


   
  
    $("#typeOfTriangle").text(answer);
  });
});



//("This is a " +  + " triangle")