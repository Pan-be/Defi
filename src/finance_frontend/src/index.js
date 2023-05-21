import { finance_backend } from "../../declarations/finance_backend"

window.addEventListener("load", async () => {
	const currentAmount = await finance_backend.checkBalance()
	document.getElementById("value").textContent =
		Math.round(currentAmount * 100) / 100
})

document.querySelector("form").addEventListener("submit", async (e) => {
	e.preventDefault()

	const btn = e.target.querySelector("#submit-btn")
	const inputAmount = parseFloat(document.getElementById("input-amount").value)
	const outputAmount = parseFloat(
		document.getElementById("withdrawal-amount").value
	)

	btn.setAttribute("disabled", true)
	// console.log("submitted")
	if (document.getElementById("input-amount").value.length != 0) {
		await finance_backend.topUp(inputAmount)
	} else if (document.getElementById("withdrawal-amount").value.length != 0) {
		await finance_backend.withdraw(outputAmount)
	}

	const currentAmount = await finance_backend.checkBalance()
	document.getElementById("value").textContent =
		Math.round(currentAmount * 100) / 100

	document.getElementById("input-amount").value = ""
	document.getElementById("withdrawal-amount").value = ""

	btn.removeAttribute("disabled")
})
