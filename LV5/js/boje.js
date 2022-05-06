$("#gu").click(function(){
    var boja= Math.floor(Math.random()*16777215).toString(16);
    console.log(boja);
    $("body").css("background-color", "#"+boja);
    $("#haha").html("Boja : #"+ boja);
});