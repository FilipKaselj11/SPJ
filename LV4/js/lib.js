function _lib(s)
{
    this.selector = s;
    this.el= document.querySelector(this.selector);
}

_lib.prototype.ubaciELEMENT=function(naz,klas,id,text)
{
    if(naz=="")
    {
        console.log("element mora sadrzavati naziv");
    }
    else
    {
        var novi = document.createElement(naz);
        if(klas!="") novi.setAttribute("class", klas);
        if(id!="") novi.setAttribute("id", id);
        if(text!="") novi.innerHTML=text;

        this.el.appendChild(novi);
    }
}

_lib.prototype.dodajKlasu=function(input)
{
    if(input!="")this.el.setAttribute("class", input);
    else console.log("potreban input");
}

_lib.prototype.dodajAtribut=function(attr, input)
{
    if(attr!="")this.el.setAttribute(attr, input);
    else console.log("potreban naziv atributa");
}
_lib.prototype.prikazi=function()
{
    this.el.style.visibility="visible";
}
_lib.prototype.sakrij=function()
{
    this.el.style.visibility="hidden";
}