// check off specific todos by clicking
// when an li in a ul is clicked run this code
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

// click on x to delete a todo
// pass in e event object to stop event bubbling up to parent elements
$('ul').on('click', 'span', function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li><span>X</span> ' + todoText + '</li>');
  }
});
