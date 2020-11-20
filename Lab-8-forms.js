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



	formHandle.onsubmit = processForm;

	function processForm() {
		//Alert user that the form has sent
		alert("Form Sent!");
		//onSubmit, hide the form.
		formHandle.style.display = 'none';
		//Display hard coded thank you message
		thanksMsg.style.display = 'inline-block';
		//Stop the form from sending
		return false;

	}
}
