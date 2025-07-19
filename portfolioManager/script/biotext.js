// biotext.js

// 1. Obter o elemento
const bioText = document.getElementById('bio-text');

// 2. Carregar o valor salvo do localStorage quando a página carregar
// Verifique se há um valor salvo em 'bioTextContent' no localStorage
const savedBioText = localStorage.getItem('bioTextContent');
if (savedBioText) {
    bioText.value = savedBioText; // Se houver, defina o valor do textarea
}

// 3. Função para modificar e salvar o texto
function modifyBioText() {
    // 4. Salvar o valor atual do bioText no localStorage
    localStorage.setItem('bioTextContent', bioText.value);

    // Opcional: mostrar um alerta para confirmar que foi salvo (pode ser removido em produção)
    alert('Texto salvo com sucesso!');
}

// 5. Adicionar um event listener para salvar automaticamente (opcional, mas recomendado)
// Por exemplo, ao sair do campo de texto (blur) ou ao digitar (input)
