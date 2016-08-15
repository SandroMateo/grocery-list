var groceries = []

$(function() {
  $(".btn-success").click(function(event){
    $("#list").append("<li>" + $("#item").val() + "</li>");
    groceries.push($("#item").val());
    $("input[type=text], textarea").val("");
    event.preventDefault();
  });

  $("form").submit(function(event) {
    $(".row").slideUp();
    groceries.sort();
    var groceryList = groceries.map(function(item) {
      return item.toUpperCase();
    });
    groceryList.forEach(function(grocery) {
      $("#newList").append("<li>" + grocery + "</li>");
    })
    event.preventDefault();
  });



//  $("form").submit(function(event) {

//  event.preventDefault();


});
