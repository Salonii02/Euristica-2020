
var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("button alt");
var spans=document.getElementsByClassName("close");
for(let i=0;i<btns.length;i++){
    btns[i].onclick = function() {
        modals[i].style.display = "block";
		document.body.style.overflow = "hidden";
    }
}
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {	
	document.body.style.overflow = "auto";
    modals[i].style.display = "none";
    }
}

window.addEventListener('click', outsideClick);

// Close If Outside Click
function outsideClick(e) {
for(let i=0;i<btns.length;i++){
  if (e.target == modals[i]) {
	document.body.style.overflow = "auto";	  
    modals[i].style.display = 'none';
    	
}
}
}


 