var id=1;
function Prev(){
    if(id==1)
    {
        id=5;
    }
    else{
        id--;
    }
    $("#slika").attr("src", "img/slider_"+id+".jpg");
}

function Next(){
    if(id==5)
    {
        id=1;
    }
    else{
        id++;
    }
    $("#slika").attr("src", "img/slider_"+id+".jpg");
}