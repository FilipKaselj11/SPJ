function Grad(n, bs, lat, lon)
{
    this.Naziv=n;
    this.BrojStanovnika=bs;
    this.Latituda=lat;
    this.Longituda=lon;
}

Grad.prototype.dajVelicinuGrada = function()
{
    if(this.BrojStanovnika<30000) return 1;
    else if(this.BrojStanovnika>200000) return 3;
    else return 2;
}

function dajUdaljenost(g1,g2)
{
    var R = 6371; // km
    var dLat = toRad(g2.Latituda- g1.Latituda);
    var dLon = toRad(g2.Longituda-g1.Longituda);
    var lat1 = toRad(g1.Latituda);
    var lat2 = toRad(g2.Latituda);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}
// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

var oVt= new Grad("Virovitica", 21000, 45.8389449, 17.323503);
var oSl= new Grad("Slatina", 15000, 45.6827909, 17.636311);
var oBj= new Grad("Bjelovar", 40000, 45.9063339, 16.7591051);
var oOs= new Grad("Osijek", 110000, 45.5464866, 18.5487764);
var oZg= new Grad("Zagreb", 900000, 45.8403496, 15.8242492);

console.log(oBj.dajVelicinuGrada());
console.log(dajUdaljenost(oVt, oZg));
