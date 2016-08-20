jQuery(document)
.on("click", "#rd", function(e){
	e.preventDefault();
	jQuery(this).toggleClass("t");
});