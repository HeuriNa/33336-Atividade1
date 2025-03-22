document.addEventListener("DOMContentLoaded", function() {
    const characterInfo = document.getElementById("character-info");
    const characterImage = document.getElementById("character-image");

    const characters = {
        "Marcoh": {
            description: "Marcoh é um personagem jogável e potencial membro do grupo. Sua vida nos ringues de boxe subterrâneos o ensinou a lidar com adversários desarmado, destacando-se no combate corpo a corpo. Ele é um dos quatorze participantes forçados a participar do Festival de Termina.",
            image: "Marcoh.jpg"
        },
        "Karin": {
            description: "Karin é uma jornalista que cobriu guerras, golpes de estado e outros desastres, adquirindo habilidades como persuasão e arrombamento que a ajudam a sobreviver. Ela é uma das quatorze participantes do Festival de Termina.",
            image: "Karin.jpg"
        },
        "Levi": {
            description: "Levi é um ex-soldado do Reino da Boêmia, especificamente da cidade de Prehevil. Ele é um dos quatorze estranhos forçados a participar do Festival de Termina durante três dias sob o desígnio do Deus Antigo Rher.",
            image: "Levi.jpg"
        },
        "Marina": {
            description: "Marina é uma ocultista que se concentra no uso criativo de poderes de outro mundo.Embora não seja tão forte em habilidades ofensivas, suas capacidades não são menos impressionantes quando usadas corretamente. Ela é uma das quatorze participantes do Festival de Termina.",
            image: "Marina.jpg"
        }
    };

    document.querySelectorAll("#characters a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const characterName = this.textContent;

            // Atualiza o texto
            characterInfo.innerHTML = `<h2>${characterName}</h2><p>${characters[characterName].description}</p>`;

            // Atualiza a imagem
            characterImage.src = characters[characterName].image;
            characterImage.style.display = "block"; // Torna a imagem visível
            characterInfo.appendChild(characterImage); // Garante que a imagem seja exibida na área certa
        });
    });
});
