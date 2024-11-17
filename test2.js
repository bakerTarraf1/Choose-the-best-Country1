var go = document.getElementsByName("place");
	var check =0;
	for (var i = 0; i < go.length; i++) {
		go[i].addEventListener("change", function (f) {
		if(f.target.value==='Alaska')  check = 1 ;
	}); }
	
	for (var i = 0; i < go.length; i++) {
		go[i].addEventListener("change", function (f) {
		if(f.target.value==='Istanbul')  check = 2 ;
	});} 
		
	for (var i = 0; i < go.length; i++) {
		go[i].addEventListener("change", function (f) {
		if(f.target.value==='Maldive')  check = 3 ;
	});} 
  var form = document.querySelector("form");
form.addEventListener("submit", function (f) {


if (check === 1 ) {
document.getElementById("x").textContent="Britain is one of the most beautiful countries in the world where the diversity of bridges and palaces and hours.";}
 else
   if (check === 2 ) {
   document.getElementById("x").textContent="Istanbul is one of the ancient and beautiful places,and so far it is considered one of the most touristic places in the region and the world";}
     else
        if (check === 3 ) {
        document.getElementById("x").textContent="bestt choise Maldivs, no doubt is the best ";}
});