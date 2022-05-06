$("#type").change(function(){
    $("#input").attr("type", $(this).val());
    $("#input").val("");
    $("#input").show();
})


$("#spremi").click(function(){
   // JQUERY NE MOZE PISATI U JSON NA LOCAL SERVERU DIREKTNO, PA SAM KORISTIO PHP I POST
    $.post("atributi.php", {
        type: $("#type").val(),
        input: $("#input").val()
        },
        function (data)
        {
            console.log(data);
        } 
    ); 
    
    $("#input").val("");  
});