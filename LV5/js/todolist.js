$(document).ready(function(){
    $("#dodaj").click(function(){
        var input = $("#in").val();
        if(!input=="")
        {
            $("ul").append("<li><input type='checkbox'><button class='brisi'><i class='fa fa-trash'></i></button>"+input+"</li>");
        }

    });


});

$("ul").on("click", ".brisi", function(){
    console.log("klik");
    $(this).parent().remove();
});