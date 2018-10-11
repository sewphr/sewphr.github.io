var i = 0;
setInterval(function(){
	if(i <= 5){
	document.getElementById('pic').setAttribute("src", "pic"+i+".jpg");
		i++;
	}
	else{
		i = 0;
		document.getElementById('pic').setAttribute("src", "pic"+i+".jpg");
		i++;
	}
	
}, 500);
if(screen.availWidth > 375){
	document.getElementById('bd').style.display = "none";
	alert("vagt olmade lap topa a vuram, gushi da ash bizahmat");
}

window.onresize = function(){
	location.reload();
}