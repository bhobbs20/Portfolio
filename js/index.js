// Fade in hero elements on page load
$(document).ready(function(){
	$(".fade").hide(0).delay(300).fadeIn(3000);
});

// Conact page validete form	
function validateForm() {
  	var nameBlank = document.forms["contact"]["fullname"].value;
  	var blankEmail = document.forms["contact"]["email"].value;
	var blankNumber = document.forms["contact"]["number"].value;
  	var blankMessage = document.forms["contact"]["message"].value;
  
  	if (nameBlank == "") {
    	alert("Please enter you name");
    	return false;
  	}

  	if (blankEmail == "") {
      	alert("Please enter your email");
      	return false;
  	}

	if (blankNumber == "") {
      	alert("Please enter your number");
      	return false;
  	}
    
    if (blankMessage == "") {
      	alert("Please enter your message");
      	return false;
  	}
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);