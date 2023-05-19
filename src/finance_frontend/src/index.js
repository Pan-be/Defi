import { finance_backend } from "../../declarations/finance_backend"

window.addEventListener("load", async () => {
	const currentAmount = awaith finance_backend.checkBalance()
	document.getElementById("value").textContent = currentAmount
})
