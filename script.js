

var button1 = document.getElementById("button1");
var list1 = document.getElementById("list1");
	button1.addEventListener("click", function() {
		if (list1.style.display === "none") {
			list1.style.display = "block";
			button1.innerHTML = "Ocultar";
		} else {
			list1.style.display = "none";
			button1.innerHTML = "Contacto";
		}
	});
	
var button2 = document.getElementById("button2");
var list2 = document.getElementById("list2");
	button2.addEventListener("click", function() {
		if (list2.style.display === "none") {
			list2.style.display = "block";
			button2.innerHTML = "Ocultar";
		} else {
			list2.style.display = "none";
			button2.innerHTML = "Contacto";
		}
	});