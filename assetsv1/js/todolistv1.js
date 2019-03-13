$("ul").on("click","li", function (){
    //console.log($(this).css("color"))
    //if li is gray
if($(this).css("color") === "rgb(128, 128, 128)"){
       //turn black
       $(this).css({
           color:"black",
           textDecoration:"none"
       });
       
    }
   
    //else turn gray
    else {
    $(this).css({
color:"gray",
textDecoration:"line-through"
});
    }
});
// other method is $("li").click(function (){ $(this).toggleClass("completed")});

//click x to delete Todos

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
$(this).remove();
    });
    event.stopPropogation();

});
//add Todos to list

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new to do text from input
       var todoText = $(this).val();
       $(this).val("");
       //create new li and add ul
       $("ul").append("<li><span><i class = 'fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

// hide and show add new to do

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});