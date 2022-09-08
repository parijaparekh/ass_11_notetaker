// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = ''; // -> add ref to project form on modal
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = ''; // -> add ref to type input field in modal
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = '';// -> add ref to date picker on modal

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a'); // -> What is moment and what is it doing?
  // -> missing something here, need to show on screen somehow
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) { // -> Why put this in a function?
  var projectRowEl = $('<tr>');

  var projectNameTdEl = $('<td>').addClass('p-2').text(name);

  var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

  var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

  var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

  var daysToDate = moment(dueDate, 'MM/DD/YYYY'); // -> this isnt calculating the difference, method?
  var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate);

  // You can also chain methods onto new lines to keep code clean
  var totalTdEl = $('<td>')
    .addClass('p-2')
    .text('$' + totalEarnings);

  var deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');
}

function calculateTotalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  var total = dailyTotal * days;
  // -> function needs to return something
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault(); // -> what is this doing?

  var projectName = projectNameInputEl.val().trim(); // -> why trim?
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate); // _> ??

  projectFormEl[0].reset(); // -> ??
}

// -> create another on click to handle form submit
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

// -> function missing, what did we forget? we need to do a 1 second internal to update the clock on screen...
