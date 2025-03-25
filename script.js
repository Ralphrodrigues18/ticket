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

        //pega dos dados da pessoa
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const github = document.getElementById("github").value;
        const avatarInput = document.getElementById("avatar");

        //carrega a foto da pessoa
        if (avatarInput.files.length > 0){
            const avatarURL = URL.createObjectURL(avatarInput.files[0]);
            ticketAvatar.src = avatarURL;
        }

        //adiciona os valores no ticket
        ticketNome.textContent = nome;
        ticketEmail.textContent = email;
        ticketGithub.textContent = github;
        

        //esconde o formulario
        container.style.display = "none";
        ticketDiv.style.display = "block";
    });
});
