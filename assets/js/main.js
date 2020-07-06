// check off specific todos by clicking
$('li').click(function () {
  $(this).toggleClass('completed');
});

// click on x to delete a todo
// pass in e event object to stop event bubbling up to parent elements
$('span').click(function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

// type a todo and hit enter adds todo item

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    
  }
});
