var i = 0;	
var z = 1;
setInterval(function(){
	if(i <= 5){
	document.getElementById("pic"+i).style.zIndex = z;
		z++;
		i++;
	}
	else{
		i = 0;
		document.getElementById("pic"+i).style.zIndex = z;
		i++;
		z++;
	}
	
}, 500);
if(screen.availWidth > 375){
	document.getElementById('bd').style.display = "none";
	alert("vagt olmade lap topa a vuram, gushi da ash bizahmat");
}

window.onresize = function(){
	location.reload();
}