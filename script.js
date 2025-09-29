//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existing = document.getElementById("existing");

existing.addEventListener("click", () => {
	const userCredential = JSON.parse(localStorage.getItem("userCredential"));
	alert(`Logged in as ${userCredential.username}`)
})

window.onload = function(){
	const userCredential = localStorage.getItem("userCredential");
	if(userCredential){
		existing.hidden = false;
		checkboxInput.checked = true;
		alert
	}
}
function onSubmit(e){
	// e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;
	const isRemember = checkboxInput.checked;

	const credential = {username, password, isRemember}

	alert(`Logged in as ${username}`);


	if(!isRemember){
		localStorage.removeItem("userCredential")
		alert("credentials are not stored")
	}else {
		localStorage.setItem("userCredential",JSON.stringify(credential))
		alert("credentials are stored in localStorage")
	}
	
}