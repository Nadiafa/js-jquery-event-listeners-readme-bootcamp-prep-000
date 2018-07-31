//define functions here

function getIt() {
  ${'p'}.on('click', function() {
    alert ("Hey!");
  })
}


$(document).ready(function(){

// call functions here

});




// 1) Selectors getIt() binds a click event to the paragraph:
//   TypeError: window.getIt is not a function
//     at Context.<anonymous> (test/index-test.js:5:12)

// 2) Selectors frameIt() binds an event that frames the minion when the page loads:
//   TypeError: window.frameIt is not a function
//     at Context.<anonymous> (test/index-test.js:13:12)

// 3) Selectors submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted:
//   TypeError: window.submitIt is not a function
//     at Context.<anonymous> (test/index-test.js:51:12)

// 4) Selectors pressIt() pressIt() binds an event that alerts the user when theG key was pressed down:
//   TypeError: window.pressIt is not a function
//     at Context.<anonymous> (test/index-test.js:26:14)

// 5) Selectors pressIt() does not alert if another key is pressed:
//   TypeError: window.pressIt is not a function
//     at Context.it (test/index-test.js:38:14)