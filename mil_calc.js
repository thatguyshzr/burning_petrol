function km_petrol() {
	km = document.getElementById("km").value
	mileage = document.getElementById("mileage").value
	petrol_used = (km/mileage).toFixed(2)

	console.log("Petrol used: "+petrol_used + 'L')
	document.getElementById('petr').innerHTML = petrol_used+' L';

	current_petrol_price= get_petrol_price()
	money = petrol_used * current_petrol_price
	console.log("Rs " + money)
	document.getElementById('mon').innerHTML = 'Rs ' + money;

}

let url= "https://economictimes.indiatimes.com/wealth/fuelprices/fuel-petrol,citystate-mumbai.cms";
function get_petrol_price() {
	return 107;
}