var gb = document.getElementsByName("more");
var check1 =0;
for (var i = 0; i < gb.length; i++) {
gb[i].addEventListener("change", function (e) {
if(e.target.value==='paris')  check1 = 1 ;
}); }

for (var i = 0; i < gb.length; i++) {
gb[i].addEventListener("change", function (e) {
if(e.target.value==='roma')  check1 = 2;
});}

for (var i = 0; i < gb.length; i++) {
gb[i].addEventListener("change", function (e) {
if(e.target.value==='swisra')  check1 = 3 ;
});}

function appeare()
{
    var list = document.getElementsByName("more");
    for(var item=0;item<list.length;item++)
    {
        mo = list[item];
        if(mo.checked)
        document.getElementById(mo.value).style.visibility = "visible";
        else
        document.getElementById(mo.value).style.visibility = "hidden";
    }
}

