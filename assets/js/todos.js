$(document).ready(function() {

  // Task 1. Cross off todos
  $("ul").on("click", "li", function() {
    $(this).toggleClass('crossOff');
  })

  // Task 2. Delete todos
  // click on the span
  // delete the li
  $("ul").on("click", "span", function() {
    $(this).parent().fadeOut("normal", function() {
      $(this).remove();
    });
  })

  // Task 3. Add Todos
  // user submits the form
  // get the value from the input
  // add it to the list
  // clear input after submit
  $("#myForm").submit(function(event) {
    event.preventDefault();
    value = $("input").val();
    trashIcon = "<i class='fa fa-trash'></i>"

    $('#myForm')[0].reset();
    $("ul").append("<li><span>" + trashIcon + "</span>" + value + "</li>")
  })

  // Task 4. Toggle input form
  $(".fa-plus").click(function() {
    $(".fa-plus").toggleClass("fa-minus");
    $("input").fadeToggle();
  })

})
