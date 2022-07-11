document.getElementById("button-popup").addEventListener("click", function(){
	document.querySelector(".popup-login").style.display = "flex";
});
  
document.querySelector(".close-popup").addEventListener("click", function(){
	document.querySelector(".popup-login").style.display = "none";
});