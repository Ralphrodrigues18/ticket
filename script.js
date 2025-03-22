document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticketForm");
    const container = document.getElementById("container");
    const ticketDiv = document.getElementById("ticket");

    const ticketNome = document.getElementById("ticketNome");
    const ticketEmail = document.getElementById("ticketEmail");
    const ticketGithub = document.getElementById("ticketGithub");
    const ticketAvatar = document.getElementById("ticketAvatar");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Capturar os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const github = document.getElementById("github").value;
        const avatarInput = document.getElementById("avatar");

        // Criar um objeto URL para a imagem do avatar
        if (avatarInput.files.length > 0){
            const avatarURL = URL.createObjectURL(avatarInput.files[0]);
            ticketAvatar.src = avatarURL;
        }

        // Atualizar os valores do ticket
        ticketNome.textContent = nome;
        ticketEmail.textContent = email;
        ticketGithub.textContent = github;
        

        // Esconder o formulário e exibir o ticket
        container.style.display = "none";
        ticketDiv.style.display = "block";
    });
});
