// Lincando os botões de criptografia e descriptografia
const encryptButton = document.getElementById("encrypt-button");
encryptButton.addEventListener("click", encrypt);

const decryptButton = document.getElementById("decrypt-button");
decryptButton.addEventListener("click", decrypt);

// Função que ira criptografar os textos do usuário.
function encrypt() {
	const message = document.getElementById("original-text").value;

	// Verifica se o campo de mensagem está vazio
	if (!message) {
		swal({
			title: "Erro!",
			text: "Por favor, preencha o campo de mensagem antes de criptografar",
			icon: "error",
			button: "Ok",
		});
		return; // interrompe a função
	}

	const encryptedMessage = btoa(message);

	let result = document.getElementById("crypto__text");
	const copyBtn = document.getElementById("copy-button");

	document.querySelector(".active").style.display = "none";
	result.style.display = "block";
	copyBtn.style.display = "block";

	document.getElementById("original-text").value = message;
	result.textContent = encryptedMessage;
}

// Função que ira descriptografar o texto.
function decrypt() {
	const encryptedMessage = document.getElementById("crypto__text").textContent;
	const message = atob(encryptedMessage);

	// Verifica se o campo de mensagem está vazio
	if (!message) {
		swal({
			title: "Erro!",
			text: "Não há nenhuma mensagem no campo de texto para descriptografar",
			icon: "error",
			button: "Ok",
		});
		return; // interrompe a função
	}

	let result = document.getElementById("crypto__text");

	document.querySelector(".active").style.display = "none";
	result.style.display = "block";

	document.getElementById("original-text").value = encryptedMessage;
	result.textContent = message;
}

// Adicionando a função de copiar texto
const clipboard = new ClipboardJS(".copy-button");

clipboard.on("success", function (e) {
	swal({
		title: "Copiado!",
		text: "O texto foi copiado para a área de transferência",
		icon: "success",
		button: "Ok",
	});
});

clipboard.on("error", function (e) {
	swal({
		title: "Erro!",
		text: "Não foi possível copiar o texto",
		icon: "error",
		button: "Ok",
	});
});
