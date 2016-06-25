$(document).ready(function(){
	var createImage = function(src,title){
		var img = new Image();
		img.src = src;
		img.alt = title;
		img.title = title;
		img.height = "400px";
		return img;
	};

	var images = [];

	images.push(createImage("./images/question1.1.jpg","Old Car"));
	images.push(createImage("//static1.businessinsider.com/image/52af4b48ecad04934a6ee2d9-1200-667/screen%20shot%202013-12-16%20at%201.49.00%20pm.png","Car Usage Graph"));
	images.push(createImage("https://unsplash.com/photos/iOWEyl7sEgY","Residential Emissions"));
	images.push(createImage("",""));
	images.push(createImage("",""));
	images.push(createImage("",""));
	images.push(createImage("",""));
	images.push(createImage("",""));
	images.push(createImage("",""));
	images.push(createImage("",""));

	//$("#centerImage").append(images[0]);

});