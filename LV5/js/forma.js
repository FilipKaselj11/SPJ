$(document).ready(function()
{
	$("#dodaj").click(function(e){
        e.preventDefault();
        var ime= $("#ime").val();
        var prezime= $("#prezime").val();
        var jmbag= $("#jmbag").val();
        var oib= $("#oib").val();
        var datrod= $("#datrod").val();
        var adr= $("#adresa").val();
        var posbr= $("#posbr").val();
        var grad= $("#grad").val();
        console.log("klik");

        if(ime=="" || prezime=="" || jmbag=="" || oib=="" || datrod=="" || adr=="" || posbr=="" || grad=="")
        {
            alert("Popuni sva polja");
            return;
        }
        
        var arr= datrod.split("-");
        if(arr.length!=3)
        {
            alert("datum nije dobar");
            return;
        }
        else
        {
            if(arr[0]<0 || arr[0]>32)
            {
                alert("datum nije dobar");
                return;
            }
            if(arr[1]<0 || arr[1]>12)
            {
                alert("datum nije dobar");
                return;
            }
            if(arr[2]<0 || arr[2]>2022)
            {
                alert("datum nije dobar");
                return;
            }
        }
        var datumstring=arr[2] + "-" +arr[1] + "-"+arr[0];

        if(jmbag.length!=3 || oib.length != 3)
        {
            alert("netocno");
            return;
        }

        var obj={
            'ime' : ime,
            'prez': prezime,
            'jmbag': jmbag,
            'oib': oib,
            'dat': datumstring,
            'adr': adr,
            'pos': posbr,
            'grad': grad,
        };

        console.log(obj);




    });
});