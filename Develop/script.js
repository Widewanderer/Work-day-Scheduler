// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // create array here  ,,, using strings define ids being used, loop over array,, run all code though ,,, string interpralation
  var rowId = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
  ];

  for (let i = 0; i < rowId.length; i++) {
    var input = document.querySelector("#${rowId[i]}.description");
    var appointment = localStorage.getItem("rowId[i]"); // fill getItem() with ids from array
    if (appointment) {
      input.value = appointment;
    }
  }
  var saveButton = document.querySelector(".saveBtn");
  var saveInput = saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    var inputValue = input.value;
    localStorage.setItem("rowId[i]", inputValue); // match first argument with variable appointment
  });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // var hourBlock = parseInt($(this).attr('id').split('-')[1])
  //console.log(hourBlock)

  //if( currentHour ===
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentHour = dayjs().hour();
  console.log(currentHour);
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY H:mm A"));
});

// var saveImput = $(".saveBtn").on("click", function () {
//   // Use jQuery to select the textarea and retrieve its value
//   const textValue = $(".description").val();
//   // Save the value (You can replace this with your own saving logic)
//   console.log("Text value:", textValue);
// });
