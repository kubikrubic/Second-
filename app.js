const button__add = document.querySelector('#add-button')
const button__delete = document.querySelector('#delete')
const totalNumber = document.querySelector('#text-totalNumber')

button__add.addEventListener('click', () => {
	const input_name = document.querySelector('#input-name')
	const input_price = document.querySelector('#input-price')
	const input_nameValue = input_name.value
	const input_priceValue = input_price.value
	if (input_nameValue === '' || input_priceValue === '') {
		return
	} else {
		const totalNumber = document.querySelector('#text-totalNumber')
		const currentValue = parseInt(totalNumber.innerHTML, 10);
		if (input_price.value.toUpperCase().includes('K') || input_price.value.toUpperCase().includes('К')) {
			const priceNumber = input_price.value.slice(0, -1)
			if (totalNumber.textContent === '0') {
				totalNumber.innerHTML = parseInt(priceNumber + '000')
			} else {
				
				totalNumber.innerHTML = currentValue + parseInt(priceNumber + '000');
			}
		} else {
			const priceNumber = input_price.value
			totalNumber.innerHTML = currentValue + parseInt(priceNumber, 10);
		}
		const newIl = document.createElement('li')
		const name = document.createElement('span')
		newIl.classList.add('unchecked')
		name.textContent = input_nameValue 
		name.classList.add('name')
		name.classList.add('unchecked')
		list.insertBefore(newIl, list.firstChild)
		newIl.appendChild(name)

		const price = document.createElement('span')
		price.classList.add('price')
		price.classList.add('unchecked')
		price.textContent = input_price.value
		newIl.appendChild(price)

		const span = document.createElement('span')
		span.classList.add('cross')
		span.textContent = '\u00d7'
		newIl.appendChild(span)
		input_name.value = ""
		input_price.value = ""
		
	}
	
	saveData()
})


const list = document.querySelector('#list')

list.addEventListener('click', e => {
	if(e.target.tagName === 'SPAN' && e.target.className ==='cross') {
		const currentValue = parseInt(totalNumber.innerHTML);
		const priceLi = e.target.offsetParent.children[1].textContent

		if (e.target.offsetParent.children[1].textContent.toUpperCase().includes('K') || e.target.offsetParent.children[1].textContent.toUpperCase().includes('К')) {
			totalNumber.innerHTML = currentValue - parseInt(priceLi.slice(0, -1) + '000');
		} else {
			totalNumber.innerHTML = currentValue - parseInt(priceLi);
		}
		e.target.parentElement.remove()
		saveData()
	} else if(e.target.tagName === 'LI') {
		e.srcElement.childNodes[1].classList.toggle('checked')
		e.srcElement.childNodes[0].classList.toggle('checked')
		e.target.classList.toggle('checked')
		saveData()
		
		}
	}

	
)

button__delete.addEventListener('click', () => {
	list.innerHTML = ''
	totalNumber.innerHTML = '0'
	saveData()
})


// function addDot(str) {
// 	let newstr = '';
// 	for (let i = str.length - 1, result = 0; i >= 0; i--) {
// 		newstr = str[i] + newstr;
// 		result++;
// 		if (result === 3 && i > 0) {
// 			newstr = '.' + newstr;
// 			result = 0;
// 		}
// 	}
// 	return newstr;
// }

function saveData() {
	localStorage.setItem('data-second', list.innerHTML)
	localStorage.setItem('total-second', totalNumber.innerHTML)
}
function showTask() {
	list.innerHTML = localStorage.getItem('data-second')
	totalNumber.innerHTML = localStorage.getItem('total-second')
}
showTask()

