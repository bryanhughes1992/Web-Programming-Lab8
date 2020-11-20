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

/***************************************
	FUNCTION TO FIRE BEHAVIOUR LAYER
 ***************************************/
function firePage() {

	//Storing entire form as a variable
	var formHandle = document.forms.form_ship;

	//Storing the 'Thank you' msg as a variable
	var thanksMsg = document.getElementById('thanks_msg');

	//When the form_ship form is submitted, use the processForm() function.
	formHandle.onsubmit = processForm;

	/**********************
		FORM PROCESSING
	***********************/
	function processForm() {

		/************************
			DROPDOWN HANDLING
		*************************/

		var dropDown = formHandle.in_Speed;

		dropDown.onchange = goDD;

		function goDD() {
			console.log(dropDown.value);
		}


		/**************************
		 	USER NAME VALIDATION
		 ***************************/
		//Variable created to store user 'Name'
		var userName = formHandle.in_Name.value;
		if (userName === '' || userName === null) {
			var nameColor = document.getElementById('in_Name');
			nameColor.style.backgroundColor = 'pink';
			alert("Please enter your name.");
			return false;
		} else {
			//Setting the 'name' property of the 'shipInfo' object to the 'userName'
			shipInfo.name = userName;
			console.log(userName);
		}


		/***************************
			CLIENT ID VALIDATION
		****************************/
		//Variable to hold the value of the client id input
		var client_id = formHandle.in_Id.value;
		var c_id_format = /\d\d\d\d\d\d/;
		if(client_id === null || !c_id_format.test(client_id) || isNaN(client_id)) {
			var id_color = document.getElementById('in_Id');
			id_color.style.backgroundColor = 'pink';
			alert("Client ID must be 6 numbers 0-9");
			return false;
		} else {
			//Setting the 'cid' member to user data
			shipInfo.cid = client_id;
		}

		/******************************
			POSTAL CODE VALIDATION
		********************************/
		//Variable to hold user inputted postal code
		var postalCode = formHandle.in_pc.value;
		//Regular Expression for postal code
		var postalCodeFormat = /^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/;
		//User input validation for postal code
		if (postalCode === null || !postalCodeFormat.test(postalCode)) {
			var postalColor = document.getElementById('in_pc');
			postalColor.style.backgroundColor = 'pink';
			alert("Please enter a Canadian postal code.");
			return false;
		} else {
			//Setting the 'pc' member of the 'shipInfo' object to 'postalCode'.
			shipInfo.pc = postalCode;
		}

		/************************************
		 	SUCCESSFUL SUBMIT INSTRUCTIONS
		 ************************************/
		//Success message
		alert("Form Submitted!");
		//onSubmit, hide the form.
		formHandle.style.display = 'none';
		//Display hard coded thank you message
		thanksMsg.style.display = 'inline';
		/************************
			THANK YOU MESSAGE
		*************************/
		//Hard coded thank you message
		var thankYouMsg = `${shipInfo.name} (Customer #${shipInfo.cid}) for your purchase. Your package will be sent to '${shipInfo.pc}'`;
		//Holds the container to display the thank you message
		var sendThanks = document.getElementById('thanksCustomer');
		//Setting the contents of the container to the thank you message
		sendThanks.innerHTML = thankYouMsg;
		sendThanks.style.backgroundColor = 'greenyellow';


		//Stop the form from sending
		return false;

	}
}
