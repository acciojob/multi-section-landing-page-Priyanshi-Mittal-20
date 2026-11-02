//your JS code here. If required.
let btn= document.getElementById("btn")
btn.addEventListener("click",()=>formValidation(e))

function formValidation(e)
{
	e.preventDefault()
	let name=document.getElementById("name").value
	let email= document.getElementById("email").value
	let tel=document.getElementById("tel").value
	let msg= document.getElementById("msg").value
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!emailRegex.test(email))
	{
		alert("Invalid email format.")
	}
	if(tel)
	{
		const phoneRegex = /^[6-9]\d{9}$/;
		if(!phoneRegex.test(tel))
		{
			alert("Invalid phone format.")
		}
	}
	if(msg.length<100)
	{
		alert("Minimum 100 characters required.")
	}
}