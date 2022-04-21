function KompleksniBroj(real, img)
{
    this.Real=real;
    this.Imaginary= img;
}

var oKom1= new KompleksniBroj(12, 3);
var oKom2= new KompleksniBroj(1, 1);
var oKom3= new KompleksniBroj(1, 1);
var oKom4= new KompleksniBroj(7, 5);
var oKom5= new KompleksniBroj(2, 9);

var _kb = {
    ispisiKompleksniBroj: function(kb)
    {
        console.log("z = " + kb.Real + " + " + kb.Imaginary+ "i");
    },
    zbroji: function (kb1,kb2)
    {
        var oKom= new KompleksniBroj(kb1.Real+kb2.Real, kb1.Imaginary+ kb2.Imaginary);
        this.ispisiKompleksniBroj(oKom);
        return oKom;
    },
    pomnozi: function(kb1,kb2)
    {
        var r= kb1.Real * kb2.Real - kb1.Imaginary * kb2.Imaginary;
        var i= kb1.Real * kb2.Imaginary + kb1.Imaginary * kb2.Real;
        var oKom= new KompleksniBroj(r, i);
        this.ispisiKompleksniBroj(oKom);
        return oKom;
    }
}
/*
_kb.ispisiKompleksniBroj(oKom1);
_kb.ispisiKompleksniBroj(oKom2);
_kb.ispisiKompleksniBroj(oKom3);
_kb.ispisiKompleksniBroj(oKom4);
_kb.ispisiKompleksniBroj(oKom5);

_kb.zbroji(oKom3, oKom4);

_kb.pomnozi(oKom2,oKom3);
*/

var dropdown=$("#operacija");

dropdown.change(function()
{
    var r1= $("#z1real").val();
    var i1= $("#z1img").val();
    var r2= $("#z2real").val();
    var i2= $("#z2img").val();
    var oKom1=new KompleksniBroj(parseInt(r1),parseInt(i1));
    var oKom2=new KompleksniBroj(parseInt(r2),parseInt(i2));

    if($("#operacija :selected").val()=="zbroji")
    {  
        var oKom= _kb.zbroji(oKom1,oKom2);
        $("#z3real").val(oKom.Real);
        $("#z3img").val(oKom.Imaginary);
    }
    else
    {
        var oKom= _kb.pomnozi(oKom1,oKom2);
        $("#z3real").val(oKom.Real);
        $("#z3img").val(oKom.Imaginary);
    }

});

var Gumb=$("#clck");
/*
Gumb.click(function()
{
    var r1= $("#z1real").val();
    var i1= $("#z1img").val();
    var r2= $("#z2real").val();
    var i2= $("#z2img").val();
    var oKom1=new KompleksniBroj(r1,i1);
    var oKom2=new KompleksniBroj(r2,i2);

    if($("#operacija :selected").val()=="zbroji")
    {  
        var oKom= _kb.zbroji(oKom1,oKom2);
        $("#z3real").val(oKom.Real);
        $("#z3img").val(oKom.Imaginary);
    }
    else
    {
        var oKom= _kb.pomnozi(oKom1,oKom2);
        $("#z3real").val(oKom.Real);
        $("#z3img").val(oKom.Imaginary);
    }
});
*/