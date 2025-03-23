let listaProjetos = document.getElementById('listaProjetos');

for (let projeto of dadosProjetos) {
    listaProjetos.innerHTML += `
    <div class="project">
        <img src="${projeto.image}">
        <div class="description">
            <h2>${projeto.title}</h2>
            <p>${projeto.description}</p>
            <div class="links">
                <a href="${projeto.linkProjeto}" target="_blank">Ver Projeto</a>
                <a href="${projeto.linkGithub}" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
    `
}

let listaCertificados = document.getElementById('listaCertificados');

function filtroCertificados(category) {
    listaCertificados.innerHTML = '';

    for (let dado of dados) {
        if (category === 'all' || dado.class.includes(category)) {
            listaCertificados.innerHTML += `
            <li class="${dado.class}">
                <img src="${dado.image}">
                <a href="${dado.link}" target="_blank">Ver Certificado</a>
            </li>`;
        }
    }
}

// Inicializa a lista de certificados mostrando todos
filtroCertificados('all');