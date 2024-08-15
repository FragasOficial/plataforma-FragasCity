document.getElementById("btnBusca").addEventListener("click", function () {
    const termoBusca = document.getElementById("highlight").value.toLowerCase();
    const cards = document.querySelectorAll(".card-services");

    cards.forEach(card => {
        // Esconde todos os cards inicialmente
        card.style.display = "none";

        // Verifica se o termo de busca aparece em algum lugar dentro do card
        const conteudoCard = card.textContent.toLowerCase();

        if (conteudoCard.includes(termoBusca)) {
            card.style.display = "block"; // Exibe o card correspondente
        }
    });
});






