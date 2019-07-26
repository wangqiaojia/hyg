	  function player(id){
	document.getElementById(id).style.display = "block";
}
function clocer(id){
	document.getElementById(id).style.display = "none";
	
}
function openThink()
{
	player('any');
	
}

function brand_player(id){
	document.getElementById(id).style.display = "block";
	switch (id) {
	case 'brand1':
		//alert($("#my_cart1").css("left"));
		$(".fubrand_body").css("left","420px");
		break;
	case 'brand2':
		$(".fubrand_body").css("left","560px");
		break;
	case 'brand3':
		$(".fubrand_body").css("left","670px");
		break;
	case 'brand4':
		$(".fubrand_body").css("left","750px");
		break;

	}
	
}
function brand_clocer(id){
	document.getElementById(id).style.display = "none";
}