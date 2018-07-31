//define functions here

function getIt() {
  $('p').on('click', function() {
    alert ("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function(){
    if() {
      alert ('You have pressed G');
    }
    
  })
}

$(document).ready(function(){

// call functions here

});


// 3) Selectors submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted:
//   TypeError: window.submitIt is not a function
//     at Context.<anonymous> (test/index-test.js:51:12)

// 4) Selectors pressIt() pressIt() binds an event that alerts the user when theG key was pressed down:
//   TypeError: window.pressIt is not a function
//     at Context.<anonymous> (test/index-test.js:26:14)

// 5) Selectors pressIt() does not alert if another key is pressed:
//   TypeError: window.pressIt is not a function
//     at Context.it (test/index-test.js:38:14)