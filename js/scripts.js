const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificação se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o e-mail está preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }
    // Se todos os campos estiverem preenchidos, envia o form
    form.submit();
})

// Função que valida e-mail
function isEmailValid(email) {
    
    // cria uma regex para validar email
    const emailRagex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRagex.test(email)) {
        return true;
    }
    return false;
}