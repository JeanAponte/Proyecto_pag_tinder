document.getElementById("button-popup").addEventListener("click", function(){
	document.querySelector(".popup-login").style.display = "flex";
});
  
document.querySelector(".close-popup").addEventListener("click", function(){
	document.querySelector(".popup-login").style.display = "none";
});


document.getElementById("button-popup-singup").addEventListener("click", function(){
	document.querySelector(".popup-singup").style.display = "flex";
});
  
document.querySelector(".close-popup-singup").addEventListener("click", function(){
	document.querySelector(".popup-singup").style.display = "none";
});


document.getElementById("button-popup-contactanos").addEventListener("click", function(){
	document.querySelector(".popup-contactanos").style.display = "flex";
});
  
document.querySelector(".close-popup-contactanos").addEventListener("click", function(){
	document.querySelector(".popup-contactanos").style.display = "none";
});
