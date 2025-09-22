const formulaire = document.querySelector(".somme");
const total = document.querySelector(".total span");

const nb1 = formulaire.querySelector('input[name="nb1"]');
const nb2 = formulaire.querySelector('input[name="nb2"]');

const boutonSomme = formulaire.querySelector(".bouton-somme");

boutonSomme.addEventListener("click", (event) => {
	event.preventDefault();
	let somme = Number(nb1.value) + Number(nb2.value);
	total.innerHTML = `${somme}`;
	return total;
});
