const input = document.getElementById('input')
const wrapper = document.getElementById('wrapper')
const button = document.getElementById('btn')
const aylana = document.getElementById('aylana')

button.addEventListener('click', function () {
	let letters = '0123456789ABCDEF'
	let color = '#'

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	aylana.style.transition = 'none'
	aylana.style.transform = 'scale(1)'


	wrapper.style.color = input.value || color
	aylana.style.backgroundColor = input.value || color

	setTimeout(() => {
		aylana.style.transform = 'scale(10)'
		aylana.style.transition = 'all 1s ease-in-out'
	}, 20);
		
	
	input.value = ''
	chiqish()
})
