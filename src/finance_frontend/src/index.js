import { finance_backend } from "../../declarations/finance_backend"

window.addEventListener("load", async () => {
	update()
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
	}
	if (document.getElementById("withdrawal-amount").value.length != 0) {
		await finance_backend.withdraw(outputAmount)
	}

	update()

	document.getElementById("input-amount").value = ""
	document.getElementById("withdrawal-amount").value = ""

	btn.removeAttribute("disabled")
})

async function update() {
	const currentAmount = await finance_backend.checkBalance()
	document.getElementById("value").textContent =
		Math.round(currentAmount * 100) / 100
}
