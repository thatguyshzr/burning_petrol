function km_petrol() {
	km = document.getElementById("km").value
	mileage = document.getElementById("mileage").value
	petrol_used = (km/mileage).toFixed(2)
	console.log("Petrol used: "+petrol_used + 'L')
	// current_petrol_price= 107.0 // scrap in real-time
	current_petrol_price= get_petrol_price()
	money = petrol_used * current_petrol_price
	console.log("Rs " + money)
	console.log(current_petrol_price)
}

const request = require('request')
request('https://www.reddit.com/r/programming.json', function (
  error,
  response,
  body
) {
  console.error('error:', error)
  console.log('body:', body)
})