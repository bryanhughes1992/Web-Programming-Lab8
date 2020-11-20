/* LAB 8 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

//Event listening for the page to load 'firePage()' is used onload.
window.addEventListener("load", firePage);

function firePage() {

	//Storing entire form as a variable
	var formHandle = document.forms.form_ship;

	//Storing the 'Thank you' msg as a variable
	var thanksMsg = document.getElementById('thanks_msg');

	//When the form_ship form is submitted, use the processForm() function.
	formHandle.onsubmit = processForm;

	//Do the following when this function is called
	function processForm() {

		//Variable created to store user 'Name'
		var userName = formHandle.in_Name.value;
		//Validation of user input for 'Name'
		if (userName === '' || userName === null) {
			alert("Please enter your name.");
			return false;
		} else {
			//Setting the 'name' property of the 'shipInfo' object to the 'userName'
			shipInfo.name = userName;
			console.log(userName);
		}

		//Variable to hold the value of the client id input
		var client_id = formHandle.in_Id.value;
		var c_id_format = /\d\d\d\d\d\d/;
		if(client_id === null || !c_id_format.test(client_id) || isNaN(client_id)) {
			alert("Client ID must be 6 numbers 0-9");
			return false
		} else {
			//Setting the 'cid' member to user data
			shipInfo.cid = client_id;
		}

		//Variable to hold user inputted postal code
		var postalCode = formHandle.in_pc.value;
		//Regular Expression for postal code
		var postalCodeFormat = /\w\d\w\s\d\w\d/;
		//User input validation for postal code
		if (postalCode === null || !postalCodeFormat.test(postalCode)) {
			alert("Please enter a Canadian postal code.");
			return false;
		} else {
			//Setting the 'pc' member of the 'shipInfo' object to 'postalCode'.
			shipInfo.pc = postalCode;
		}

		//Alert user that the form has sent
		alert("Form Sent!");


		//onSubmit, hide the form.
		formHandle.style.display = 'none';
		//Display hard coded thank you message
		thanksMsg.style.display = 'inline';

		var thankYouMsg = `${shipInfo.name} (Customer #${shipInfo.cid}) for your purchase. Your package will be sent to '${shipInfo.pc}'`;
		var sendThanks = document.getElementById('thanksCustomer');
		sendThanks.innerHTML = thankYouMsg;

		//Stop the form from sending
		return false;

	}
}
