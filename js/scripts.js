var groceries = []

$(function() {
  $(".btn-success").click(function(event){
    $("#list").append("<li>" + $("#item").val() + "</li>");
    groceries.push($("#item").val());
    $("input[type=text], textarea").val("");
    event.preventDefault();
  });


//  $("form").submit(function(event) {

//  event.preventDefault();


});
