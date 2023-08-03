// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // create array here  ,,, using strings define ids being used, loop over array,, run all code though ,,, string interpralation
  var currentHour = dayjs().hour();
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

  // Id number without hyphin
  var numRowId = [];
  for (var i = 0; i < rowId.length; i++) {
    var number = parseInt(rowId[i].split("-")[1]); // Extract the number after the hyphen
    if (number < currentHour) {
      $(`#${rowId[i]}`).addClass("past");
    } else if (number === currentHour) {
      $(`#${rowId[i]}`).addClass("present");
    } else {
      number > currentHour;
      $(`#${rowId[i]}`).addClass("future");
    }
  }
  console.log(numRowId);

  for (let i = 0; i < rowId.length; i++) {
    var input = $(`#${rowId[i]} .description`);
    var appointment = localStorage.getItem(rowId[i]);
    if (appointment) {
      input.val(appointment);
    }
  }
  var saveButtons = $(".saveBtn");
  saveButtons.each((index, saveButton) => {
    $(saveButton).on("click", (event) => {
      event.preventDefault();
      var input = $(`#${rowId[index]} .description`);
      var inputValue = input.val();
      localStorage.setItem(rowId[index], inputValue);
      console.log(
        `Input for ${rowId[index]} saved to local storage:`,
        inputValue
      );
    });
  });

  //

  // var saveInput =
  //   var inputValue = input.value;
  //   localStorage.setItem("rowId[i]", inputValue); // match first argument with variable appointment

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
  console.log(currentHour);
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY H:mm A"));
});

// var saveImput = $(".saveBtn").on("click", function () {
//   // Use jQuery to select the textarea and retrieve its value
//   const textValue = $(".description").val();
//   // Save the value (You can replace this with your own saving logic)
//   console.log("Text value:", textValue);
// });
