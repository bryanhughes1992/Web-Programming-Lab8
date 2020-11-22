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

		var levelOfDelivery = formHandle.in_Speed;

		levelOfDelivery.addEventListener("change", showChanges);

		function showChanges() {
			console.log(levelOfDelivery.value);
		}

		costOfDelivery = levelOfDelivery.value;

		levelOfDelivery.addEventListener('submit', goDropDown);
		function goDropDown() {
			if (costOfDelivery === "0") {
				alert("Please select a shipping method");
				levelOfDelivery.style.backgroundColor = 'pink';
				levelOfDelivery.focus();
				return false;
			} else {
				shipInfo.cost = costOfDelivery;
			}
		}

		/**************************
		 	USER NAME VALIDATION
		 ***************************/
		//Variable created to store user 'Name'
		var userName = formHandle.in_Name.value;

		if (userName === '' || userName === null) {
			//Instruct user to enter name
			alert("Please enter your name.");
			//Capturing the name input field as a var
			var nameColor = document.getElementById('in_Name');
			//Set the background color of input field to pink
			nameColor.style.backgroundColor = 'pink';
			//Re-direct cursor focus back to this input field
			nameColor.focus();
			//Stop the form from sending
			return false;
		} else {
			//Setting the 'name' property of the 'shipInfo' object to the 'userName'
			shipInfo.name = userName;
		}

		/***************************
			CLIENT ID VALIDATION
		****************************/
		//Variable to hold the value of the client id input
		var client_id = formHandle.in_Id.value;
		//Reg-ex for Client ID
		var c_id_format = /\d\d\d\d\d\d/;

		if(client_id === null || !c_id_format.test(client_id) || isNaN(client_id)) {
			//Instructions alert
			alert("Enter 6 digit number");
			//Capturing the ID input field as a var
			var id_color = document.getElementById('in_Id');
			//Setting the input field to pink
			id_color.style.backgroundColor = 'pink';
			//Stopping the form from sending
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
		var thankYouMsg = `${shipInfo.name} (Customer #${shipInfo.cid}) for your purchase. Your package will be sent by  '${shipInfo.pc}'`;
		//Holds the container to display the thank you message
		var sendThanks = document.getElementById('thanksCustomer');
		//Setting the contents of the container to the thank you message
		sendThanks.innerHTML = thankYouMsg;
		sendThanks.style.backgroundColor = 'greenyellow';

		//Stop the form from sending
		return false;

	}
}
