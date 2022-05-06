var p=[[1,0.5,0.5,0.5,1.5],
[2,1,1,1,0.5],
[3,1.1,1,5,5],
[2,2,1,1,6],
[2,2,5,3,1]];  //random brojevi

$("#pre").click(function(){
    $("#drugi").val($("#prvi").val() * p[$("#prvii").val()-1][$("#drugii").val()-1]);
});


