
$("#glavna").on("click", ".prvi", function(){
    console.log("klik");
    
    if($(this).parent().children("ul").is(":visible"))
    {
        $(this).attr("class","prvi fa fa-plus");
    }
    else
    {
        $(this).attr("class","prvi fa fa-minus");
    }
    $(this).parent().children("ul").fadeToggle();
});

$("a").click(function(e){
    e.preventDefault();
   // $("img").attr("src", "img/slider_"+$(this).attr("id")+".jpg");
   $("img").attr("src", $(this).attr("href"));
});


