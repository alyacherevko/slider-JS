document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
	var polosa = document.getElementById('polosa');
	left = left - 400;
	if (left < -3200) {
		left = 0;
	}
	polosa.style.left = left + 'px';
}; 
