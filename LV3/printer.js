function Printer(b,bool)
{
    if(b<=100 && b>=0) 
    {
        this.nivo_tonera=b;
    }
    else  
    {
        this.nivo_tonera=100;
    }
    this.dvostranoispisivanje= bool,
    this.ukupanBrojStranica=0;
}

var __p ={
    ispisStranica: function(x)
    {
       console.log(x.ukupanBrojStranica); 
    },
    ispisNivo: function(x)
    {
        console.log(x.nivo_tonera); 
    }
}

var Samsung_M283x= new Printer(23, true);
var Epson_Sx105= new Printer(50, true);
var Cannon_Pixma= new Printer(154, false);
var HP_Smart_tank_50= new Printer(2, true);

Printer.prototype.dodajboju= function(x)
{
    if(this.nivo_tonera<100)
    {
        this.nivo_tonera+=x;
        if (this.nivo_tonera>100) 
        {
            this.nivo_tonera=100;
        }
    }    
}
Printer.prototype.printaj= function(y)
{
    var i = 1;
    var ispisane=0;
    while(this.nivo_tonera>0 && y>0)
    {
        if(i<=y)
        {
            this.nivo_tonera-= 0.1;
        }
        i++;
        ispisane++;
    }

    if(this.nivo_tonera<=0)
    {
        console.log("greška boje");
    }

        if(this.dvostranoispisivanje)
        {
            var sum= parseInt(ispisane/2);
            if(ispisane%2==1)
            {
                 sum++;
            } 
            this.ukupanBrojStranica += sum;
        }
        else
        {
            this.ukupanBrojStranica += ispisane;
        }     

}
/*
console.log(Samsung_M283x.nivo_tonera);
Samsung_M283x.dodajboju(98);
console.log(Samsung_M283x.nivo_tonera);
*/
__p.ispisNivo(Epson_Sx105);
Epson_Sx105.printaj(505);
__p.ispisNivo(Epson_Sx105);
__p.ispisStranica(Epson_Sx105);
