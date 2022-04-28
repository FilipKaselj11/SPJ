var obj= new _lib("title");
console.log(obj.el.innerHTML);

var lista=new _lib("#nav");
console.log(lista.el.innerHTML);

lista.ubaciELEMENT("li","","","<a href='#'>MAIL</a>");

var obj2= new _lib(".naslov");
obj2.dodajAtribut("id",2);

obj2.sakrij();

localStorage.clear();
localStorage.setItem("racunarstvo", "http://racunarstvo.vuv.hr");
localStorage.setItem("loomen", "http://loomen.vsmti.hr");
localStorage.setItem("imagine","http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentski_dom", "http://studom.vsmti.hr");
localStorage.setItem("office365", "https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");

var footernav=new _lib(".footer-navigation");



var id=0;
Object.keys(localStorage).forEach(function(key){
    footernav.ubaciELEMENT("li","item", key, "");
    var li= new _lib("#"+key);
    li.ubaciELEMENT("a","",key+id,key);
    a1= new _lib("#"+key+id);
    a1.dodajAtribut("href", localStorage.getItem(key));
    id++;
});

console.log(document.querySelector("#1"));





