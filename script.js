// toggle the class "done" on click

// set an event listener to listen for click events in the table
document.querySelector('table').addEventListener('click', function(e) {
  // if the click event target is a td, toggle the class "done"
  if (e.target.tagName === 'TD') {
    e.target.classList.toggle('done');
  }
});