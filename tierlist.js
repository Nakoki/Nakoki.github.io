function mostrarInfo () {
	let champs = document.getElementsByTagName("a");
	for (let i=0; i<champs.length; i++) {
		let nom = champs[i].getAttribute("champ");
		let info = document.getElementById(nom); 
		
		champs[i].onmouseover = ()=>info.className="champ";	 
		champs[i].onmouseout = ()=>info.className="noVisible";
	}
}

window.onload = function(){
	mostrarInfo(); 
}


