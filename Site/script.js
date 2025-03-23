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
        },
        "Tanaka": {
            description: "Tanaka é um empresário de Edo que viajou para Europa após a Segunda Grande Guerra para expandir os negócios de sua família. Ele possui uma posição importante na empresa de seu pai, mas suas habilidades comerciais não são particularmente úteis para a sobrevivência. Tanaka é um dos quatorze participantes forçados a participar do Festival de Termina",
            image: "Tanaka.jpg"
        },
        "Abella": {
            description: "Abella é uma mecânica do Reino de Oldegård. Ela é uma das participantes do Festival de Termina. ",
            image: "Abella.jpg"
        },
        "Osaa": {
            description: "O'saa é um Mago Amarelo de Abyssonia e aprendiz do poderoso mago Nas'hrah. Ele é um dos participantes do Festival de Termina",
            image: "Osaa.jpg"
        },
        "Samarie": {
            description: "Samarie é uma mulher misteriosa que está obcecada por Marina. Ela é uma das participantes do Festival de Termina.",
            image: "Samarie.jpg"
        },
        "Olivia": {
            description: "Olivia Haas é uma botânica em cadeira de rodas do Império de Bremen. Sua irmã, Reila Audrey Haas, desempenha um papel importante no jogo como a entidade mecânica conhecida como Lógica. Olivia é uma das participantes do Festival de Termina.",
            image: "Olívia.jpg"
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
