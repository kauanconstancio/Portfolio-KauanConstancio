let listaProjetos = document.getElementById('listaProjetos');

for (let projeto of dadosProjetos) {
    listaProjetos.innerHTML += `
    <div class="project">
        <img src="${projeto.image}">
        <div class="description">
            <h2>${projeto.title}</h2>
            <div class="links">
                <a href="${projeto.linkProjeto}" target="_blank">Ver Projeto</a>
                <a href="${projeto.linkGithub}" target="_blank">GitHub do Projeto</a>
            </div>
        </div>
    </div>
    `
}

let listaCertificados = document.getElementById('listaCertificados');

for (let dado of dados) {
    listaCertificados.innerHTML += `
    <li class="${dado.class}">
        <img src="${dado.image}">
        <a href="${dado.link}"target="_blank">Ver Certificado</a>
    </li>`;
}


function filterCertificates(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Show all items on initial load
filterCertificates('all');

