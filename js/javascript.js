$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

 $('#myModal').on('shown.bs.modal', function () {
 $('#myInput').trigger('focus')
});
