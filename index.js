$(function() {
	var a1 = document.querySelector('[name="a1"]');
	var a2 = document.querySelector('[name="a2"]');
	var b1 = document.querySelector('[name="b1"]');
	var b2 = document.querySelector('[name="b2"]');
	var formula = document.querySelector('#formula');
	var condition = document.querySelector('#condition');
	var result = document.querySelector('#result');
	var result1 = document.querySelector('#result1');


		document.querySelectorAll('input[name],#condition, #formula').forEach(function (input) {
			input.addEventListener('keyup', function (){
			try {
				var calculator = new Function('a1, a2, b1, b2', 'return ' + formula.value + ';');
	
				result.value = calculator(Number(a1.value), Number(a2.value),  Number(b1.value), Number(b2.value));
			}
			catch (error) {
				result.value = '#ERROR';
				console.error(error.message);
			}

			try {
				var calculator1 = new Function('a1, a2, b1, b2', 'return ' + condition.value + ';');
	
				result1.value = calculator1(Number(a1.value), Number(a2.value),  Number(b1.value), Number(b2.value));
			}
			catch (error) {
				result1.value = '#ERROR';
				console.error(error.message);
			}
	
			if (result1.value == 'true') {
				$('#result1').css({'background-color': 'green'});
			} else {
				$('#result1').css({'background-color': 'red'});
			}
		});
	});
});