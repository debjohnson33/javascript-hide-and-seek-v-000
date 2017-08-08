function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('div.target')
}

function deepestChild() {
	return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
	var numbers = document.getElementById('app').querySelectorAll('ul.ranked-list')
	
	for (let i = 0; i < numbers.length; i++) {
		numbers[i].innerHTML = (i + n).toString()
	}	
	return numbers;
}