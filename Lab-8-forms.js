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

		//Alert user that the form has sent
		alert("Form Sent!");

		//Variable created to store user 'Name'
		var userName = formHandle.in_Name.value;
		//Setting the 'name' property of the 'shipInfo' object to the 'userName'
		shipInfo.name = userName;

		//Variable to hold the value of the client id input
		var client_id = formHandle.in_Id.value;
		//Setting the 'cid' member to user data
		shipInfo.cid = client_id;

		//Variable to hold user inputted postal code
		var postalCode = formHandle.in_pc.value;
		//Setting the 'pc' member of the 'shipInfo' object to 'postalCode'.
		shipInfo.pc = postalCode;

		var thankYouMsg = `Thank you ${shipInfo.name} (Customer #${shipInfo.cid}) for your purchase. Your package will be sent to ${shipInfo.postalCode}`;

		//onSubmit, hide the form.
		formHandle.style.display = 'none';
		//Display hard coded thank you message
		thanksMsg.style.display = 'inline';


		//Stop the form from sending
		return false;

	}
}
