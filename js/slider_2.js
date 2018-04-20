document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var left = 0;
var polosa = document.getElementById('polosa');

function sliderLeft() {
	left = left + 400;
	if (left > 0) {
		left = -3200;
	}
	polosa.style.left = left + 'px';
};

function sliderRight() {
	
	left = left - 400;
	if (left < -3200) {
		left = 0;
	}
	polosa.style.left = left  + 'px';
}
